import { X } from "lucide-react";
import { useState } from "react";

const IMAGES = [
  "/assets/img_20260415_141049-019d9174-d565-772d-aad8-f6645f554a0a.jpg",
  "/assets/img_20260415_141054-019d9174-d6fc-76f9-b2a7-d93388f2423d.jpg",
  "/assets/img_20260415_141058-019d9174-d84d-7b7b-aab9-e89d5d3c7213.jpg",
  "/assets/img_20260415_141101-019d9174-d9b1-7d88-af62-ea2ce10e6afa.jpg",
  "/assets/img_20260415_141108-019d9174-db03-7e8d-b58c-63df1e5da2fd.jpg",
  "/assets/img_20260415_141113-019d9174-dc62-7498-bb65-edd6b83b7cbb.jpg",
  "/assets/img_20260415_141119-019d9174-ddc0-7f90-8e44-9a0b96e4617e.jpg",
  "/assets/img_20260415_141143-019d9174-df24-7c10-b31a-b7af1db87a86.jpg",
  "/assets/img_20260415_141151-019d9174-e083-7d2a-8748-ebf33a40e9eb.jpg",
  "/assets/img_20260415_141156-019d9174-e1e1-72c6-bf1c-9f2b8b85b5b9.jpg",
  "/assets/img_20260415_141200-019d9174-e345-7e3a-8e33-7db1f2c0daab.jpg",
  "/assets/img_20260415_141208-019d9174-e4a4-7aa1-89c7-e08de67a8d24.jpg",
  "/assets/img_20260415_141214-019d9174-e602-7d15-8bb5-3e5c9b16e1c2.jpg",
  "/assets/img_20260415_141218-019d9174-e766-7c90-a3f5-6286f97c0a19.jpg",
];

export default function MemeGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  function closeLightbox() {
    setLightbox(null);
  }

  return (
    <section id="memes" className="py-24 bg-card" data-ocid="gallery.section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-secondary text-xs font-bold tracking-widest uppercase">
              Degen Gallery
            </span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-foreground mb-4">
            MEME <span className="text-primary text-glow">GALLERY</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            The art of the pump. Click to expand.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {IMAGES.map((src, i) => (
            <button
              type="button"
              key={src}
              onClick={() => setLightbox(i)}
              className="group relative aspect-square overflow-hidden rounded-xl border border-border hover:border-primary/60 transition-smooth hover:scale-105 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-card"
              data-ocid={`gallery.item.${i + 1}`}
              aria-label={`View meme ${i + 1}`}
            >
              <img
                src={src}
                alt={`$PUMPHOUSE CTO meme artwork ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-smooth" />
              <div className="absolute bottom-2 right-2 bg-card/80 text-foreground text-xs font-mono px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-smooth">
                #{i + 1}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <dialog
          open
          className="fixed inset-0 z-50 m-0 w-screen max-w-none h-screen bg-background/95 flex items-center justify-center p-4 border-none"
          onClick={closeLightbox}
          onKeyDown={(e) => e.key === "Escape" && closeLightbox()}
          data-ocid="gallery.lightbox"
          aria-label="Meme fullscreen viewer"
        >
          <button
            type="button"
            className="absolute top-4 right-4 bg-card border border-border text-foreground rounded-full p-2 hover:border-primary hover:text-primary transition-smooth"
            onClick={closeLightbox}
            aria-label="Close lightbox"
            data-ocid="gallery.close_button"
          >
            <X size={20} />
          </button>

          <button
            type="button"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-card border border-border text-foreground rounded-full p-3 hover:border-primary hover:text-primary transition-smooth text-2xl font-bold leading-none"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox - 1 + IMAGES.length) % IMAGES.length);
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <img
            src={IMAGES[lightbox]}
            alt={`$PUMPHOUSE CTO meme artwork ${lightbox + 1} fullscreen`}
            className="max-w-full max-h-[85vh] rounded-xl border border-primary/30 shadow-glow object-contain"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-card border border-border text-foreground rounded-full p-3 hover:border-primary hover:text-primary transition-smooth text-2xl font-bold leading-none"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % IMAGES.length);
            }}
            aria-label="Next image"
          >
            ›
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-muted-foreground text-sm">
            {lightbox + 1} / {IMAGES.length}
          </div>
        </dialog>
      )}
    </section>
  );
}
