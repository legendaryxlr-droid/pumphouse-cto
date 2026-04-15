import { Button } from "@/components/ui/button";
import { Check, Copy, ExternalLink } from "lucide-react";
import { useState } from "react";

const CA = "AnAVK1B3ZQRcUVriqLNTYFZ32PgJUSDDvJmT4WdXpump";
const HERO_IMAGE =
  "/assets/img_20260415_141054-019d9174-d6fc-76f9-b2a7-d93388f2423d.jpg";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(CA).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-background overflow-hidden"
      data-ocid="hero.section"
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,197,94,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Green radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div className="order-2 lg:order-1 space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-xs font-bold tracking-widest uppercase">
                Community Takeover Active
              </span>
            </div>

            <h1 className="font-display font-black text-5xl sm:text-6xl xl:text-7xl leading-none tracking-tight text-foreground">
              <span className="text-primary text-glow animate-flicker">
                $PUMPHOUSE
              </span>
              <br />
              <span className="text-foreground">CTO:</span>
              <br />
              <span className="text-secondary">UNLEASHING</span>
              <br />
              <span className="text-foreground text-4xl sm:text-5xl xl:text-6xl">
                DEGEN POWER
              </span>
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
              The original community takeover token. Building the green dome of
              financial freedom, one pump at a time. No devs. No rugs. Just pure
              degen energy.
            </p>

            {/* CA Copy row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="flex-1 bg-card border border-border rounded-full px-4 py-2 flex items-center gap-2 min-w-0 max-w-sm">
                <span className="text-xs text-muted-foreground font-mono shrink-0">
                  CA:
                </span>
                <span
                  className="text-xs font-mono text-foreground truncate"
                  data-ocid="hero.ca_address"
                >
                  {CA}
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                data-ocid="hero.copy_button"
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold border transition-smooth shrink-0 ${
                  copied
                    ? "bg-primary/20 border-primary text-primary"
                    : "bg-card border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
                aria-label="Copy contract address"
              >
                {copied ? (
                  <>
                    <Check size={12} />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    Copy CA
                  </>
                )}
              </button>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3" data-ocid="hero.cta_group">
              <Button
                asChild
                className="rounded-full bg-primary text-primary-foreground font-bold px-8 py-3 text-base hover:scale-105 transition-smooth shadow-glow"
                data-ocid="hero.buy_button"
              >
                <a
                  href="https://jup.ag/swap/SOL-AnAVK1B3ZQRcUVriqLNTYFZ32PgJUSDDvJmT4WdXpump"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🏠 JOIN THE PUMP
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-border text-foreground font-semibold px-6 py-3 hover:border-primary hover:text-primary transition-smooth"
                data-ocid="hero.chart_button"
              >
                <a
                  href="https://dexscreener.com/solana/AnAVK1B3ZQRcUVriqLNTYFZ32PgJUSDDvJmT4WdXpump"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={14} className="mr-1.5" />
                  View Chart
                </a>
              </Button>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["LP Burned 🔥", "Mint Renounced ✅", "0% Tax 💚", "CTO 💎"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="bg-secondary/15 border border-secondary/30 text-secondary text-xs font-bold px-3 py-1 rounded-full"
                  >
                    {badge}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Image side */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <div className="hero-frame rounded-2xl overflow-hidden max-w-xs sm:max-w-sm lg:max-w-md w-full">
                <img
                  src={HERO_IMAGE}
                  alt="$PUMPHOUSE CTO — The Degen Operator"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
              {/* Price badge overlay */}
              <div className="absolute -bottom-4 -left-4 bg-card border border-primary/50 rounded-xl px-3 py-2 shadow-glow">
                <div className="text-xs text-muted-foreground font-mono">
                  $PUMPHOUSE
                </div>
                <div className="text-primary font-bold text-sm font-mono">
                  TO THE MOON 🚀
                </div>
              </div>
              {/* Don't tread badge */}
              <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground rounded-full px-3 py-1.5 text-xs font-black rotate-12 shadow-glow-accent">
                {"DON'T TREAD ON ME"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
