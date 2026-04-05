# Chess Diagram Format Comparison

## SVG Diagram — Fork Example

**White to play: Nf7+ forks king and rook**

<svg viewBox="0 0 360 400" xmlns="http://www.w3.org/2000/svg" style="max-width:400px">
  <!-- Board background (dark squares) -->
  <rect x="0" y="0" width="360" height="360" fill="#b58863"/>
  <!-- Light squares -->
  <rect x="0" y="0" width="45" height="45" fill="#f0d9b5"/>
  <rect x="90" y="0" width="45" height="45" fill="#f0d9b5"/>
  <rect x="180" y="0" width="45" height="45" fill="#f0d9b5"/>
  <rect x="270" y="0" width="45" height="45" fill="#f0d9b5"/>
  <rect x="45" y="45" width="45" height="45" fill="#f0d9b5"/>
  <rect x="135" y="45" width="45" height="45" fill="#f0d9b5"/>
  <rect x="225" y="45" width="45" height="45" fill="#f0d9b5"/>
  <rect x="315" y="45" width="45" height="45" fill="#f0d9b5"/>
  <rect x="0" y="90" width="45" height="45" fill="#f0d9b5"/>
  <rect x="90" y="90" width="45" height="45" fill="#f0d9b5"/>
  <rect x="180" y="90" width="45" height="45" fill="#f0d9b5"/>
  <rect x="270" y="90" width="45" height="45" fill="#f0d9b5"/>
  <rect x="45" y="135" width="45" height="45" fill="#f0d9b5"/>
  <rect x="135" y="135" width="45" height="45" fill="#f0d9b5"/>
  <rect x="225" y="135" width="45" height="45" fill="#f0d9b5"/>
  <rect x="315" y="135" width="45" height="45" fill="#f0d9b5"/>
  <rect x="0" y="180" width="45" height="45" fill="#f0d9b5"/>
  <rect x="90" y="180" width="45" height="45" fill="#f0d9b5"/>
  <rect x="180" y="180" width="45" height="45" fill="#f0d9b5"/>
  <rect x="270" y="180" width="45" height="45" fill="#f0d9b5"/>
  <rect x="45" y="225" width="45" height="45" fill="#f0d9b5"/>
  <rect x="135" y="225" width="45" height="45" fill="#f0d9b5"/>
  <rect x="225" y="225" width="45" height="45" fill="#f0d9b5"/>
  <rect x="315" y="225" width="45" height="45" fill="#f0d9b5"/>
  <rect x="0" y="270" width="45" height="45" fill="#f0d9b5"/>
  <rect x="90" y="270" width="45" height="45" fill="#f0d9b5"/>
  <rect x="180" y="270" width="45" height="45" fill="#f0d9b5"/>
  <rect x="270" y="270" width="45" height="45" fill="#f0d9b5"/>
  <rect x="45" y="315" width="45" height="45" fill="#f0d9b5"/>
  <rect x="135" y="315" width="45" height="45" fill="#f0d9b5"/>
  <rect x="225" y="315" width="45" height="45" fill="#f0d9b5"/>
  <rect x="315" y="315" width="45" height="45" fill="#f0d9b5"/>

  <!-- Highlighted squares (fork targets) -->
  <rect x="225" y="0" width="45" height="45" fill="#ff6b6b" opacity="0.5"/>
  <rect x="315" y="0" width="45" height="45" fill="#ff6b6b" opacity="0.5"/>
  <!-- Destination square highlight -->
  <rect x="225" y="45" width="45" height="45" fill="#aaf0aa" opacity="0.5"/>

  <!-- Arrow: Knight e5 → f7 -->
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#d63031"/>
    </marker>
  </defs>
  <line x1="202" y1="202" x2="240" y2="75" stroke="#d63031" stroke-width="3" marker-end="url(#arrowhead)"/>

  <!-- Pieces (font-size 32, centered in squares) -->
  <!-- Black King on g8 -->
  <text x="292" y="33" text-anchor="middle" font-size="32" font-family="serif">♚</text>
  <!-- Black Rook on h8 -->
  <text x="337" y="33" text-anchor="middle" font-size="32" font-family="serif">♜</text>
  <!-- Black pawns on f7, g7, h7 -->
  <text x="247" y="78" text-anchor="middle" font-size="32" font-family="serif">♟</text>
  <text x="292" y="78" text-anchor="middle" font-size="32" font-family="serif">♟</text>
  <text x="337" y="78" text-anchor="middle" font-size="32" font-family="serif">♟</text>
  <!-- White Knight on e5 -->
  <text x="202" y="213" text-anchor="middle" font-size="32" font-family="serif">♘</text>
  <!-- White King on g1 -->
  <text x="292" y="348" text-anchor="middle" font-size="32" font-family="serif">♔</text>

  <!-- Coordinates -->
  <text x="22" y="375" font-size="11" fill="#666" text-anchor="middle" font-family="sans-serif">a</text>
  <text x="67" y="375" font-size="11" fill="#666" text-anchor="middle" font-family="sans-serif">b</text>
  <text x="112" y="375" font-size="11" fill="#666" text-anchor="middle" font-family="sans-serif">c</text>
  <text x="157" y="375" font-size="11" fill="#666" text-anchor="middle" font-family="sans-serif">d</text>
  <text x="202" y="375" font-size="11" fill="#666" text-anchor="middle" font-family="sans-serif">e</text>
  <text x="247" y="375" font-size="11" fill="#666" text-anchor="middle" font-family="sans-serif">f</text>
  <text x="292" y="375" font-size="11" fill="#666" text-anchor="middle" font-family="sans-serif">g</text>
  <text x="337" y="375" font-size="11" fill="#666" text-anchor="middle" font-family="sans-serif">h</text>

  <!-- Rank numbers -->
  <text x="370" y="30" font-size="11" fill="#666" font-family="sans-serif">8</text>
  <text x="370" y="75" font-size="11" fill="#666" font-family="sans-serif">7</text>
  <text x="370" y="120" font-size="11" fill="#666" font-family="sans-serif">6</text>
  <text x="370" y="165" font-size="11" fill="#666" font-family="sans-serif">5</text>
  <text x="370" y="210" font-size="11" fill="#666" font-family="sans-serif">4</text>
  <text x="370" y="255" font-size="11" fill="#666" font-family="sans-serif">3</text>
  <text x="370" y="300" font-size="11" fill="#666" font-family="sans-serif">2</text>
  <text x="370" y="345" font-size="11" fill="#666" font-family="sans-serif">1</text>

  <!-- Caption -->
  <text x="180" y="398" text-anchor="middle" font-size="12" fill="#333" font-family="sans-serif" font-style="italic">Ne5-f7+ forks ♚ and ♜</text>
</svg>

> **FEN:** `6kr/5ppp/8/8/4N3/8/8/6K1 w - - 0 1`

---

## SVG Diagram — Lucena Position (Endgame)

**The Lucena Position — White wins with the "bridge" technique**

<svg viewBox="0 0 360 400" xmlns="http://www.w3.org/2000/svg" style="max-width:400px">
  <!-- Board background (dark squares) -->
  <rect x="0" y="0" width="360" height="360" fill="#b58863"/>
  <!-- Light squares -->
  <rect x="0" y="0" width="45" height="45" fill="#f0d9b5"/>
  <rect x="90" y="0" width="45" height="45" fill="#f0d9b5"/>
  <rect x="180" y="0" width="45" height="45" fill="#f0d9b5"/>
  <rect x="270" y="0" width="45" height="45" fill="#f0d9b5"/>
  <rect x="45" y="45" width="45" height="45" fill="#f0d9b5"/>
  <rect x="135" y="45" width="45" height="45" fill="#f0d9b5"/>
  <rect x="225" y="45" width="45" height="45" fill="#f0d9b5"/>
  <rect x="315" y="45" width="45" height="45" fill="#f0d9b5"/>
  <rect x="0" y="90" width="45" height="45" fill="#f0d9b5"/>
  <rect x="90" y="90" width="45" height="45" fill="#f0d9b5"/>
  <rect x="180" y="90" width="45" height="45" fill="#f0d9b5"/>
  <rect x="270" y="90" width="45" height="45" fill="#f0d9b5"/>
  <rect x="45" y="135" width="45" height="45" fill="#f0d9b5"/>
  <rect x="135" y="135" width="45" height="45" fill="#f0d9b5"/>
  <rect x="225" y="135" width="45" height="45" fill="#f0d9b5"/>
  <rect x="315" y="135" width="45" height="45" fill="#f0d9b5"/>
  <rect x="0" y="180" width="45" height="45" fill="#f0d9b5"/>
  <rect x="90" y="180" width="45" height="45" fill="#f0d9b5"/>
  <rect x="180" y="180" width="45" height="45" fill="#f0d9b5"/>
  <rect x="270" y="180" width="45" height="45" fill="#f0d9b5"/>
  <rect x="45" y="225" width="45" height="45" fill="#f0d9b5"/>
  <rect x="135" y="225" width="45" height="45" fill="#f0d9b5"/>
  <rect x="225" y="225" width="45" height="45" fill="#f0d9b5"/>
  <rect x="315" y="225" width="45" height="45" fill="#f0d9b5"/>
  <rect x="0" y="270" width="45" height="45" fill="#f0d9b5"/>
  <rect x="90" y="270" width="45" height="45" fill="#f0d9b5"/>
  <rect x="180" y="270" width="45" height="45" fill="#f0d9b5"/>
  <rect x="270" y="270" width="45" height="45" fill="#f0d9b5"/>
  <rect x="45" y="315" width="45" height="45" fill="#f0d9b5"/>
  <rect x="135" y="315" width="45" height="45" fill="#f0d9b5"/>
  <rect x="225" y="315" width="45" height="45" fill="#f0d9b5"/>
  <rect x="315" y="315" width="45" height="45" fill="#f0d9b5"/>

  <!-- Highlighted pawn promotion square -->
  <rect x="180" y="0" width="45" height="45" fill="#aaf0aa" opacity="0.4"/>

  <!-- Arrow: Rook builds bridge Ra4→Re4 -->
  <defs>
    <marker id="arr2" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#2d7dd2"/>
    </marker>
  </defs>
  <line x1="22" y1="167" x2="190" y2="167" stroke="#2d7dd2" stroke-width="3" stroke-dasharray="6,3" marker-end="url(#arr2)"/>

  <!-- Pieces -->
  <!-- White King on e8 -->
  <text x="202" y="33" text-anchor="middle" font-size="32" font-family="serif">♔</text>
  <!-- White Pawn on d7 -->
  <text x="157" y="78" text-anchor="middle" font-size="32" font-family="serif">♙</text>
  <!-- White Rook on a4 -->
  <text x="22" y="168" text-anchor="middle" font-size="32" font-family="serif">♖</text>
  <!-- Black Rook on a1 -->
  <text x="22" y="348" text-anchor="middle" font-size="32" font-family="serif">♜</text>
  <!-- Black King on d6 -->
  <text x="157" y="123" text-anchor="middle" font-size="32" font-family="serif">♚</text>

  <!-- Coordinates -->
  <text x="22" y="375" font-size="11" fill="#666" text-anchor="middle" font-family="sans-serif">a</text>
  <text x="67" y="375" font-size="11" fill="#666" text-anchor="middle" font-family="sans-serif">b</text>
  <text x="112" y="375" font-size="11" fill="#666" text-anchor="middle" font-family="sans-serif">c</text>
  <text x="157" y="375" font-size="11" fill="#666" text-anchor="middle" font-family="sans-serif">d</text>
  <text x="202" y="375" font-size="11" fill="#666" text-anchor="middle" font-family="sans-serif">e</text>
  <text x="247" y="375" font-size="11" fill="#666" text-anchor="middle" font-family="sans-serif">f</text>
  <text x="292" y="375" font-size="11" fill="#666" text-anchor="middle" font-family="sans-serif">g</text>
  <text x="337" y="375" font-size="11" fill="#666" text-anchor="middle" font-family="sans-serif">h</text>
  <text x="370" y="30" font-size="11" fill="#666" font-family="sans-serif">8</text>
  <text x="370" y="75" font-size="11" fill="#666" font-family="sans-serif">7</text>
  <text x="370" y="120" font-size="11" fill="#666" font-family="sans-serif">6</text>
  <text x="370" y="165" font-size="11" fill="#666" font-family="sans-serif">5</text>
  <text x="370" y="210" font-size="11" fill="#666" font-family="sans-serif">4</text>
  <text x="370" y="255" font-size="11" fill="#666" font-family="sans-serif">3</text>
  <text x="370" y="300" font-size="11" fill="#666" font-family="sans-serif">2</text>
  <text x="370" y="345" font-size="11" fill="#666" font-family="sans-serif">1</text>

  <!-- Caption -->
  <text x="180" y="398" text-anchor="middle" font-size="12" fill="#333" font-family="sans-serif" font-style="italic">White plays Ra4 → Re4, building the "bridge"</text>
</svg>

> **FEN:** `4K3/3P4/3k4/R7/8/8/8/r7 w - - 0 1`

---

## For comparison — the old ASCII format

```
  a b c d e f g h
8 · · · · · · ♚ ·  8
7 · · · · · ♟ ♟ ♟  7
6 · · · · · · · ·  6
5 · · · · ♘ · · ·  5
4 · · · · · · · ·  4
3 · · · · · · · ·  3
2 · · · · · · · ·  2
1 · · · · · · ♔ ·  1
  a b c d e f g h
```

The SVG version gives us: colored squares, highlighted targets (red), move destination (green), arrows showing the move, and a caption — all rendering natively in GitHub/VS Code markdown preview.
