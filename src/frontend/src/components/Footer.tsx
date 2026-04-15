import Marquee from "./Marquee";

const CA = "AnAVK1B3ZQRcUVriqLNTYFZ32PgJUSDDvJmT4WdXpump";

const XIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5 fill-current"
    aria-label="X (Twitter)"
  >
    <title>X</title>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.85L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";

  return (
    <footer
      className="bg-card border-t border-border"
      data-ocid="footer.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="font-display font-black text-2xl text-primary text-glow mb-2">
              $PUMPHOUSE CTO
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-xs">
              Built by degens, for degens. The mission never ends.
              {"Don't"} tread on me. 🏠
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://x.com/search?q=%24PUMPHOUSE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="Search $PUMPHOUSE on X"
                data-ocid="footer.twitter_link"
              >
                <XIcon />
              </a>
              <a
                href="https://twitter.com/i/communities/2031139283201913003"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth text-xs font-medium hover:underline"
                data-ocid="footer.community_link"
              >
                Join Community →
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-3 text-sm uppercase tracking-wider">
              Navigate
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Lore", href: "#lore" },
                { label: "How to Buy", href: "#how-to-buy" },
                { label: "Tokenomics", href: "#tokenomics" },
                { label: "Meme Gallery", href: "#memes" },
                { label: "DEX Chart", href: "#chart" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-smooth"
                    data-ocid={`footer.nav_link.${link.label.toLowerCase().replace(/ /g, "_")}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CA + Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-3 text-sm uppercase tracking-wider">
              Contract
            </h4>
            <div className="bg-background border border-border rounded-xl p-3 mb-4">
              <p className="text-xs text-muted-foreground font-mono mb-1">
                CA (Solana)
              </p>
              <p className="text-xs font-mono text-foreground break-all">
                {CA}
              </p>
            </div>
            <div className="space-y-2 text-sm">
              <a
                href={`https://dexscreener.com/solana/${CA}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-smooth"
                data-ocid="footer.dexscreener_link"
              >
                📊 DEX Screener
              </a>
              <a
                href={`https://jup.ag/swap/SOL-${CA}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-smooth"
                data-ocid="footer.jupiter_link"
              >
                ⚡ Jupiter Swap
              </a>
              <a
                href={`https://solscan.io/token/${CA}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-smooth"
                data-ocid="footer.solscan_link"
              >
                🔍 Solscan
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-border pt-6 mb-6">
          <p className="text-muted-foreground/60 text-xs text-center leading-relaxed max-w-2xl mx-auto">
            ⚠️ $PUMPHOUSE CTO is a meme coin with no intrinsic value or
            expectation of financial return. This is not financial advice. DYOR.
            Only invest what you can afford to lose.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground/50">
          <span>
            © {year}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-smooth"
            >
              caffeine.ai
            </a>
          </span>
          <span className="font-mono">
            $PUMPHOUSE CTO — {"Don't"} Tread On Me 🏠
          </span>
        </div>
      </div>

      {/* Bottom marquee */}
      <Marquee
        bgClass="bg-primary"
        textClass="text-primary-foreground"
        speed="slow"
      />
    </footer>
  );
}
