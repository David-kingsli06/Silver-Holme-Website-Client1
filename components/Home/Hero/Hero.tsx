import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <Image
        src="/images/pexels-nandu-vasudevan-167142178-10939816.jpg"
        alt="The private canal with white ducks, still green water, and cottages beyond"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-[6vh] text-center text-white">
        <h1 className=" font-[family-name:var(--font-cormorant)] text-5xl font-semibold leading-tight tracking-wide text-[#5B3A29] md:text-7xl">
        Silver Holem Heritage
        </h1>
        <p className="mt-6 md:mt-10 font-[family-name:var(--font-inter)] font-light md:font-bold text-base uppercase tracking-[0.3em] text-[#1F2A22]/80 md:text-md">
             Coffee at Dawn. Mist at Dusk.
        </p>
        <div className="mx-auto md:mt-20 mt-10 w-full max-w-xl border-t border-[#EEF0EA]/30 px-4 pt-6 md:max-w-3xl">
  <div className="grid grid-cols-2 gap-y-8 text-center sm:grid-cols-4 sm:gap-x-6 md:gap-x-16">
    {[
      { value: "22", label: "Acres" },
      { value: "1924", label: "Established" },
      { value: "3", label: "Generations" },
      { value: "6", label: "Rooms today" },
    ].map((stat) => (
      <div key={stat.label}>
        <p className="font-[family-name:var(--font-cormorant)] text-3xl leading-none text-[#5B3A29] md:text-4xl">
          {stat.value}
        </p>
        <p className="mt-2 font-[family-name:var(--font-inter)] text-[9px] uppercase tracking-[0.2em] text-[#EEF0EA]/75 sm:text-[10px] sm:tracking-[0.25em]">
          {stat.label}
        </p>
      </div>
    ))}
  </div>
</div>
        
        <p className="mx-auto mt-10 md:mt-15 max-w-2xl font-[family-name:var(--font-inter)] text-sm font-light leading-relaxed tracking-wide text-[#EEF0EA]/90 md:text-lg">
  Water moves quietly along the east boundary, as it has for a century.
  <br className="hidden md:block" />
  The family will keep the land. They are looking for a partner to share it.
</p>
        <a
          href="#property"
          className="mt-12 inline-block text-xs uppercase tracking-[0.3em] text-white/70 hover:text-white"
        >
          Scroll ↓
        </a>
      </div>
    </section>
  );
};

export default Hero;