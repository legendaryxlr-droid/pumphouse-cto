interface MarqueeProps {
  text?: string;
  speed?: "normal" | "slow";
  className?: string;
  bgClass?: string;
  textClass?: string;
}

export default function Marquee({
  text = "$PUMPHOUSE CTO",
  speed = "normal",
  className = "",
  bgClass = "bg-primary",
  textClass = "text-primary-foreground",
}: MarqueeProps) {
  const animClass =
    speed === "slow" ? "animate-marquee-slow" : "animate-marquee";
  const content = `${text} 🏠 ${text} 🏠 ${text} 🏠 ${text} 🏠 ${text} 🏠 ${text} 🏠 ${text} 🏠 ${text} 🏠 `;

  return (
    <div
      className={`overflow-hidden py-2.5 ${bgClass} ${className}`}
      data-ocid="marquee"
      aria-hidden="true"
    >
      <div className={`flex whitespace-nowrap ${animClass}`}>
        <span
          className={`font-display font-bold text-sm tracking-widest uppercase ${textClass} pr-8`}
        >
          {content}
          {content}
        </span>
      </div>
    </div>
  );
}
