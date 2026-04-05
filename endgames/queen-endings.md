# Queen Endings

Queen endgames are complex and often decisive — the queen's power dominates the board, and small advantages are magnified.

**See also:** [Basic Checkmates](basic-checkmates.md) | [Tactics — Forks](../tactics/forks.md) | [Tactics — Skewers](../tactics/skewers.md)

---

## Queen vs Pawn on the 7th Rank

A critical theoretical endgame. The result depends on **which pawn** and **where the kings are**.

```mermaid
flowchart TD
    Start["Queen vs Pawn\non the 7th rank"] --> Which{"Which pawn?"}
    Which -->|"c, d, e, or f pawn\n(central/bishop)"| Win["Queen WINS\nForce king in front of pawn,\nbring own king closer, repeat"]
    Which -->|"a or h pawn\n(rook pawn)"| RookPawn["Usually DRAWN\nKing goes to corner →\nstalemate defence"]
    Which -->|"b or g pawn\n(knight pawn)"| KnightPawn["Usually DRAWN\nKing shuttles between\ncorner and pawn square"]
```

### Central or Bishop Pawn (c, d, e, f pawns)

**The queen wins** by a systematic method:

1. Give checks to force the enemy king **in front of the pawn**
2. Bring your own king **one step closer**
3. Repeat until your king arrives to help win the pawn

**Q vs d-pawn on the 7th — White wins**

![Q vs d-pawn on the 7th — White wins](../images/endgames/queen-endings.svg)

> **FEN:** `3k4/3p4/8/8/8/8/8/K6Q w - - 0 1`

White gives checks (e.g. 1.Qh8+ Ke7 2.Qc3! Kd8 3.Qd3!) to force the Black king in front of the pawn, then advances the White king one step closer. Repeat until the king arrives.

### Rook Pawn (a or h pawn)

Usually **drawn**. The defending king goes to the corner. After forcing the king in front of the pawn, it's **stalemate**.

**Q vs a-pawn on the 7th — Drawn (stalemate defence)**

![Q vs a-pawn on the 7th — Drawn (stalemate defence)](../images/endgames/queen-endings-2.svg)

> **FEN:** `k7/p7/8/8/8/8/8/K6Q w - - 0 1`

If White forces the king in front of the pawn with checks, the result is stalemate (king on a8, pawn on a7 — no legal moves). The rook pawn draws because the corner provides a stalemate shelter.

### Knight Pawn (b or g pawn)

Usually **drawn** due to similar stalemate defences. The king shuttles between the corner and the pawn square.

---

## Queen vs Rook

The queen generally wins, but it's technically difficult (can require 30+ precise moves).

### Winning Method (Philidor's Technique)

Use the queen to deliver checks and force the rook to separate from its king. Win the rook with a [fork](../tactics/forks.md) or [skewer](../tactics/skewers.md).

### Drawing Resources for the Rook

- Certain fortress positions (especially with a pawn) can hold
- Perpetual defence — keeping the rook next to the king

---

## Queen vs Queen

Queen endgames with pawns are among the most complex in chess. Key features:

- **Perpetual check** is always a resource for the defending side
- The queen's mobility means both sides must watch for [forks](../tactics/forks.md) and [skewers](../tactics/skewers.md)
- **Centralised king + passed pawn** is the recipe for winning
- Even a single extra pawn can be very difficult to convert due to perpetual check resources

---

**Next:** [Endgame Concepts](endgame-concepts.md) | **Back to:** [Endgames Index](index.md)
