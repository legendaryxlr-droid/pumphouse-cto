import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const CA = "AnAVK1B3ZQRcUVriqLNTYFZ32PgJUSDDvJmT4WdXpump";

const NAV_LINKS = [
  { label: "Lore", href: "#lore" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Meme Gallery", href: "#memes" },
  { label: "Community", href: "#community" },
];

const XIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-4 h-4 fill-current"
    aria-label="X (Twitter)"
  >
    <title>X</title>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.85L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

export default function NavHeader() {
  const [open, setOpen] = useState(false);

  function handleNav(href: string) {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header
      className="sticky top-0 z-40 bg-card border-b border-border shadow-lg"
      data-ocid="nav.header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNav("#hero")}
            className="flex items-center gap-2 group hover:opacity-80 transition-smooth"
            data-ocid="nav.logo_button"
          >
            <span className="text-2xl font-display font-black text-primary text-glow">
              $PUMPHOUSE
            </span>
            <span className="bg-secondary text-secondary-foreground text-xs font-black px-2 py-0.5 rounded-full">
              CTO
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="text-muted-foreground hover:text-primary text-sm font-medium transition-smooth"
                data-ocid={`nav.link.${link.label.toLowerCase().replace(/ /g, "_")}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://x.com/search?q=%24PUMPHOUSE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth p-1"
              aria-label="Search $PUMPHOUSE on X"
              data-ocid="nav.twitter_link"
            >
              <XIcon />
            </a>
            <Button
              asChild
              className="rounded-full bg-secondary text-secondary-foreground font-bold px-5 py-2 text-sm hover:scale-105 transition-smooth"
              data-ocid="nav.buy_button"
            >
              <a
                href={`https://jup.ag/swap/SOL-${CA}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                BUY $PUMPHOUSE
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden text-muted-foreground hover:text-primary transition-smooth p-2"
            aria-label={open ? "Close menu" : "Open menu"}
            data-ocid="nav.mobile_menu_toggle"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden bg-card border-t border-border px-4 pb-4"
          data-ocid="nav.mobile_menu"
        >
          <nav className="flex flex-col gap-1 pt-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="text-muted-foreground hover:text-primary py-2 px-3 rounded-lg hover:bg-primary/5 text-sm font-medium transition-smooth"
                data-ocid={`nav.mobile_link.${link.label.toLowerCase().replace(/ /g, "_")}`}
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="rounded-full bg-secondary text-secondary-foreground font-bold mt-3 hover:scale-105 transition-smooth"
              data-ocid="nav.mobile_buy_button"
            >
              <a
                href={`https://jup.ag/swap/SOL-${CA}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                🏠 BUY $PUMPHOUSE
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
