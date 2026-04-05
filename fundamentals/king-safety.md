# King Safety & Castling

The king is the most important piece — the game ends when it's checkmated. Keeping the king safe is a fundamental priority throughout the game.

**See also:** [Attacking the Castled King](../middlegame/attacking-the-king.md) | [Tactics — Back Rank](../tactics/back-rank.md) | [Development](development.md)

---

## Castling

### Purpose

- Moves the king from the vulnerable centre to safety
- Activates the rook (brings it toward the centre)

### Kingside Castling (O-O)

More common. The king ends up behind f, g, h pawns. Safer because fewer pawns need to be moved.

### Queenside Castling (O-O-O)

King is slightly less safe (a-pawn unprotected, king more exposed on c1/c8), but the rook goes to d1/d8 — often an open or important file.

### Requirements

1. No pieces between king and rook
2. Neither the king nor the rook has moved previously
3. The king is not in check
4. The king does not pass through or land on an attacked square

---

## King Safety Principles

1. **Don't move the pawns in front of your castled king** unless necessary — each move creates weaknesses
2. **One pawn move (h3/h6)** may be useful (preventing back-rank mates, stopping Bg4 pins), but multiple pawn moves are dangerous
3. **Castle early** — an exposed king in the centre invites attacks
4. **Opposite-side castling** leads to sharp, tactical play where both sides storm pawns toward the enemy king

### Should I Castle? Which Side?

```mermaid
flowchart TD
    A["Should I castle?"] --> B{"Is the centre\nopen or likely\nto open?"}
    B -- "Yes" --> C["Castle soon —\nking is unsafe in the centre"]
    B -- "No, centre is closed" --> D{"Am I ahead\nin development?"}
    D -- "Yes" --> E["Consider delaying —\nbut don't neglect it"]
    D -- "No" --> C
    C --> F{"Which side?"}
    F --> G{"Is the kingside\npawn structure intact?\n(f, g, h pawns unmoved)"}
    G -- "Yes" --> H["Kingside castling\n(O-O) — usually safest"]
    G -- "No / weakened" --> I{"Is queenside\nclear of pieces?"}
    I -- "Yes" --> J["Queenside castling\n(O-O-O) — rook hits d-file"]
    I -- "No" --> K["Clear pieces first,\nthen castle ASAP"]
    style C fill:#fdd,stroke:#c00
    style H fill:#dfd,stroke:#0a0
    style J fill:#ddf,stroke:#00c
```

---

## Safe King vs Exposed King

**Safely castled king:** White has castled kingside with the f, g, h pawns intact. The king is tucked away and the rook is active.

![Safely castled king](../images/fundamentals/king-safety.svg)

> **FEN:** `r2q1rk1/ppp2ppp/2np1n2/4p3/2B1P3/5N2/PPPP1PPP/R1BQ1RK1 w - - 0 1`

Both kings have castled kingside with intact pawn shields. This is a solid, safe configuration.

**Exposed king in the centre:** White failed to castle and the centre has opened. The king on e1 is a sitting target.

![Exposed king in the centre](../images/fundamentals/king-safety-2.svg)

> **FEN:** `r2q1rk1/ppp2ppp/2n2n2/3p4/2B5/5N2/PPP2PPP/R1BQK2R w - - 0 1`

White's king is stuck on e1 with the e-file open. Black's rooks and queen can target the king down the centre. The d- and e-pawns have been exchanged, leaving the king dangerously exposed.

---

## Common Threats to the Castled King

- [Greek Gift sacrifice (Bxh7+)](../tactics/sacrifices.md)
- Pawn storms (g4–g5, h4–h5)
- Piece build-up on the kingside
- Opening the h-file or g-file
- [Back rank mate](../tactics/back-rank.md)

---

**Next:** [Pawn Structure Basics](pawn-structure-basics.md) | **Back to:** [Fundamentals Index](index.md)
