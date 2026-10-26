import Image from "next/image";

const stats = [
  { value: "22", label: "Acres" },
  { value: "1924", label: "Established" },
  { value: "3", label: "Generations" },
  { value: "6", label: "Rooms today" },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <Image
        src="/images/pexels-nandu-vasudevan-167142178-10939816.jpg"
        alt="The private canal with white ducks, still green water, and cottages beyond"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_40%] md:object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />

      <div 
      data-aos="fade-out"
      data-aos-delay="100"
      className="relative z-10 mx-auto w-full max-w-4xl px-6 py-28 text-center text-white md:py-0 md:pt-[6vh]">
        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl font-semibold leading-tight tracking-wide text-[#5B3A29] sm:text-5xl md:text-7xl">
          Silver Holme Heritage
        </h1>

        <p className="mt-4 font-[family-name:var(--font-inter)] text-xs font-light uppercase tracking-[0.3em] text-[#5B3A29]/90 md:mt-10 md:text-base md:font-bold">
          Coffee at Dawn. Mist at Dusk.
        </p>

        <div className="mx-auto mt-8 w-full max-w-xl border-t border-[#EEF0EA]/30 px-4 pt-5 md:mt-20 md:max-w-3xl md:pt-6">
          <div className="grid grid-cols-2 gap-y-6 text-center sm:grid-cols-4 sm:gap-x-6 md:gap-x-16 md:gap-y-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-[family-name:var(--font-cormorant)] text-3xl leading-none text-[#EEF0EA] md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 font-[family-name:var(--font-inter)] text-[9px] uppercase tracking-[0.2em] text-[#EEF0EA]/75 sm:text-[10px] sm:tracking-[0.25em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl font-[family-name:var(--font-inter)] text-sm font-light leading-relaxed tracking-wide text-[#EEF0EA]/90 md:mt-16 md:text-lg">
          Water moves quietly along the east boundary, as it has for a century.
          <br className="hidden md:block" />
          The family will keep the land. They are looking for a partner to share it.
        </p>

        <a
          href="#property"
          className="mt-8 inline-block text-xs uppercase tracking-[0.3em] text-white/70 transition hover:text-white md:mt-12"
        >
          Scroll ↓
        </a>
      </div>
    </section>
  );
};

export default Hero;