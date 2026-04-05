const fs = require('fs');
const path = require('path');

// SVG coordinate → board position mapping
const X_TO_FILE = { 22: 0, 67: 1, 112: 2, 157: 3, 202: 4, 247: 5, 292: 6, 337: 7 };
const Y_TO_RANK = { 33: 7, 78: 6, 123: 5, 168: 4, 213: 3, 258: 2, 303: 1, 348: 0 };

// Unicode chess pieces → FEN characters
const PIECE_MAP = {
  '♔': 'K', '♕': 'Q', '♖': 'R', '♗': 'B', '♘': 'N', '♙': 'P',
  '♚': 'k', '♛': 'q', '♜': 'r', '♝': 'b', '♞': 'n', '♟': 'p',
};

function findClosestKey(value, map) {
  let closest = null;
  let minDist = Infinity;
  for (const key of Object.keys(map)) {
    const dist = Math.abs(Number(key) - value);
    if (dist < minDist) {
      minDist = dist;
      closest = key;
    }
  }
  return minDist <= 15 ? closest : null; // tolerance of 15px
}

function extractPiecesFromSvg(svgText) {
  const pieces = [];
  // Match <text> elements containing chess Unicode characters
  const textRegex = /<text\s[^>]*?x="([^"]+)"[^>]*?y="([^"]+)"[^>]*?>([♔♕♖♗♘♙♚♛♜♝♞♟])<\/text>/g;
  let match;
  while ((match = textRegex.exec(svgText)) !== null) {
    const x = parseFloat(match[1]);
    const y = parseFloat(match[2]);
    const piece = match[3];

    const fileKey = findClosestKey(x, X_TO_FILE);
    const rankKey = findClosestKey(y, Y_TO_RANK);

    if (fileKey !== null && rankKey !== null && PIECE_MAP[piece]) {
      pieces.push({
        file: X_TO_FILE[fileKey],
        rank: Y_TO_RANK[rankKey],
        fen: PIECE_MAP[piece],
      });
    }
  }
  return pieces;
}

function piecesToFen(pieces) {
  // Initialize empty 8x8 board
  const board = Array.from({ length: 8 }, () => Array(8).fill(null));

  for (const { file, rank, fen } of pieces) {
    board[7 - rank][file] = fen;
  }

  // Convert board to FEN position string
  const ranks = board.map(row => {
    let fenRow = '';
    let empty = 0;
    for (const sq of row) {
      if (sq === null) {
        empty++;
      } else {
        if (empty > 0) { fenRow += empty; empty = 0; }
        fenRow += sq;
      }
    }
    if (empty > 0) fenRow += empty;
    return fenRow;
  });

  return ranks.join('/') + ' w - - 0 1';
}

function isChessSvg(svgText) {
  // Must contain chess piece Unicode characters in <text> elements
  return /♔|♕|♖|♗|♘|♙|♚|♛|♜|♝|♞|♟/.test(svgText) && /<text/.test(svgText);
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Find all SVG blocks
  const svgRegex = /<svg[\s\S]*?<\/svg>/g;
  const replacements = [];

  let svgMatch;
  while ((svgMatch = svgRegex.exec(content)) !== null) {
    const svgText = svgMatch[0];
    if (!isChessSvg(svgText)) continue;

    const pieces = extractPiecesFromSvg(svgText);
    if (pieces.length === 0) continue;

    const fen = piecesToFen(pieces);
    const svgEnd = svgMatch.index + svgMatch[0].length;

    // Check if FEN already exists right after this SVG
    const afterSvg = content.substring(svgEnd, svgEnd + 200);
    if (afterSvg.includes('**FEN:**')) continue;

    replacements.push({ index: svgEnd, fen });
  }

  // Apply replacements in reverse order to preserve indices
  for (let i = replacements.length - 1; i >= 0; i--) {
    const { index, fen } = replacements[i];
    const insertion = `\n\n> **FEN:** \`${fen}\``;
    content = content.slice(0, index) + insertion + content.slice(index);
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
  }

  return replacements.length;
}

function walkDir(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
      files.push(...walkDir(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  return files;
}

// Main
const rootDir = path.resolve(__dirname, '..');
const mdFiles = walkDir(rootDir);
let totalDiagrams = 0;
let totalFiles = 0;

for (const file of mdFiles) {
  const count = processFile(file);
  if (count > 0) {
    const rel = path.relative(rootDir, file);
    console.log(`  ${rel}: ${count} diagram(s)`);
    totalDiagrams += count;
    totalFiles++;
  }
}

console.log(`\nDone: Added FEN to ${totalDiagrams} diagrams across ${totalFiles} files.`);
