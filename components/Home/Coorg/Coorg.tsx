import Image from "next/image";
import CoorgSpots from "@/components/Helper/Coorgspots";

const stats = [
  { value: "4,100", label: "Square km" },
  { value: "1,100 m", label: "Estate altitude" },
  { value: "3", label: "Major rivers" },
  { value: "2,000+", label: "Years of history" },
];

const aboutPoints = [
  "Known for Arabica and robusta coffee grown in shaded hill estates.",
  "Black pepper and cardamom grow beneath silver oak and rainforest canopy.",
  "Mist settles on the hills from June to February.",
  "Kodagu's culture, cuisine, and festivals are distinct from the rest of Karnataka.",
];

const Coorg = () => {
  return (
    <section id="coorg" className="w-full py-10 bg-[#1F2A22] text-[#EEF0EA]">
      {/* Banner */}
      <div className="relative  h-[22vh] w-full overflow-hidden">
        <Image
          src="/images/pexels-nandu-vasudevan-167142178-10939816.jpg"
          alt="Green hills and mist over the Coorg landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1F2A22]/40 via-[#1F2A22]/20 to-[#1F2A22]" />
        <h2 className="absolute inset-x-0 bottom-12 text-center font-[family-name:var(--font-cormorant)] text-5xl font-semibold uppercase tracking-[0.3em] text-[#EEF0EA] md:text-7xl">
          Coorg
        </h2>
      </div>

      <div className="mx-auto grid max-w-6xl items-start gap-16 px-6 py-20 md:grid-cols-12 md:gap-12">
        {/* Left column: about, stats and images */}
        <aside className="md:sticky md:top-24 md:col-span-5 md:self-start">
          <p className="font-[family-name:var(--font-inter)] text-xs uppercase tracking-[0.3em] text-[#8A6A3B]">
            About Coorg
          </p>
          <h3 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-bold leading-tight text-[#8A6A3B] md:text-5xl">
            Hills, coffee, and slow mornings.
          </h3>

          <ul className="mt-8 space-y-4 font-[family-name:var(--font-inter)] font-light leading-relaxed text-[#EEF0EA]/80">
            {aboutPoints.map((point) => (
              <li key={point} className="flex gap-3">
                <span aria-hidden="true" className="text-[#8A6A3B]">
                  &#8226;
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10">
            {stats.map((s) => (
              <div key={s.label} className="border-t border-[#8A6A3B]/50 pt-4">
                <p className="font-[family-name:var(--font-cormorant)] text-4xl text-center leading-none text-[#EEF0EA]">
                  {s.value}
                </p>
                <p className="mt-2 font-[family-name:var(--font-inter)] text-[10px] text-center uppercase tracking-[0.2em] text-[#EEF0EA]/70">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </aside>

        {/* Right column: famous spots */}
        <div className="md:col-span-7">
          <p className="font-[family-name:var(--font-inter)] text-xs uppercase tracking-[0.3em] text-[#8A6A3B]">
            Famous spots
          </p>
          <div className="mt-8">
            <CoorgSpots />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#1F2A22] px-6 py-5 text-center">
        <p className="font-[family-name:var(--font-cormorant)] text-2xl text-[#EEF0EA]">
          Everything about Coorg, in one place.
        </p>
      </div>
      <div className="mx-auto mt-16 h-px w-full bg-[#8A6A3B]" />
    </section>
  );
};

export default Coorg;   