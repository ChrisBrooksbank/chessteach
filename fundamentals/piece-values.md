# Piece Values

Understanding the relative value of each piece is essential for making good decisions about trades, sacrifices, and exchanges.

**See also:** [Development](development.md) | [Tactics — Sacrifices](../tactics/sacrifices.md)

---

## Classical Values (Reinfeld)

| Piece | Value | Symbol |
|-------|-------|--------|
| Pawn | 1 | ♟ |
| Knight | 3 | ♞ |
| Bishop | 3 | ♝ |
| Rook | 5 | ♜ |
| Queen | 9 | ♛ |
| King | ∞ (game ends) | ♚ |

## Modern Values (Computer-Adjusted)

| Piece | Value |
|-------|-------|
| Pawn | 1.0 |
| Knight | 3.05 |
| Bishop | 3.33 |
| Rook | 5.63 |
| Queen | 9.5 |

---

## Key Insights

### The Bishop Pair Bonus

Two bishops together are worth approximately **0.5 pawns more** than bishop + knight or two knights. They control both colour complexes and work beautifully at long range. See [Middlegame — The Bishop Pair](../middlegame/piece-activity.md).

**Bishop pair dominating in an open position:** White's two bishops rake across the board, outperforming Black's two knights on an open board.

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
  <!-- Pieces -->
  <text x="247" y="33" text-anchor="middle" font-size="32" font-family="serif">♜</text>
  <text x="292" y="33" text-anchor="middle" font-size="32" font-family="serif">♚</text>
  <text x="22" y="78" text-anchor="middle" font-size="32" font-family="serif">♟</text>
  <text x="67" y="78" text-anchor="middle" font-size="32" font-family="serif">♟</text>
  <text x="247" y="78" text-anchor="middle" font-size="32" font-family="serif">♟</text>
  <text x="292" y="78" text-anchor="middle" font-size="32" font-family="serif">♟</text>
  <text x="337" y="78" text-anchor="middle" font-size="32" font-family="serif">♟</text>
  <text x="202" y="168" text-anchor="middle" font-size="32" font-family="serif">♟</text>
  <text x="157" y="213" text-anchor="middle" font-size="32" font-family="serif">♙</text>
  <text x="202" y="213" text-anchor="middle" font-size="32" font-family="serif">♙</text>
  <text x="112" y="258" text-anchor="middle" font-size="32" font-family="serif">♗</text>
  <text x="22" y="303" text-anchor="middle" font-size="32" font-family="serif">♙</text>
  <text x="67" y="303" text-anchor="middle" font-size="32" font-family="serif">♙</text>
  <text x="247" y="303" text-anchor="middle" font-size="32" font-family="serif">♙</text>
  <text x="292" y="303" text-anchor="middle" font-size="32" font-family="serif">♙</text>
  <text x="337" y="303" text-anchor="middle" font-size="32" font-family="serif">♙</text>
  <text x="202" y="348" text-anchor="middle" font-size="32" font-family="serif">♖</text>
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
  <text x="370" y="33" font-size="11" fill="#666" font-family="sans-serif">8</text>
  <text x="370" y="78" font-size="11" fill="#666" font-family="sans-serif">7</text>
  <text x="370" y="123" font-size="11" fill="#666" font-family="sans-serif">6</text>
  <text x="370" y="168" font-size="11" fill="#666" font-family="sans-serif">5</text>
  <text x="370" y="213" font-size="11" fill="#666" font-family="sans-serif">4</text>
  <text x="370" y="258" font-size="11" fill="#666" font-family="sans-serif">3</text>
  <text x="370" y="303" font-size="11" fill="#666" font-family="sans-serif">2</text>
  <text x="370" y="348" font-size="11" fill="#666" font-family="sans-serif">1</text>
</svg>

> **FEN:** `5rk1/pp3ppp/8/4p3/3PP3/2B5/PP3PPP/4R1K1 w - - 0 1`

White's bishops on c3 and (after Bd3 or Bf5) control long diagonals across the open centre, while Black's knights lack stable outposts.

### The Exchange

**Rook vs minor piece** (bishop or knight) = "the exchange," worth roughly **2 points**. "Winning the exchange" means trading a minor piece for a rook.

### Bishop vs Knight

A bishop is slightly stronger than a knight in **most** positions (especially open positions). Knights excel in **closed** positions. See [Middlegame — Knight vs Bishop](../middlegame/piece-activity.md).

### Activity Over Material

**Piece activity matters more than raw point count.** An active knight on e5 can be worth more than a passive rook on a1. Material values are guidelines, not absolutes — position, pawn structure, and king safety all modify the effective value of pieces.

**Active knight vs passive rook:** White's knight on e5 dominates the board, while Black's rook on a8 sits idle behind its own pawns.

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
  <!-- Pieces -->
  <text x="22" y="33" text-anchor="middle" font-size="32" font-family="serif">♜</text>
  <text x="247" y="33" text-anchor="middle" font-size="32" font-family="serif">♜</text>
  <text x="292" y="33" text-anchor="middle" font-size="32" font-family="serif">♚</text>
  <text x="22" y="78" text-anchor="middle" font-size="32" font-family="serif">♟</text>
  <text x="67" y="78" text-anchor="middle" font-size="32" font-family="serif">♟</text>
  <text x="247" y="78" text-anchor="middle" font-size="32" font-family="serif">♟</text>
  <text x="292" y="78" text-anchor="middle" font-size="32" font-family="serif">♟</text>
  <text x="337" y="78" text-anchor="middle" font-size="32" font-family="serif">♟</text>
  <text x="157" y="123" text-anchor="middle" font-size="32" font-family="serif">♟</text>
  <text x="202" y="168" text-anchor="middle" font-size="32" font-family="serif">♘</text>
  <text x="157" y="213" text-anchor="middle" font-size="32" font-family="serif">♙</text>
  <text x="22" y="303" text-anchor="middle" font-size="32" font-family="serif">♙</text>
  <text x="67" y="303" text-anchor="middle" font-size="32" font-family="serif">♙</text>
  <text x="247" y="303" text-anchor="middle" font-size="32" font-family="serif">♙</text>
  <text x="292" y="303" text-anchor="middle" font-size="32" font-family="serif">♙</text>
  <text x="337" y="303" text-anchor="middle" font-size="32" font-family="serif">♙</text>
  <text x="22" y="348" text-anchor="middle" font-size="32" font-family="serif">♖</text>
  <text x="202" y="348" text-anchor="middle" font-size="32" font-family="serif">♖</text>
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
  <text x="370" y="33" font-size="11" fill="#666" font-family="sans-serif">8</text>
  <text x="370" y="78" font-size="11" fill="#666" font-family="sans-serif">7</text>
  <text x="370" y="123" font-size="11" fill="#666" font-family="sans-serif">6</text>
  <text x="370" y="168" font-size="11" fill="#666" font-family="sans-serif">5</text>
  <text x="370" y="213" font-size="11" fill="#666" font-family="sans-serif">4</text>
  <text x="370" y="258" font-size="11" fill="#666" font-family="sans-serif">3</text>
  <text x="370" y="303" font-size="11" fill="#666" font-family="sans-serif">2</text>
  <text x="370" y="348" font-size="11" fill="#666" font-family="sans-serif">1</text>
</svg>

> **FEN:** `r4rk1/pp3ppp/3p4/4N3/3P4/8/PP3PPP/R3R1K1 w - - 0 1`

---

**Next:** [Development Principles](development.md) | **Back to:** [Fundamentals Index](index.md)
