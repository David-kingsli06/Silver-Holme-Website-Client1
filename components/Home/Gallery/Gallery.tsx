"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Photo = {
  src: string;
  alt: string;
  featured: boolean;
};

const photos: Photo[] = [
  {
    src: "/images/gallery/bungalow.jpg",
    alt: "The estate bungalow with its tiled roof and wide verandah",
    featured: true,
  },
  {
    src: "/images/gallery/mist-hills.jpg",
    alt: "Mist settling over green hills at Silver Holem",
    featured: true,
  },
  {
    src: "/images/gallery/pepper-harvest.jpg",
    alt: "A woman holding a tray of black pepper in the estate vines",
    featured: true,
  },
  {
    src: "/images/gallery/abbey-falls.jpg",
    alt: "Abbey Falls, a waterfall framed by forest near the estate",
    featured: true,
  },
  {
    src: "/images/gallery/blue-hills.jpg",
    alt: "Blue hills fading into morning mist",
    featured: false,
  },
  {
    src: "/images/gallery/coorg-hills.jpg",
    alt: "Coorg hills under a clear morning sky",
    featured: false,
  },
  {
    src: "/images/gallery/elephant-camp.jpg",
    alt: "An elephant at the Dubare elephant camp",
    featured: false,
  },
  {
    src: "/images/gallery/madikeri-gaddige.jpg",
    alt: "The Madikeri Gaddige, a cream-coloured domed tomb in Madikeri",
    featured: false,
  },
];

const FADE_DELAY_MS = 6000;

const featuredIndexes = photos
  .map((photo, index) => (photo.featured ? index : -1))
  .filter((index) => index !== -1);

const nextFeaturedIndex = (current: number) => {
  const position = featuredIndexes.indexOf(current);
  // If a reel photo outside the fade set is active, start the fade at the first featured photo.
  if (position === -1) return featuredIndexes[0];
  return featuredIndexes[(position + 1) % featuredIndexes.length];
};

const Gallery = () => {
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [holding, setHolding] = useState(false);
  const featuredRef = useRef<HTMLDivElement>(null);

  const paused = hovering || holding;
  const current = photos[active];

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const timer = setTimeout(() => {
      setActive((index) => nextFeaturedIndex(index));
    }, FADE_DELAY_MS);

    return () => clearTimeout(timer);
  }, [active]);

  const showPhoto = (index: number) => {
    setActive(index);
    // Scroll up to the big image only if it is out of view (mainly on phones).
    featuredRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  return (
    <section
      id="gallery"
      className="w-full bg-[#1F2A22] px-5 py-24 text-[#EEF0EA] md:py-15"
    >
      <div className="mx-auto w-full text-center">
        {/* Heading */}
        <div data-aos="fade-out" className="flex items-center justify-center gap-5 md:gap-8">
          <div className="h-px w-16 bg-[#8A6A3B] md:w-48" />
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold uppercase tracking-[0.25em] text-[#EEF0EA] md:text-5xl">
            The Gallery
          </h2>
          <div className="h-px w-16 bg-[#8A6A3B] md:w-48" />
        </div>

        {/* Short note */}
        <p data-aos="fade-out" className="mx-auto mt-3 max-w-2xl py-5 font-[family-name:var(--font-inter)] text-sm font-light leading-relaxed tracking-wide text-[#EEF0EA]/80 md:text-base">
          Abbey Falls is 9 km away, Raja’s Seat 6 km, and the Dubare elephant
          camp 32 km. Water, forest, and mist are never far from the estate.
        </p>
      </div>

      {/* Featured image: full width, taller on desktop */}
      <div ref={featuredRef} className="mx-auto mt-5 w-full">
        <div data-aos="fade-out" className="relative h-[60vh] min-h-[320px] overflow-hidden bg-[#5B3A29]/30 md:h-[80vh]">
          <Image
            key={active}
            src={current.src}
            alt={current.alt}
            fill
            priority
            sizes="(min-width: 768px) 75vw, 100vw"
            className="object-cover animate-[gallery-fade_1.2s_ease-out]"
          />

          {/* Dots, with a soft backing so they show on bright photos */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/35 px-3 py-2">
            {featuredIndexes.map((index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show photo ${index + 1}`}
                aria-current={active === index}
                className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                  active === index ? "bg-[#EEF0EA]" : "bg-[#EEF0EA]/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Reel: each photo once, sliding left and back */}
      <div className="mt-10 overflow-hidden">
        <div
          className="flex w-max animate-[gallery-reel_10s_ease-in-out_infinite_alternate] gap-10 px-5 motion-reduce:animate-none"
          style={{ animationPlayState: paused ? "paused" : "running" }}
          onPointerEnter={() => setHovering(true)}
          onPointerLeave={() => {
            setHovering(false);
            setHolding(false);
          }}
          onPointerDown={() => setHolding(true)}
          onPointerUp={() => setHolding(false)}
          onPointerCancel={() => setHolding(false)}
        >
          {photos.map((photo, index) => {
            const isActive = active === index;
            return (
              <button
                key={photo.src}
                type="button"
                onClick={() => showPhoto(index)}
                aria-label={`Show ${photo.alt}`}
                aria-current={isActive}
                className={`relative h-24 w-36 shrink-0 overflow-hidden transition-shadow duration-300 md:h-36 md:w-56 ${
                  isActive ? "ring-2 ring-inset ring-[#8A6A3B]" : "ring-0"
                }`}
              >
                <Image
                  src={photo.src}
                  alt=""
                  width={224}
                  height={144}
                  className="h-full w-full object-cover hover:cursor-pointer"
                />
              </button>
            );
          })}
        </div>
      </div>
            {/* Description box below the reel */}
      <div className="mx-auto mt-10 max-w-xl border border-[#8A6A3B]/60 px-5 py-5 text-center md:px-8 md:py-6">
        <p className="font-[family-name:var(--font-cormorant)] text-xl font-bold leading-snug text-[#8A6A3B] md:text-2xl">
          A closer look at the land
        </p>
        <p className="mt-3 font-[family-name:var(--font-inter)] text-xs font-light leading-relaxed tracking-wide text-[#EEF0EA]/75 md:text-sm">
          Tap any photo to see it larger above. The estate, its bungalow, and
          the hills that surround it are shown here as they look through the
          seasons.
        </p>
      </div>
            {/* 1px divider to separate the Gallery from the next section */}
      <div className="mx-auto mt-16 h-px w-full bg-[#8A6A3B]" />
    </section>
  );
};

export default Gallery;