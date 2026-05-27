import { useState, useRef, useEffect } from "react";

const sans = { fontFamily: "'IBM Plex Sans', sans-serif" } as const;
const mono = { fontFamily: "'IBM Plex Mono', monospace" } as const;

const css = `
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400&family=IBM+Plex+Sans:wght@300;400&display=swap');
  .track { overflow-x: scroll; scrollbar-width: none; -ms-overflow-style: none; cursor: grab; }
  .track::-webkit-scrollbar { display: none; }
  .track:active { cursor: grabbing; }
  .photo-card img { transition: opacity 0.4s ease; pointer-events: none; }
`;

interface Photo {
  id: number;
  src: string;
  alt: string;
  label: string;
}

type LoadedMap = Record<number, boolean>;

const photos: Photo[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=800&fit=crop",
    alt: "Conference talk on stage",
    label: "Main Stage",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&h=800&fit=crop",
    alt: "Speaker at tech event",
    label: "Keynote",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=800&fit=crop",
    alt: "Audience at conference",
    label: "The Crowd",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=800&fit=crop",
    alt: "Developer meetup",
    label: "Networking",
  },
];

export default function PhotoGallery() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [loaded, setLoaded] = useState<LoadedMap>({});
  const trackRef = useRef<HTMLDivElement>(null);

  const handleLoad = (id: number): void =>
    setLoaded((prev) => ({ ...prev, [id]: true }));

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let isDown = false,
      startX = 0,
      scrollLeft = 0;

    const onDown = (e: MouseEvent): void => {
      isDown = true;
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    };
    const onUp = (): void => {
      isDown = false;
    };
    const onMove = (e: MouseEvent): void => {
      if (!isDown) return;
      e.preventDefault();
      track.scrollLeft =
        scrollLeft - (e.pageX - track.offsetLeft - startX) * 1.2;
    };

    track.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    track.addEventListener("mousemove", onMove);
    return () => {
      track.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      track.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <style>{css}</style>

      <section
        className="bg-[#0C0C0C] py-16 border-t border-[#1E1E1E]"
        style={sans}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 mb-8">
          {/* Header */}
          <div className="flex items-baseline justify-between mb-1">
            <h2 className="text-[13px] font-normal text-[#D4D4D4]" style={sans}>
              Behind the experience
            </h2>
            <span className="text-[11px] text-[#3A3A3A]" style={mono}>
              {photos.length.toString().padStart(2, "0")} photos
            </span>
          </div>
          <p className="text-[12px] font-light text-[#525252]" style={sans}>
            A selection of moments from conferences and meetups.
          </p>
        </div>

        {/* Track */}
        <div ref={trackRef} className="track flex gap-3 px-6 md:px-10">
          {photos.map((photo) => {
            const isHovered = hovered === photo.id;
            const isDimmed = hovered !== null && !isHovered;

            return (
              <div
                key={photo.id}
                className="photo-card relative shrink-0 w-[260px] h-[360px] overflow-hidden bg-[#141414]"
                onMouseEnter={() => setHovered(photo.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  opacity: isDimmed ? 0.35 : 1,
                  transition: "opacity 200ms ease",
                }}
              >
                {/* Skeleton */}
                {!loaded[photo.id] && (
                  <div className="absolute inset-0 bg-[#141414]" />
                )}

                {/* Image — grayscale, hint of desaturation */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  draggable={false}
                  onLoad={() => handleLoad(photo.id)}
                  className="w-full h-full object-cover grayscale"
                  style={{
                    opacity: loaded[photo.id] ? (isHovered ? 0.9 : 0.6) : 0,
                    transition: "opacity 300ms ease",
                  }}
                />

                {/* Label — bottom left, always visible on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-3 border-t border-[#1E1E1E] bg-[#0C0C0C]"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? "translateY(0)" : "translateY(4px)",
                    transition: "opacity 200ms ease, transform 200ms ease",
                  }}
                >
                  <span
                    className="text-[10px] text-[#3A3A3A] mr-3"
                    style={mono}
                  >
                    {String(photo.id).padStart(2, "0")}
                  </span>
                  <span className="text-[12px] text-[#D4D4D4]" style={sans}>
                    {photo.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dot indicators */}
        <div className="flex items-center gap-2 px-6 md:px-10 mt-5">
          {photos.map((p) => (
            <div
              key={p.id}
              className="h-px transition-all duration-200"
              style={{
                width: hovered === p.id ? "20px" : "8px",
                background: hovered === p.id ? "#525252" : "#1E1E1E",
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
}
