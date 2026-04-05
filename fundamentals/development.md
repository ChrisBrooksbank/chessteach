# Development Principles

Development means bringing pieces from their starting squares to active squares where they control the centre and are ready for action.

**See also:** [Centre Control](centre-control.md) | [King Safety](king-safety.md) | [Openings Index](../openings/index.md)

---

## Core Principles

1. **Move each piece once** before moving any piece twice in the opening
2. **Develop knights before bishops** — knights have fewer good squares, so optimal placement is clearer early
3. **Don't move the queen too early** — she's vulnerable to harassment by lesser pieces, losing tempo
4. **Control the centre with pawns** (e4, d4) to give pieces room
5. **Castle early** — connects rooks and secures the king
6. **Connect the rooks** — once all minor pieces are developed and the king is castled, the rooks should "see" each other on the back rank
7. **Develop with threats** when possible to gain tempo

---

## Tempo

Every move counts. If you waste a move (moving a developed piece back, making a useless pawn move), you fall behind in development.

**A lead in development is temporary** — it must be exploited before the opponent catches up. This usually means **opening the position** (exchanging pawns, creating open lines) while you have more pieces in play.

### Opening Move Decision Checklist

Use this flowchart before each move in the opening:

```mermaid
flowchart TD
    A["It's my turn — what should I do?"] --> B{"Is my king safe?\n(Can I castle?)"}
    B -- "Not yet safe" --> C["Castle now"]
    B -- "Already safe / not yet possible" --> D{"Do I have undeveloped\nminor pieces?"}
    D -- "Yes" --> E{"Can I develop\nwith a threat?"}
    E -- "Yes" --> F["Develop with tempo"]
    E -- "No" --> G["Develop to a natural square\n(knight before bishop)"]
    D -- "No" --> H{"Are my rooks\nconnected?"}
    H -- "No" --> I["Improve rook placement\n(connect them on back rank)"]
    H -- "Yes" --> J["Opening complete —\nenter middlegame planning"]
    style C fill:#fdd,stroke:#c00
    style F fill:#dfd,stroke:#0a0
    style J fill:#ddf,stroke:#00c
```

---

## Well-Developed vs Poorly Developed

**Good development:** White has castled, developed all minor pieces, and the rooks are nearly connected. Every piece is active.

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
  <text x="112" y="33" text-anchor="middle" font-size="32" font-family="serif">♝</text>
  <text x="157" y="33" text-anchor="middle" font-size="32" font-family="serif">♛</text>
  <text x="202" y="33" text-anchor="middle" font-size="32" font-family="serif">♚</text>
  <text x="247" y="33" text-anchor="middle" font-size="32" font-family="serif">♝</text>
  <text x="337" y="33" text-anchor="middle" font-size="32" font-family="serif">♜</text>
  <text x="22" y="78" text-anchor="middle" font-size="32" font-family="serif">♟</text>
  <text x="67" y="78" text-anchor="middle" font-size="32" font-family="serif">♟</text>
  <text x="112" y="78" text-anchor="middle" font-size="32" font-family="serif">♟</text>
  <text x="247" y="78" text-anchor="middle" font-size="32" font-family="serif">♟</text>
  <text x="292" y="78" text-anchor="middle" font-size="32" font-family="serif">♟</text>
  <text x="337" y="78" text-anchor="middle" font-size="32" font-family="serif">♟</text>
  <text x="112" y="123" text-anchor="middle" font-size="32" font-family="serif">♞</text>
  <text x="157" y="123" text-anchor="middle" font-size="32" font-family="serif">♟</text>
  <text x="247" y="123" text-anchor="middle" font-size="32" font-family="serif">♞</text>
  <text x="202" y="168" text-anchor="middle" font-size="32" font-family="serif">♟</text>
  <text x="112" y="213" text-anchor="middle" font-size="32" font-family="serif">♗</text>
  <text x="202" y="213" text-anchor="middle" font-size="32" font-family="serif">♙</text>
  <text x="247" y="258" text-anchor="middle" font-size="32" font-family="serif">♘</text>
  <text x="22" y="303" text-anchor="middle" font-size="32" font-family="serif">♙</text>
  <text x="67" y="303" text-anchor="middle" font-size="32" font-family="serif">♙</text>
  <text x="112" y="303" text-anchor="middle" font-size="32" font-family="serif">♙</text>
  <text x="157" y="303" text-anchor="middle" font-size="32" font-family="serif">♙</text>
  <text x="247" y="303" text-anchor="middle" font-size="32" font-family="serif">♙</text>
  <text x="292" y="303" text-anchor="middle" font-size="32" font-family="serif">♙</text>
  <text x="337" y="303" text-anchor="middle" font-size="32" font-family="serif">♙</text>
  <text x="22" y="348" text-anchor="middle" font-size="32" font-family="serif">♖</text>
  <text x="67" y="348" text-anchor="middle" font-size="32" font-family="serif">♘</text>
  <text x="112" y="348" text-anchor="middle" font-size="32" font-family="serif">♗</text>
  <text x="157" y="348" text-anchor="middle" font-size="32" font-family="serif">♕</text>
  <text x="247" y="348" text-anchor="middle" font-size="32" font-family="serif">♖</text>
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

> **FEN:** `r1bqkb1r/ppp2ppp/2np1n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQ1RK1 w - - 0 1`

White (after 1.e4 e5 2.Nf3 Nc6 3.Bc4 Nf6 4.O-O) has castled and developed two pieces. Black has developed knights but the bishops and king remain on their starting squares.

**Poor development:** White has wasted time pushing flank pawns and moving the queen early. Only one piece is developed.

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
  <text x="67" y="33" text-anchor="middle" font-size="32" font-family="serif">♞</text>
  <text x="112" y="33" text-anchor="middle" font-size="32" font-family="serif">♝</text>
  <text x="202" y="33" text-anchor="middle" font-size="32" font-family="serif">♚</text>
  <text x="247" y="33" text-anchor="middle" font-size="32" font-family="serif">♝</text>
  <text x="292" y="33" text-anchor="middle" font-size="32" font-family="serif">♞</text>
  <text x="337" y="33" text-anchor="middle" font-size="32" font-family="serif">♜</text>
  <text x="22" y="78" text-anchor="middle" font-size="32" font-family="serif">♟</text>
  <text x="67" y="78" text-anchor="middle" font-size="32" font-family="serif">♟</text>
  <text x="112" y="78" text-anchor="middle" font-size="32" font-family="serif">♟</text>
  <text x="157" y="78" text-anchor="middle" font-size="32" font-family="serif">♟</text>
  <text x="247" y="78" text-anchor="middle" font-size="32" font-family="serif">♟</text>
  <text x="292" y="78" text-anchor="middle" font-size="32" font-family="serif">♟</text>
  <text x="337" y="78" text-anchor="middle" font-size="32" font-family="serif">♟</text>
  <text x="202" y="168" text-anchor="middle" font-size="32" font-family="serif">♟</text>
  <text x="337" y="168" text-anchor="middle" font-size="32" font-family="serif">♛</text>
  <text x="202" y="213" text-anchor="middle" font-size="32" font-family="serif">♙</text>
  <text x="112" y="258" text-anchor="middle" font-size="32" font-family="serif">♘</text>
  <text x="292" y="258" text-anchor="middle" font-size="32" font-family="serif">♙</text>
  <text x="22" y="303" text-anchor="middle" font-size="32" font-family="serif">♙</text>
  <text x="67" y="303" text-anchor="middle" font-size="32" font-family="serif">♙</text>
  <text x="112" y="303" text-anchor="middle" font-size="32" font-family="serif">♙</text>
  <text x="157" y="303" text-anchor="middle" font-size="32" font-family="serif">♙</text>
  <text x="247" y="303" text-anchor="middle" font-size="32" font-family="serif">♙</text>
  <text x="337" y="303" text-anchor="middle" font-size="32" font-family="serif">♙</text>
  <text x="22" y="348" text-anchor="middle" font-size="32" font-family="serif">♖</text>
  <text x="112" y="348" text-anchor="middle" font-size="32" font-family="serif">♗</text>
  <text x="157" y="348" text-anchor="middle" font-size="32" font-family="serif">♕</text>
  <text x="202" y="348" text-anchor="middle" font-size="32" font-family="serif">♔</text>
  <text x="247" y="348" text-anchor="middle" font-size="32" font-family="serif">♗</text>
  <text x="337" y="348" text-anchor="middle" font-size="32" font-family="serif">♖</text>
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

> **FEN:** `rnb1kbnr/pppp1ppp/8/4p2q/4P3/2N3P1/PPPP1P1P/R1BQKB1R w - - 0 1`

Black has brought the queen out early to h5 and only moved one pawn. White can gain tempo with moves like Nc3 threatening the queen, while developing naturally.

---

## Common Development Mistakes

- **Too many pawn moves** in the opening — pawns don't develop pieces
- **Moving the same piece twice** without a concrete reason
- **Queen adventures** — 1.e4 e5 2.Qh5?! is tempting but loses time
- **Ignoring development to grab pawns** — "poisoned pawn" positions punish greed

---

## The Opera Game Principle

[The Opera Game](../famous-games/opera-game.md) (Morphy, 1858) is the ultimate lesson in development. Morphy developed every piece while his opponents left theirs on the back rank. The result: a devastating attack.

**Key lesson:** When you're ahead in development, **open the position** to exploit it.

---

**Next:** [Centre Control](centre-control.md) | **Back to:** [Fundamentals Index](index.md)
