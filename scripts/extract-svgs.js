const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

function walkDir(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules' && entry.name !== 'images') {
      files.push(...walkDir(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  return files;
}

function getAltText(contentBefore) {
  // Look for the closest preceding bold text or heading
  const lines = contentBefore.split('\n').filter(l => l.trim());
  for (let i = lines.length - 1; i >= 0; i--) {
    const line = lines[i].trim();
    // Bold text like **The Royal Fork:**
    const boldMatch = line.match(/\*\*([^*]+)\*\*/);
    if (boldMatch) return boldMatch[1].replace(/:$/, '').trim();
    // Heading
    const headingMatch = line.match(/^#{1,6}\s+(.+)/);
    if (headingMatch) return headingMatch[1].trim();
  }
  return 'Chess position';
}

function isChessSvg(svgText) {
  return /[♔♕♖♗♘♙♚♛♜♝♞♟]/.test(svgText) && /<text/.test(svgText);
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const relPath = path.relative(rootDir, filePath);
  const dir = path.dirname(relPath).replace(/\\/g, '/');
  const baseName = path.basename(relPath, '.md');

  const svgRegex = /<svg[\s\S]*?<\/svg>/g;
  const replacements = [];
  let diagramIndex = 0;

  let match;
  while ((match = svgRegex.exec(content)) !== null) {
    if (!isChessSvg(match[0])) continue;
    diagramIndex++;

    const altText = getAltText(content.substring(0, match.index));
    const svgFileName = diagramIndex === 1 ? `${baseName}.svg` : `${baseName}-${diagramIndex}.svg`;
    const imgDir = path.join(rootDir, 'images', dir);
    const imgPath = path.join(imgDir, svgFileName);

    // Build proper standalone SVG with XML declaration
    let svgBody = match[0];
    // Ensure exactly one xmlns attribute
    if (!svgBody.includes('xmlns=')) {
      svgBody = svgBody.replace(/<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
    }
    // Remove style="max-width:..." since standalone SVGs don't need it
    const svgContent = '<?xml version="1.0" encoding="UTF-8"?>\n' + svgBody;

    // Calculate relative path from the markdown file to the image
    const mdDir = path.dirname(filePath);
    let relImgPath = path.relative(mdDir, imgPath).replace(/\\/g, '/');

    replacements.push({
      start: match.index,
      end: match.index + match[0].length,
      imgDir,
      imgPath,
      svgContent,
      markdownImg: `![${altText}](${relImgPath})`,
    });
  }

  if (replacements.length === 0) return 0;

  // Write SVG files and replace inline SVGs in reverse order
  for (let i = replacements.length - 1; i >= 0; i--) {
    const r = replacements[i];
    fs.mkdirSync(r.imgDir, { recursive: true });
    fs.writeFileSync(r.imgPath, r.svgContent, 'utf8');
    content = content.slice(0, r.start) + r.markdownImg + content.slice(r.end);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  const rel = path.relative(rootDir, filePath).replace(/\\/g, '/');
  console.log(`  ${rel}: ${replacements.length} SVG(s) extracted`);
  return replacements.length;
}

// Main
const mdFiles = walkDir(rootDir);
let totalDiagrams = 0;
let totalFiles = 0;

for (const file of mdFiles) {
  const count = processFile(file);
  if (count > 0) {
    totalDiagrams += count;
    totalFiles++;
  }
}

console.log(`\nDone: Extracted ${totalDiagrams} SVGs from ${totalFiles} files into images/.`);
