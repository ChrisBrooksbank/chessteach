# Forks (Double Attacks)

A **fork** is a tactic where a single piece attacks two or more enemy pieces simultaneously. The opponent can only save one, so you win material.

**See also:** [Pins](pins.md) | [Skewers](skewers.md) | [Discovered Attacks](discovered-attacks.md)

---

## Types of Forks

### Knight Forks

The most devastating type — knights attack in an L-shape, making their forks hard to see and defend.

**The Royal Fork:** A knight simultaneously attacks the king and queen. Almost always wins the queen.

![The Royal Fork](../images/tactics/forks.svg)

> **FEN:** `r3k3/2N5/8/8/8/8/8/4K3 w - - 0 1`

**The Family Fork:** A knight attacks king, queen, AND rook simultaneously.

### Pawn Forks

Pawns can fork two pieces by advancing diagonally. Especially dangerous because the pawn is the least valuable piece.

![Pawn Forks](../images/tactics/forks-2.svg)

> **FEN:** `6k1/8/3b1n2/8/4P3/8/8/4K3 w - - 0 1`

### Queen Forks

The queen can fork along ranks, files, and diagonals — in every direction. She's the best forking piece by range, though her high value means she must be careful not to be captured.

### Bishop Forks

Bishops fork along diagonals. Less common than knight forks but can be just as effective.

### Rook Forks

Rooks can fork along ranks and files, though this is less common since rooks are usually deployed on open files rather than attacking multiple targets.

---

## Setting Up Forks

Forks rarely appear by accident. You create them by:

```mermaid
flowchart LR
    A[Spot a potential fork square] --> B{Is the fork square accessible?}
    B -->|Yes| C{Are the target pieces in position?}
    B -->|No| D[Clear the path — exchange or remove blockers]
    C -->|Yes| E[Play the fork!]
    C -->|No| F[Drive pieces to forkable squares]
    F --> F1[Use checks to force king movement]
    F --> F2[Use deflection to lure pieces]
    F --> F3[Use captures to force recaptures on target squares]
    D --> B
    F1 --> E
    F2 --> E
    F3 --> E
```

1. **Forcing moves:** Use checks, captures, or threats to drive pieces to forkable squares
2. **Exchanges:** Trade off defenders that prevent the fork
3. **Deflection:** Lure a piece to a vulnerable square — see [Deflection & Decoy](deflection-decoy.md)
4. **Removing the defender:** Eliminate the piece guarding the fork square — see [Removing the Defender](removing-the-defender.md)

---

## Defending Against Forks

1. **Avoid placing pieces on the same colour complex** where a knight can reach both
2. **Keep the king protected** — an exposed king invites royal forks
3. **Watch for pawn advances** that create fork threats
4. **When both pieces are attacked:** save the more valuable one, or find a counter-threat (see [Zwischenzug](zwischenzug.md))

---

## Practical Advice

- **Knight forks are the #1 tactic beginners miss.** Always ask: "Can a knight land on a square that attacks two of my pieces?"
- Forks are often the culmination of a longer tactical sequence — a [pin](pins.md) or [discovered attack](discovered-attacks.md) might set up the fork

---

**Next:** [Skewers](skewers.md) | **Back to:** [Tactics Index](index.md)
