export default function JupiterSwapSection() {
  const jupiterUrl =
    "https://terminal.jup.ag/index.html?inputMint=So11111111111111111111111111111111111111112&outputMint=AnAVK1B3ZQRcUVriqLNTYFZ32PgJUSDDvJmT4WdXpump&platformFeeAndAccounts=%5B%5D";

  return (
    <section id="swap" className="py-24 bg-card" data-ocid="swap.section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-primary text-xs font-bold tracking-widest uppercase">
              ⚡ Instant Swap
            </span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-foreground mb-4">
            BUY <span className="text-primary text-glow">$PUMPHOUSE</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Swap directly below with the best rates on Solana
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
          {/* Jupiter embed */}
          <div className="w-full lg:w-[480px] shrink-0">
            <div className="bg-background border border-border rounded-2xl overflow-hidden">
              <div className="bg-card border-b border-border px-4 py-3 flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-mono text-muted-foreground">
                  JUPITER AGGREGATOR — BEST PRICE GUARANTEED
                </span>
              </div>
              <iframe
                src={jupiterUrl}
                title="Jupiter Swap — Buy $PUMPHOUSE CTO"
                className="w-full"
                style={{ height: "580px", border: "none" }}
                allow="clipboard-read; clipboard-write; payment"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-popups-to-escape-sandbox"
                loading="lazy"
                data-ocid="swap.iframe"
              />
            </div>
          </div>

          {/* Side info */}
          <div className="w-full lg:w-64 space-y-4">
            <div className="bg-background border border-border rounded-xl p-5">
              <h3 className="font-display font-bold text-foreground mb-3 flex items-center gap-2">
                💡 Swap Tips
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">›</span>
                  Set slippage to{" "}
                  <strong className="text-foreground">5-10%</strong> for best
                  fills
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">›</span>
                  Keep some SOL for{" "}
                  <strong className="text-foreground">gas fees</strong>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">›</span>
                  <strong className="text-foreground">0% buy tax</strong> — what
                  you see is what you get
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">›</span>
                  LP burned — your position is{" "}
                  <strong className="text-foreground">safe</strong>
                </li>
              </ul>
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-xl p-5">
              <div className="text-primary font-bold text-sm mb-1">
                🏠 WELCOME HOME
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Every wallet that holds $PUMPHOUSE is a new brick in the house.
                Don't tread on me. Don't rug us. Just pump together.
              </p>
            </div>

            <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-5">
              <div className="text-secondary font-bold text-sm mb-2">
                📊 QUICK STATS
              </div>
              <div className="space-y-1.5 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Supply</span>
                  <span className="text-foreground">1,000,000,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="text-primary font-bold">0% / 0%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">LP</span>
                  <span className="text-secondary">Burned 🔥</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Mint</span>
                  <span className="text-primary">Renounced ✅</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
