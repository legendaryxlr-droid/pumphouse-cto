import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const STEPS = [
  {
    num: "01",
    icon: "👻",
    title: "Get Phantom Wallet",
    desc: "Download the Phantom wallet from phantom.app. Available on iOS, Android, and as a Chrome extension. Your gateway to Solana.",
    action: { label: "Get Phantom", href: "https://phantom.app" },
  },
  {
    num: "02",
    icon: "💰",
    title: "Fund with SOL",
    desc: "Buy SOL on Coinbase, Binance, or Kraken. Then send it directly to your Phantom wallet address. You'll need SOL to swap.",
    action: { label: "Buy SOL", href: "https://coinbase.com" },
  },
  {
    num: "03",
    icon: "⚡",
    title: "Swap on Jupiter",
    desc: "Go to jup.ag, paste the $PUMPHOUSE CTO contract address, set slippage to 5-10%, and swap your SOL for $PUMPHOUSE.",
    action: {
      label: "Go to Jupiter",
      href: "https://jup.ag/swap/SOL-AnAVK1B3ZQRcUVriqLNTYFZ32PgJUSDDvJmT4WdXpump",
    },
  },
  {
    num: "04",
    icon: "🏠",
    title: "HODL & Vibe",
    desc: "Welcome to the Pumphouse. Don't tread on me. Diamond hands only. The mission never ends — you're now a PUMPHOUSE OPERATOR.",
    action: {
      label: "Join Community",
      href: "https://twitter.com/i/communities/2031139283201913003",
    },
  },
];

export default function HowToBuySection() {
  return (
    <section
      id="how-to-buy"
      className="py-24 bg-background"
      data-ocid="howtobuy.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-primary text-xs font-bold tracking-widest uppercase">
              Quick & Easy
            </span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-foreground mb-4">
            HOW TO <span className="text-primary text-glow">BUY</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            4 steps to join the Pumphouse. Takes less than 5 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className="relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-smooth group green-border-glow"
              data-ocid={`howtobuy.step.${i + 1}`}
            >
              {/* Step number */}
              <div className="font-mono text-5xl font-black text-primary/10 group-hover:text-primary/20 transition-smooth leading-none mb-4">
                {step.num}
              </div>

              {/* Icon */}
              <div className="text-3xl mb-3">{step.icon}</div>

              <h3 className="font-display font-bold text-lg text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {step.desc}
              </p>

              <Button
                asChild
                className="rounded-full w-full font-semibold text-sm bg-primary/10 border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                variant="ghost"
              >
                <a
                  href={step.action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid={`howtobuy.action_button.${i + 1}`}
                >
                  {step.action.label}
                  <ExternalLink size={12} className="ml-1.5" />
                </a>
              </Button>

              {/* Arrow connector (not on last item) */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10">
                  <div className="text-primary/40 text-xl">›</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CA box */}
        <div className="mt-12 bg-card border border-primary/30 rounded-2xl p-6 text-center">
          <p className="text-muted-foreground text-sm mb-2 font-mono uppercase tracking-wider">
            Contract Address (CA)
          </p>
          <p className="font-mono text-foreground text-sm sm:text-base break-all">
            AnAVK1B3ZQRcUVriqLNTYFZ32PgJUSDDvJmT4WdXpump
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Paste this in Jupiter to find $PUMPHOUSE CTO
          </p>
        </div>
      </div>
    </section>
  );
}
