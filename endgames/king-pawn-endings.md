# King & Pawn Endings

King and pawn endgames are the foundation of all endgame knowledge. The principles learned here apply across every endgame type — understanding them deeply will transform your chess.

**See also:** [Endgame Concepts](endgame-concepts.md) | [Rook Endings](rook-endings.md) | [Fundamentals — Pawn Structures](../fundamentals/pawn-structure-basics.md)

```mermaid
flowchart TD
    Start["King & Pawn Ending:\nWhat's the situation?"] --> Passed{"Do you have\na passed pawn?"}
    Passed -->|Yes| CanPromote{"Can your king\nreach a key square?"}
    CanPromote -->|Yes| Win["Win: Escort the\npawn to promotion"]
    CanPromote -->|No| Opposition["Use opposition /\ntriangulation to\ngain key square"]
    Passed -->|No| Majority{"Do you have\na pawn majority?"}
    Majority -->|Yes| Breakthrough["Look for a\nbreakthrough sacrifice\nto create a passer"]
    Majority -->|No| Outside{"Outside passed\npawn possible?"}
    Outside -->|Yes| Decoy["Decoy opponent's king\nwith outside passer,\ninvade on other wing"]
    Outside -->|No| Defend["Defend: Use opposition\nand hold the draw"]
```

---

## Opposition

The most fundamental concept. Two kings stand in **direct opposition** when they face each other on the same rank or file with exactly one square between them.

**The side NOT to move holds the opposition** — the other player must yield ground.

### Types of Opposition

| Type | Description |
|------|-------------|
| **Direct** | Same rank or file, 1 square apart (e.g., Ke4 vs Ke6) |
| **Distant** | Same rank or file, 3 or 5 squares apart (odd number) |
| **Diagonal** | Same diagonal, 1 square apart |

### Key Example

**Opposition — Black to move loses, White to move draws**

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
  <text x="202" y="78" font-size="30" text-anchor="middle" font-family="sans-serif">♚</text>
  <text x="157" y="168" font-size="30" text-anchor="middle" font-family="sans-serif">♙</text>
  <text x="202" y="168" font-size="30" text-anchor="middle" font-family="sans-serif">♔</text>
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

> **FEN:** `8/4k3/8/3PK3/8/8/8/8 w - - 0 1`

White to move: CANNOT win (Black holds opposition after 1.d6+ Kd7 2.Kd5 Kd8! — opposition).
Black to move: LOSES (1...Kd7 2.Kf6! outflanking, or 1...Kf7 2.Kd6 winning).

---

## Key Squares (Critical Squares)

Key squares are the squares the advancing side's king must reach to guarantee pawn promotion, regardless of the defending king's position.

| Pawn Rank | Key Squares |
|-----------|-------------|
| 2nd–4th | Three squares **two ranks ahead** of the pawn |
| 5th | Three squares one rank ahead AND three squares on the pawn's rank |
| 6th | Three squares one rank ahead |

**Principle:** If the stronger side's king occupies a key square, the pawn promotes by force.

**Exception — Rook pawns (a/h):** Rook pawns have fewer key squares and are harder to promote. The edge of the board limits manoeuvring space. See [Endgame Concepts — Wrong Bishop + Rook Pawn](endgame-concepts.md).

---

## Triangulation

A king manoeuvre using three moves to return to the same square, losing a tempo to transfer the move to the opponent.

```
White king on d5 needs to reach d5 again with Black to move.
Kd5→Kd4→Kc4→Kd5 (triangle) — now Black must move in the critical position.
```

Used to create [zugzwang](endgame-concepts.md) — the opponent is forced to make a weakening move.

---

## Rule of the Square

A quick method to determine if a king can catch a passed pawn:

1. Count the squares the pawn needs to promote
2. Draw a "square" from the pawn to the promotion square
3. If the defending king can step **inside** the square on its turn, it catches the pawn

**Remember:** A pawn on its starting rank can advance two squares on the first move, effectively shrinking the square by one rank.

---

## Outside Passed Pawn

A passed pawn far from the main action. Its value: it **decoys** the opposing king.

### Strategy

1. Advance the outside passed pawn
2. The opponent's king must chase it (kings move slowly — one square per turn)
3. Your king invades on the **other** side and captures pawns

This is often a decisive advantage in king and pawn endings.

---

## Protected Passed Pawn

A passed pawn defended by another pawn. Extremely valuable because:

1. Cannot be captured without giving up a piece
2. Ties down the opponent's king to blockade duty
3. Your king is free to operate elsewhere

### Classic Technique

Establish a protected passed pawn, then use your king on the opposite wing to win material.

---

## Breakthrough

A pawn sacrifice (or series of sacrifices) that forces creation of a passed pawn.

### Classic Example

**The Breakthrough — White to play and create a passed pawn**

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
  <text x="22" y="78" font-size="30" text-anchor="middle" font-family="sans-serif">♟</text>
  <text x="67" y="78" font-size="30" text-anchor="middle" font-family="sans-serif">♟</text>
  <text x="112" y="78" font-size="30" text-anchor="middle" font-family="sans-serif">♟</text>
  <text x="22" y="168" font-size="30" text-anchor="middle" font-family="sans-serif">♙</text>
  <text x="67" y="168" font-size="30" text-anchor="middle" font-family="sans-serif">♙</text>
  <text x="112" y="168" font-size="30" text-anchor="middle" font-family="sans-serif">♙</text>
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

> **FEN:** `8/ppp5/8/PPP5/8/8/8/8 w - - 0 1`

**1.b6!** — and whatever Black captures, White creates an unstoppable passer:
- 1...axb6 2.c6! bxc6 3.a6 — the a-pawn promotes
- 1...cxb6 2.a6! bxa6 3.c6 — the c-pawn promotes

Always look for breakthrough possibilities when you have a pawn majority.

---

**Next:** [Rook Endings](rook-endings.md) | **Back to:** [Endgames Index](index.md)
