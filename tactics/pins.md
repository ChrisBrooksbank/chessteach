# Pins

A **pin** is a tactic where an attacking piece restricts an enemy piece from moving because doing so would expose a more valuable piece (or the king) behind it.

**See also:** [Skewers](skewers.md) | [Discovered Attacks](discovered-attacks.md) | [Fundamentals — Piece Values](../fundamentals/piece-values.md)

---

## Types of Pins

### Absolute Pin

The piece behind the pinned piece is the **king**. The pinned piece **cannot legally move** because it would leave the king in check.

**White's Bg5 pins the Nf6 against the king — the knight cannot legally move:**

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
  <rect x="225" y="90" width="45" height="45" fill="#d63031" opacity="0.35"/>
  <defs><marker id="ah" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0,10 3.5,0 7" fill="#d63031"/></marker></defs>
  <text x="202" y="33" font-size="30" text-anchor="middle" dominant-baseline="central" font-family="serif">♚</text>
  <text x="247" y="123" font-size="30" text-anchor="middle" dominant-baseline="central" font-family="serif">♞</text>
  <text x="292" y="168" font-size="30" text-anchor="middle" dominant-baseline="central" font-family="serif">♗</text>
  <text x="202" y="348" font-size="30" text-anchor="middle" dominant-baseline="central" font-family="serif">♔</text>
  <line x1="292" y1="157" x2="202" y2="67" stroke="#d63031" stroke-width="3" marker-end="url(#ah)" stroke-dasharray="6,4"/>
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

> **FEN:** `4k3/8/5n2/6B1/8/8/8/4K3 w - - 0 1`

The Nf6 is pinned to the Ke8 — moving it would expose the king to the bishop. This is an absolute pin.

### Relative Pin

The piece behind the pinned piece is valuable but not the king. The pinned piece **can** legally move, but doing so would lose material.

**White's Re1 pins the Be4 against the queen — the bishop shouldn't move:**

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
  <rect x="180" y="180" width="45" height="45" fill="#d63031" opacity="0.35"/>
  <defs><marker id="ah" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0,10 3.5,0 7" fill="#d63031"/></marker></defs>
  <text x="202" y="33" font-size="30" text-anchor="middle" dominant-baseline="central" font-family="serif">♛</text>
  <text x="292" y="33" font-size="30" text-anchor="middle" dominant-baseline="central" font-family="serif">♚</text>
  <text x="202" y="213" font-size="30" text-anchor="middle" dominant-baseline="central" font-family="serif">♝</text>
  <text x="202" y="348" font-size="30" text-anchor="middle" dominant-baseline="central" font-family="serif">♖</text>
  <text x="292" y="348" font-size="30" text-anchor="middle" dominant-baseline="central" font-family="serif">♔</text>
  <line x1="202" y1="337" x2="202" y2="22" stroke="#d63031" stroke-width="3" marker-end="url(#ah)" stroke-dasharray="6,4"/>
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

> **FEN:** `4q1k1/8/8/8/4b3/8/8/4R1K1 w - - 0 1`

The Be4 can legally move, but if it does, Rxe8 wins the queen. This is a relative pin -- the bishop is pinned along the e-file against the more valuable queen.

---

## Identifying a Pin

```mermaid
flowchart TD
    A[Look at opponent's pieces] --> B{Are two pieces aligned on a rank, file, or diagonal?}
    B -->|No| C[No pin possible on this line]
    B -->|Yes| D{Can your long-range piece attack along that line?}
    D -->|No| E[Reposition — get a bishop, rook, or queen onto that line]
    D -->|Yes| F{Is the rear piece the king?}
    F -->|Yes| G[Absolute Pin — front piece CANNOT legally move]
    F -->|No| H{Is the rear piece more valuable than the front piece?}
    H -->|Yes| I[Relative Pin — front piece SHOULDN'T move]
    H -->|No| J[Not a useful pin]
    G --> K[Exploit: pile up on the pinned piece]
    I --> K
```

## Exploiting Pins

1. **Pile up on the pinned piece:** Attack it with additional pieces. Since it can't move (or shouldn't), it becomes a target.
2. **Win material directly:** If the pinned piece is less valuable than what it shields, win it.
3. **Restrict the opponent:** Even if you can't win material immediately, a pin limits the opponent's options.

### Example: Piling Up

```
Position: White Bg5 pins Black's Nf6 against the Qd8.
White plays Nd5 — now the knight is attacked by two pieces (Bg5 and Nd5) and can't move due to the pin.
```

---

## Breaking Pins

```mermaid
flowchart TD
    A[You're pinned!] --> B{Is it an absolute pin — king behind?}
    B -->|Yes| C{Can you block the pin line?}
    B -->|No| D{Is moving the pinned piece worth losing the rear piece?}
    C -->|Yes| E[Interpose a piece between pinned piece and king]
    C -->|No| F{Can you move the king off the line?}
    F -->|Yes| G[Move the king — the pin breaks]
    F -->|No| H[Counter-attack the pinning piece]
    D -->|Yes| I[Move it — accept the exchange]
    D -->|No| J[Treat it like an absolute pin — use the same defences]
```

1. **Block the pin:** Interpose a piece between the pinned piece and the piece behind it.
2. **Move the piece behind:** Remove the valuable piece from the line of the pin.
3. **Counter-attack the pinning piece:** Attack the piece doing the pinning.
4. **Advance with tempo:** Sometimes the pinned piece can advance with a threat, breaking the pin dynamically.

---

## Common Pin Patterns

- **Bishop pins on the knight:** Bg5 pinning Nf6 against the queen/king (extremely common after 1.e4 e5 2.Nf3 Nc6 3.Bb5)
- **Rook pins on a file or rank:** Rook on the same file as king and a piece in between
- **Queen pins:** The queen can pin along ranks, files, and diagonals

## Practical Advice

- Always check for pin possibilities on open files, ranks, and diagonals
- When you see a piece lined up with a more valuable piece, look for a pin
- Pins are often the first step in longer combinations — a pinned piece is a weakness

---

**Next:** [Forks](forks.md) | **Back to:** [Tactics Index](index.md)
