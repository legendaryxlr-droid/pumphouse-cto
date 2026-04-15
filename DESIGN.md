# Design Brief

## Direction
**$PUMPHOUSE CTO: Crypto-Degen Memecoin Showcase** — An irreverent, visually distinctive landing page celebrating the Solana memecoin with chaotic energy and serious tokenomics.

## Tone
Chaotic, energetic, unapologetically memecoin. Anti-corporate irreverence paired with functional clarity; the tone communicates "community takeover" energy while delivering credible token information.

## Differentiation
A scrolling "$PUMPHOUSE CTO" marquee anchors the top, electric green accents dominate interactive elements, and XCOM-inspired glitch effects frame the narrative sections—creating an unforgettable, genre-defining memecoin visual identity.

## Color Palette

| Token          | OKLCH         | Role                                        |
| -------------- | ------------- | ------------------------------------------- |
| background     | 0.15 0 0      | Deep charcoal; main canvas                  |
| foreground     | 0.95 0 0      | Near-white; body text                       |
| card           | 0.22 0 0      | Slightly lighter than background            |
| primary        | 0.68 0.24 142 | Electric green; CTAs, highlights, accents   |
| secondary      | 0.85 0.18 65  | Acid yellow (hard hat); badges, emphasis    |
| accent         | 0.82 0.22 65  | Acid yellow; alternative highlight          |
| muted          | 0.35 0 0      | Dark grey; disabled states, subtle dividers |
| destructive    | 0.65 0.19 22  | Red; warnings, destructive actions          |

## Typography

- Display: **Bricolage Grotesque** — bold, chaotic headline treatment for section titles and hero copy
- Body: **DM Sans** — clean, readable sans-serif for tokenomics, narrative, and body text
- Mono: **Geist Mono** — code display for contract addresses and technical specs
- Scale: Hero `text-5xl font-bold`, H2 `text-3xl font-bold`, Label `text-xs font-semibold`, Body `text-base font-normal`

## Elevation & Depth

Surface hierarchy achieved through layered backgrounds (background → card → elevated) and strategic green glows; minimal hard shadows, favoring subtle depth through color separation and border definition.

## Structural Zones

| Zone    | Background           | Border     | Notes                                      |
| ------- | -------------------- | ---------- | ------------------------------------------ |
| Header  | card with border-b   | border     | Fixed/sticky, contains marquee             |
| Hero    | background, framed   | primary    | Framed image, live price overlay, CA copy  |
| Lore    | section-muted        | —          | XCOM glitch aesthetic, narrative-driven    |
| Tokenomics | card grid         | border     | 4 key metrics in elevated cards            |
| Gallery | background alternation | —        | 14-image grid, responsive columns          |
| Community | card grid          | border     | Tweet/link cards, left-aligned badges      |
| DEX     | card                 | border     | Full-width embedded chart section          |
| Footer  | muted/40 with border-t | border   | Social links, community info               |

## Spacing & Rhythm

Generous padding (1.5rem–2rem) between sections; content groups spaced at 3rem intervals; micro-spacing within components (0.5rem–1rem) for breathing room; asymmetrical padding on cards to guide visual flow.

## Component Patterns

- **Buttons**: Full capsule shape (`rounded-full`), 12px padding, electric green primary, acid yellow secondary; hover: scale 105%, active: scale 95%
- **Cards**: Rounded corners (1rem), elevated background with border, no drop shadow; hover: subtle green border glow
- **Badges**: Capsule shape, small scale, accent color with semi-transparent background; supporting data pills in muted tone
- **Marquee**: Continuous scroll, large display font weight, white text on dark background, 20s loop

## Motion

- **Entrance**: Staggered fade-in on scroll (0.4s easing), offset by 100ms per card
- **Hover**: Button scale (0.2s), card border glow intensity shift (0.3s)
- **Decorative**: Marquee scroll (20s linear, infinite), live price ticker pulse (2s), badge bounce on new data

## Constraints

- No generic defaults; every color, spacing, and animation decision serves the memecoin brand
- All buttons must be capsule-shaped (full border-radius); no sharp corners on interactive elements
- Mobile-first responsive design; no breakpoint below 375px (base mobile)
- Electric green (#22c55e) reserved for high-value interactions (CTAs, highlights, live data); acid yellow for secondary emphasis

## Signature Detail

**The "$PUMPHOUSE CTO" marquee**—a continuous scrolling header title executed in the display font at 2rem scale, using the primary green color with a subtle glow effect, anchoring the top of the page and creating immediate brand recognition. This serves as the page's keystone navigation detail and sets the chaotic, memecoin-specific tone from first view.
