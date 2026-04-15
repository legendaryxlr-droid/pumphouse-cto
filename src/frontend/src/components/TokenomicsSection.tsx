const STATS = [
  {
    icon: "🪙",
    label: "Total Supply",
    value: "1,000,000,000",
    sub: "1 Billion tokens",
    highlight: false,
  },
  {
    icon: "💚",
    label: "Buy Tax",
    value: "0%",
    sub: "No fees on buy",
    highlight: true,
  },
  {
    icon: "💚",
    label: "Sell Tax",
    value: "0%",
    sub: "No fees on sell",
    highlight: true,
  },
  {
    icon: "🔥",
    label: "Liquidity",
    value: "BURNED",
    sub: "LP locked forever",
    highlight: false,
  },
  {
    icon: "✅",
    label: "Mint",
    value: "RENOUNCED",
    sub: "Supply is fixed",
    highlight: false,
  },
  {
    icon: "🔍",
    label: "Contract",
    value: "VERIFIED",
    sub: "On-chain verified",
    highlight: false,
  },
];

const ALLOCATION = [
  { label: "Community / Circulating", pct: 95, color: "bg-primary" },
  { label: "Burned / Dead Wallets", pct: 5, color: "bg-secondary" },
];

export default function TokenomicsSection() {
  return (
    <section
      id="tokenomics"
      className="py-24 bg-background"
      data-ocid="tokenomics.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-primary text-xs font-bold tracking-widest uppercase">
              On-Chain Facts
            </span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-foreground mb-4">
            TOKENOMICS
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            No tricks. No taxes. No team allocation. Just a fair launch token
            owned by the community.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`rounded-2xl p-5 text-center border transition-smooth hover:scale-105 cursor-default ${
                stat.highlight
                  ? "bg-primary/10 border-primary/40 shadow-glow"
                  : "bg-card border-border hover:border-primary/40"
              }`}
              data-ocid={`tokenomics.stat.${i + 1}`}
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div
                className={`font-display font-black text-xl mb-0.5 ${
                  stat.highlight ? "text-primary" : "text-foreground"
                }`}
              >
                {stat.value}
              </div>
              <div className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
                {stat.label}
              </div>
              <div className="text-muted-foreground/60 text-xs mt-1">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Distribution bar */}
        <div className="bg-card border border-border rounded-2xl p-8">
          <h3 className="font-display font-bold text-xl text-foreground mb-6">
            Token Distribution
          </h3>
          <div className="space-y-4">
            {ALLOCATION.map((item) => (
              <div key={item.label}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground font-medium">
                    {item.label}
                  </span>
                  <span className="font-mono font-bold text-foreground">
                    {item.pct}%
                  </span>
                </div>
                <div className="h-3 bg-muted/30 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border">
            <div className="text-center">
              <div className="text-2xl mb-1">🏦</div>
              <div className="font-mono text-sm font-bold text-foreground">
                No Team Wallet
              </div>
              <div className="text-muted-foreground text-xs">
                Devs left. Community runs this.
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">🌊</div>
              <div className="font-mono text-sm font-bold text-foreground">
                Deep Liquidity
              </div>
              <div className="text-muted-foreground text-xs">
                LP burned — liquidity locked forever
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">💎</div>
              <div className="font-mono text-sm font-bold text-foreground">
                Community Owned
              </div>
              <div className="text-muted-foreground text-xs">
                100% held by real degens
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
