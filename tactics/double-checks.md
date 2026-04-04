# Double Checks

A **double check** is a special type of [discovered check](discovered-attacks.md) where **both** the moving piece and the unmasked piece give check simultaneously. It is the most forcing move type in chess.

**See also:** [Discovered Attacks](discovered-attacks.md) | [Mating Patterns](mating-patterns.md)

---

## Why Double Checks Are So Powerful

In a double check, the opponent **can only move the king**. They cannot:
- Block the check (two pieces are checking — you can't block both)
- Capture the checking piece (there are two of them)

The king **must** move. This makes double checks extremely powerful — they can force the king into positions where checkmate follows.

```mermaid
flowchart TD
    A[You're in check!] --> B{How many pieces are checking?}
    B -->|One| C{Can you block?}
    C -->|Yes| D[Block the check]
    C -->|No| E{Can you capture the checker?}
    E -->|Yes| F[Capture it]
    E -->|No| G[Move the king]
    B -->|Two — DOUBLE CHECK| H["ONLY option: move the king
    Cannot block (two lines)
    Cannot capture (two pieces)"]
    H --> I[King is forced to a specific square — often into mate]
```

---

## Example

```
White: Bc4, Nd5. Black: Ke8, Qd8, Rf8.
White plays Nf6+ (double check — both the knight on f6 and the bishop on c4 give check via the now-open diagonal to e8).
Black's king MUST move. The knight can't be captured (bishop still checks). The bishop can't be blocked (knight still checks).
```

---

## Double Check Patterns

1. **Knight + Bishop:** The knight moves to give check while unmasking a bishop check. Common in tactical combinations.
2. **Knight + Rook:** The knight moves to check while opening a rook's line.
3. **Bishop + Rook:** The bishop moves to check while opening a rook's file.

## Connection to Smothered Mate

The famous [smothered mate](mating-patterns.md) pattern often features a double check as part of the sequence — the knight delivers a double check, forcing the king to a corner, where a follow-up knight check delivers mate.

---

## Practical Advice

- Double checks are rare but devastating — always look for them when your pieces are aligned
- They often appear as the climax of a [discovered attack](discovered-attacks.md) combination
- Since only the king can move, calculate where the king must go — it might walk into mate

---

**Next:** [Deflection & Decoy](deflection-decoy.md) | **Back to:** [Tactics Index](index.md)
