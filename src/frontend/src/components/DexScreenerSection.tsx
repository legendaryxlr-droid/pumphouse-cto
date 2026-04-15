const CA = "AnAVK1B3ZQRcUVriqLNTYFZ32PgJUSDDvJmT4WdXpump";
const DEXSCREENER_URL = `https://dexscreener.com/solana/${CA}`;
const EMBED_URL = `https://dexscreener.com/solana/${CA}?embed=1&theme=dark&trades=0`;

const CHAIN_STATS = [
  { label: "Chain", value: "Solana ☀️" },
  { label: "DEX", value: "Raydium" },
  { label: "Pair", value: "PUMPHOUSE/SOL" },
  { label: "Type", value: "CTO 💎" },
];

export default function DexScreenerSection() {
  return (
    <section
      id="chart"
      className="py-24 bg-card"
      data-ocid="dexscreener.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-primary text-xs font-bold tracking-widest uppercase">
              📈 Live Chart
            </span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-foreground mb-4">
            DEX <span className="text-primary text-glow">SCREENER</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Watch the pump in real time. The chart never lies.
          </p>
        </div>

        <div className="bg-background border border-border rounded-2xl overflow-hidden green-border-glow">
          <div className="bg-card border-b border-border px-5 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                PUMPHOUSE/SOL — LIVE CHART
              </span>
            </div>
            <a
              href={DEXSCREENER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-primary transition-smooth flex items-center gap-1"
              data-ocid="dexscreener.open_link"
            >
              Open in DEX Screener ↗
            </a>
          </div>
          <iframe
            src={EMBED_URL}
            title="$PUMPHOUSE CTO DEX Screener Chart"
            className="w-full"
            style={{ height: "600px", border: "none" }}
            loading="lazy"
            data-ocid="dexscreener.iframe"
          />
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {CHAIN_STATS.map((item) => (
            <div
              key={item.label}
              className="bg-background border border-border rounded-xl px-4 py-3 text-center"
            >
              <div className="text-muted-foreground text-xs font-mono uppercase tracking-wider mb-1">
                {item.label}
              </div>
              <div className="font-bold text-foreground text-sm">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
