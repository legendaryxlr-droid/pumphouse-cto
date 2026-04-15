import { Button } from "@/components/ui/button";

interface Tweet {
  id: string;
  avatar: string;
  username: string;
  handle: string;
  text: string;
  likes: number;
  time: string;
}

const TWEETS: Tweet[] = [
  {
    id: "tweet-1",
    avatar: "🦆",
    username: "CryptoDegen404",
    handle: "@CryptoDegen404",
    text: "Just aped into $PUMPHOUSE CTO. This community is unreal. CTOs always pump harder 🏠💚",
    likes: 247,
    time: "2h",
  },
  {
    id: "tweet-2",
    avatar: "🚀",
    username: "PumpHouseArmy",
    handle: "@PumpHouseArmy",
    text: "The devs left but WE stayed. $PUMPHOUSE CTO is the people's token. Diamond hands forever 💎",
    likes: 389,
    time: "4h",
  },
  {
    id: "tweet-3",
    avatar: "💎",
    username: "SolanaTrader99",
    handle: "@SolanaTrader99",
    text: "LP burned, mint renounced, community running the show. This is what a real CTO looks like. $PUMPHOUSE",
    likes: 156,
    time: "6h",
  },
  {
    id: "tweet-4",
    avatar: "🔥",
    username: "MoonWatcher",
    handle: "@MoonWatcher",
    text: "Don't tread on me and don't tell me to sell my $PUMPHOUSE. We're building this house one brick at a time 🏗️",
    likes: 521,
    time: "8h",
  },
];

const XLogo = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-4 h-4 fill-foreground/30"
    aria-label="X (Twitter)"
  >
    <title>X</title>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.85L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

function TweetCard({ tweet, index }: { tweet: Tweet; index: number }) {
  return (
    <div
      className="bg-card border border-border rounded-2xl p-5 hover:border-primary/40 transition-smooth group"
      data-ocid={`community.tweet.${index + 1}`}
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-xl shrink-0">
          {tweet.avatar}
        </div>
        <div className="min-w-0">
          <div className="font-bold text-foreground text-sm truncate">
            {tweet.username}
          </div>
          <div className="text-muted-foreground text-xs">{tweet.handle}</div>
        </div>
        <div className="ml-auto shrink-0">
          <XLogo />
        </div>
      </div>

      <p className="text-foreground text-sm leading-relaxed mb-4">
        {tweet.text}
      </p>

      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5 hover:text-primary transition-smooth cursor-pointer">
          <span>♥</span>
          <span>{tweet.likes}</span>
        </div>
        <span>{tweet.time} ago</span>
      </div>
    </div>
  );
}

const XLogoButton = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 mr-2 fill-current" aria-label="X">
    <title>X</title>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.85L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

export default function CommunitySection() {
  return (
    <section
      id="community"
      className="py-24 bg-background"
      data-ocid="community.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-primary text-xs font-bold tracking-widest uppercase">
              The Operators
            </span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-foreground mb-4">
            COMMUNITY <span className="text-primary text-glow">TWEETS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Real degens. Real conviction. The Pumphouse never sleeps.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {TWEETS.map((tweet, i) => (
            <TweetCard key={tweet.id} tweet={tweet} index={i} />
          ))}
        </div>

        {/* Community CTA */}
        <div className="bg-card border border-primary/30 rounded-2xl p-8 text-center green-border-glow">
          <div className="text-4xl mb-4">🏠</div>
          <h3 className="font-display font-black text-2xl text-foreground mb-2">
            Join the <span className="text-primary">Pumphouse Army</span>
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            The community is the team now. Follow the signal, join the
            community, spread the meme.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Button
              asChild
              className="rounded-full bg-primary text-primary-foreground font-bold px-6 shadow-glow hover:scale-105 transition-smooth"
              data-ocid="community.twitter_button"
            >
              <a
                href="https://x.com/search?q=%24PUMPHOUSE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <XLogoButton />
                Follow $PUMPHOUSE
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-border text-foreground hover:border-primary hover:text-primary transition-smooth px-6"
              data-ocid="community.community_button"
            >
              <a
                href="https://twitter.com/i/communities/2031139283201913003"
                target="_blank"
                rel="noopener noreferrer"
              >
                🏠 Join Community
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
