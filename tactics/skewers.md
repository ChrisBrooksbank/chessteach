# Skewers

A **skewer** is the reverse of a [pin](pins.md). A piece attacks a valuable enemy piece, and when that piece moves, a less valuable piece behind it is captured.

**See also:** [Pins](pins.md) | [Discovered Attacks](discovered-attacks.md)

---

## How Skewers Work

1. A long-range piece (bishop, rook, or queen) attacks a valuable piece
2. The valuable piece must move (especially if it's the king in check)
3. The piece behind it is captured

---

## Types of Skewers

### Absolute Skewer (Through the King)

The most common type. The king is checked and must move, exposing a piece behind it.

<svg viewBox="0 0 390 400" xmlns="http://www.w3.org/2000/svg" style="max-width:400px">
  <rect x="0" y="0" width="360" height="360" fill="#b58863"/>
  <rect x="0" y="0" width="45" height="45" fill="#f0d9b5"/><rect x="90" y="0" width="45" height="45" fill="#f0d9b5"/><rect x="180" y="0" width="45" height="45" fill="#f0d9b5"/><rect x="270" y="0" width="45" height="45" fill="#f0d9b5"/>
  <rect x="45" y="45" width="45" height="45" fill="#f0d9b5"/><rect x="135" y="45" width="45" height="45" fill="#f0d9b5"/><rect x="225" y="45" width="45" height="45" fill="#f0d9b5"/><rect x="315" y="45" width="45" height="45" fill="#f0d9b5"/>
  <rect x="0" y="90" width="45" height="45" fill="#f0d9b5"/><rect x="90" y="90" width="45" height="45" fill="#f0d9b5"/><rect x="180" y="90" width="45" height="45" fill="#f0d9b5"/><rect x="270" y="90" width="45" height="45" fill="#f0d9b5"/>
  <rect x="45" y="135" width="45" height="45" fill="#f0d9b5"/><rect x="135" y="135" width="45" height="45" fill="#f0d9b5"/><rect x="225" y="135" width="45" height="45" fill="#f0d9b5"/><rect x="315" y="135" width="45" height="45" fill="#f0d9b5"/>
  <rect x="0" y="180" width="45" height="45" fill="#f0d9b5"/><rect x="90" y="180" width="45" height="45" fill="#f0d9b5"/><rect x="180" y="180" width="45" height="45" fill="#f0d9b5"/><rect x="270" y="180" width="45" height="45" fill="#f0d9b5"/>
  <rect x="45" y="225" width="45" height="45" fill="#f0d9b5"/><rect x="135" y="225" width="45" height="45" fill="#f0d9b5"/><rect x="225" y="225" width="45" height="45" fill="#f0d9b5"/><rect x="315" y="225" width="45" height="45" fill="#f0d9b5"/>
  <rect x="0" y="270" width="45" height="45" fill="#f0d9b5"/><rect x="90" y="270" width="45" height="45" fill="#f0d9b5"/><rect x="180" y="270" width="45" height="45" fill="#f0d9b5"/><rect x="270" y="270" width="45" height="45" fill="#f0d9b5"/>
  <rect x="45" y="315" width="45" height="45" fill="#f0d9b5"/><rect x="135" y="315" width="45" height="45" fill="#f0d9b5"/><rect x="225" y="315" width="45" height="45" fill="#f0d9b5"/><rect x="315" y="315" width="45" height="45" fill="#f0d9b5"/>
  <rect x="45" y="180" width="45" height="45" fill="#d63031" opacity="0.35"/>
  <defs><marker id="ah" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0,10 3.5,0 7" fill="#d63031"/></marker></defs>
  <text x="67" y="33" font-size="30" text-anchor="middle" dominant-baseline="central" font-family="serif">♛</text>
  <text x="67" y="213" font-size="30" text-anchor="middle" dominant-baseline="central" font-family="serif">♚</text>
  <text x="67" y="348" font-size="30" text-anchor="middle" dominant-baseline="central" font-family="serif">♖</text>
  <text x="292" y="348" font-size="30" text-anchor="middle" dominant-baseline="central" font-family="serif">♔</text>
  <line x1="67" y1="337" x2="67" y2="202" stroke="#d63031" stroke-width="3" marker-end="url(#ah)"/>
  <line x1="67" y1="202" x2="67" y2="22" stroke="#d63031" stroke-width="3" marker-end="url(#ah)" stroke-dasharray="6,4"/>
  <text x="22" y="375" font-size="11" fill="#666" text-anchor="middle" font-family="sans-serif">a</text>
  <text x="67" y="375" font-size="11" fill="#666" text-anchor="middle" font-family="sans-serif">b</text>
  <text x="112" y="375" font-size="11" fill="#666" text-anchor="middle" font-family="sans-serif">c</text>
  <text x="157" y="375" font-size="11" fill="#666" text-anchor="middle" font-family="sans-serif">d</text>
  <text x="202" y="375" font-size="11" fill="#666" text-anchor="middle" font-family="sans-serif">e</text>
  <text x="247" y="375" font-size="11" fill="#666" text-anchor="middle" font-family="sans-serif">f</text>
  <text x="292" y="375" font-size="11" fill="#666" text-anchor="middle" font-family="sans-serif">g</text>
  <text x="337" y="375" font-size="11" fill="#666" text-anchor="middle" font-family="sans-serif">h</text>
  <text x="370" y="33" font-size="11" fill="#666" font-family="sans-serif">8</text>
  <text x="370" y="78" font-size="11" fill="#666" font-family="sans-serif">7</text>
  <text x="370" y="123" font-size="11" fill="#666" font-family="sans-serif">6</text>
  <text x="370" y="168" font-size="11" fill="#666" font-family="sans-serif">5</text>
  <text x="370" y="213" font-size="11" fill="#666" font-family="sans-serif">4</text>
  <text x="370" y="258" font-size="11" fill="#666" font-family="sans-serif">3</text>
  <text x="370" y="303" font-size="11" fill="#666" font-family="sans-serif">2</text>
  <text x="370" y="348" font-size="11" fill="#666" font-family="sans-serif">1</text>
</svg>

> **FEN:** `1q6/8/8/8/1k6/8/8/1R4K1 w - - 0 1`

### Relative Skewer

The front piece is more valuable than the rear piece but is not the king. The front piece "should" move, allowing capture of the rear piece.

```
Example: White Bg2, Black Qd5, Black Ra8.
Bg2 attacks the queen through to the rook. The queen moves, and Bxa8 wins the rook.
```

---

## Skewer vs Pin

| Feature | Pin | Skewer |
|---------|-----|--------|
| More valuable piece | Behind (shielded) | In front (attacked) |
| Less valuable piece | In front (can't/shouldn't move) | Behind (captured after front moves) |
| Effect | Restricts the front piece | Wins the rear piece |

---

## Common Skewer Patterns

- **Back rank skewer:** Rook or queen checks the king along the back rank, winning a piece behind it
- **Diagonal skewer:** Bishop attacks king and piece on the same diagonal
- **Queen skewer:** The queen's versatility makes it the best skewering piece

## Practical Advice

- Look for skewers whenever the king and another piece are aligned on a rank, file, or diagonal
- After your opponent's king moves, check if any pieces are left on the vacated line
- Skewers are especially common in [endgames](../endgames/index.md) where pieces are more exposed

---

**Next:** [Discovered Attacks](discovered-attacks.md) | **Back to:** [Tactics Index](index.md)
