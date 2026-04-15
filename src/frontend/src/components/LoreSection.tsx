const LORE_IMAGE =
  "/assets/img_20260415_141049-019d9174-d565-772d-aad8-f6645f554a0a.jpg";

const LORE_PARAGRAPHS = [
  {
    id: "p1",
    text: "The token was abandoned. The devs had gone quiet. The charts were bleeding red. But deep in the trenches of Crypto Twitter, a community of battle-hardened degens refused to rug themselves.",
  },
  {
    id: "p2",
    text: "They called themselves the PUMPHOUSE OPERATORS. Armed with diamond hands, Phantom wallets, and an unshakeable belief in the meme, they executed the CTO. No airdrop promises. No dev wallets. Just pure, uncut community energy.",
  },
  {
    id: "p3",
    text: "The green dome-shaped Pumphouse became their base of operations. The yellow-hatted degen — 'Don't Tread On Me' proudly displayed — took to the rooftop. Not to surrender, but to paint the house green. Again. And again.",
  },
  {
    id: "p4",
    text: "Because that's what CTOs do. They show up when others leave. They build when others abandon. They pump when others dump.",
  },
];

export default function LoreSection() {
  return (
    <section
      id="lore"
      className="relative py-24 bg-card overflow-hidden"
      data-ocid="lore.section"
    >
      {/* XCOM scanline overlay */}
      <div className="absolute inset-0 scanline pointer-events-none" />

      {/* Corner brackets decoration */}
      <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-primary/40" />
      <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-primary/40" />
      <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-primary/40" />
      <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-primary/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-xs font-mono tracking-[0.3em] uppercase">
              CLASSIFIED INTEL
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <div className="bg-primary/10 border border-primary/30 rounded-lg px-5 py-3 inline-block">
            <div className="font-mono text-primary text-sm font-bold tracking-wider">
              ▶ OPERATION: PUMPHOUSE RECLAMATION
            </div>
            <div className="font-mono text-muted-foreground text-xs mt-1">
              CLASSIFICATION: DEGEN EYES ONLY | STATUS:{" "}
              <span className="text-primary animate-pulse">ACTIVE</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl border border-border">
              <img
                src={LORE_IMAGE}
                alt="PUMPHOUSE Operations Base — Original Degen"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              {/* Mission overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-card/95 via-card/50 to-transparent p-5">
                <div className="font-mono text-xs text-primary space-y-0.5">
                  <div>Operation: Green Dome.</div>
                  <div>Objective: Overthrow centralized finance.</div>
                  <div>
                    Status:{" "}
                    <span className="text-secondary font-bold animate-pulse">
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative label */}
            <div className="absolute -top-3 -left-3 bg-secondary text-secondary-foreground text-xs font-black px-3 py-1 rounded font-mono">
              IMG_CLASSIFIED.JPG
            </div>
          </div>

          {/* Lore text */}
          <div className="space-y-6">
            {LORE_PARAGRAPHS.map((para, i) => (
              <div
                key={para.id}
                className="flex gap-4 group"
                data-ocid={`lore.paragraph.${i + 1}`}
              >
                <div className="shrink-0 mt-1">
                  <div className="font-mono text-primary/50 text-xs">
                    {String(i + 1).padStart(2, "0")}.
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-smooth">
                  {para.text}
                </p>
              </div>
            ))}

            <div className="pt-4 border-t border-border">
              <p className="font-display font-black text-2xl text-foreground">
                $PUMPHOUSE CTO.{" "}
                <span className="text-primary">Built by degens.</span> For
                degens.{" "}
                <span className="text-secondary">The mission never ends.</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="font-mono text-xs border border-primary/30 text-primary px-3 py-1 rounded">
                ✓ CTO EXECUTED
              </span>
              <span className="font-mono text-xs border border-secondary/30 text-secondary px-3 py-1 rounded">
                ✓ COMMUNITY OWNED
              </span>
              <span className="font-mono text-xs border border-border text-muted-foreground px-3 py-1 rounded">
                ✓ DEV GONE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
