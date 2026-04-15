import { Activity, TrendingDown, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

interface PriceData {
  price: string;
  priceChange24h: number;
  volume24h: string;
  marketCap: string;
  liquidity: string;
}

const CA = "AnAVK1B3ZQRcUVriqLNTYFZ32PgJUSDDvJmT4WdXpump";

function formatNumber(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(2)}K`;
  return `$${n.toFixed(2)}`;
}

function formatPrice(n: number): string {
  if (n < 0.000001) return n.toExponential(4);
  if (n < 0.01) return n.toFixed(8);
  return n.toFixed(6);
}

export default function PriceTickerBar() {
  const [data, setData] = useState<PriceData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPrice() {
      try {
        const res = await fetch(
          `https://api.dexscreener.com/latest/dex/tokens/${CA}`,
        );
        const json = await res.json();
        const pair = json.pairs?.[0];
        if (pair) {
          setData({
            price: formatPrice(Number.parseFloat(pair.priceUsd || "0")),
            priceChange24h: pair.priceChange?.h24 ?? 0,
            volume24h: formatNumber(pair.volume?.h24 ?? 0),
            marketCap: formatNumber(pair.marketCap ?? 0),
            liquidity: formatNumber(pair.liquidity?.usd ?? 0),
          });
        }
      } catch {
        // silently fail
      } finally {
        setLoading(false);
      }
    }

    fetchPrice();
    const interval = setInterval(fetchPrice, 30_000);
    return () => clearInterval(interval);
  }, []);

  const isUp = (data?.priceChange24h ?? 0) >= 0;

  return (
    <div
      className="bg-card border-b border-border py-2 px-4 overflow-hidden"
      data-ocid="price_ticker"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Activity size={14} className="text-primary animate-pulse" />
          <span className="text-muted-foreground text-xs font-mono uppercase tracking-wider">
            LIVE PRICE
          </span>
        </div>

        {loading ? (
          <div className="flex items-center gap-2">
            <div className="h-4 w-24 bg-muted animate-pulse rounded" />
            <div className="h-4 w-16 bg-muted animate-pulse rounded" />
          </div>
        ) : data ? (
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-1.5">
              <span className="font-mono font-bold text-foreground">
                ${data.price}
              </span>
              <span
                className={`flex items-center gap-0.5 font-semibold text-xs px-2 py-0.5 rounded-full ${
                  isUp
                    ? "text-primary bg-primary/10"
                    : "text-destructive bg-destructive/10"
                }`}
              >
                {isUp ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                {isUp ? "+" : ""}
                {data.priceChange24h.toFixed(2)}%
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-xs text-muted-foreground">
              <span>VOL</span>
              <span className="text-foreground font-medium">
                {data.volume24h}
              </span>
            </div>
            <div className="hidden md:flex items-center gap-1 text-xs text-muted-foreground">
              <span>MCAP</span>
              <span className="text-foreground font-medium">
                {data.marketCap}
              </span>
            </div>
            <div className="hidden lg:flex items-center gap-1 text-xs text-muted-foreground">
              <span>LIQ</span>
              <span className="text-foreground font-medium">
                {data.liquidity}
              </span>
            </div>
          </div>
        ) : (
          <span className="text-xs text-muted-foreground">
            Fetching price data...
          </span>
        )}

        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span>$PUMPHOUSE CTO</span>
        </div>
      </div>
    </div>
  );
}
