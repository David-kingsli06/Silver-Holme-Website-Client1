import Image from "next/image";
import Link from "next/link";

const nearby = [
  { place: "Abbey Falls", distance: "9 km" },
  { place: "Raja's Seat", distance: "6 km" },
  { place: "Dubare Elephant Camp", distance: "32 km" },
  { place: "Mysuru Airport", distance: "120 km" },
];

const Vision = () => {
  return (
    <section id="vision" className="w-full bg-[#1F2A22] px-5 pb-24 pt-[8vh] text-[#EEF0EA]">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="text-center font-[family-name:var(--font-inter)] text-xs uppercase tracking-[0.2em] text-[#EEF0EA]/60"
      >
        <Link href="/" className="transition-colors hover:text-[#8A6A3B]">
          Home
        </Link>
        <span className="mx-3">/</span>
        <span className="text-[#8A6A3B]">The Vision</span>
      </nav>

      <div className="mx-auto mt-12 w-full text-center">
        {/* Heading with straight lines on both sides */}
        <div className="flex items-center justify-center gap-5 md:gap-8">
          <div className="h-px w-16 bg-[#8A6A3B] md:w-48" />
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold uppercase tracking-[0.25em] text-[#EEF0EA] md:text-5xl">
            The Vision
          </h2>
          <div className="h-px w-16 bg-[#8A6A3B] md:w-48" />
        </div>

        {/* Tagline */}
        <h3 className="mt-6 font-[family-name:var(--font-cormorant)] text-4xl leading-tight text-[#8A6A3B] md:text-7xl">
          A Quiet Future for the Land and the Water
        </h3>

        {/* 1px line */}
        <div className="mx-auto mt-10 h-px w-full bg-[#8A6A3B]" />

        {/* Rooms: today, then planned */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 font-[family-name:var(--font-cormorant)] md:flex-row md:gap-10">
          <div>
            <p className="text-4xl leading-none text-[#EEF0EA] md:text-5xl">6</p>
            <p className="mt-2 font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.25em] text-[#EEF0EA]/70">
              Rooms today
            </p>
          </div>

          <span
            aria-hidden="true"
            className="font-[family-name:var(--font-inter)] text-2xl text-[#8A6A3B] md:text-3xl"
          >
            &rarr;
          </span>

          <div>
            <p className="text-4xl leading-none text-[#8A6A3B] md:text-5xl">12</p>
            <p className="mt-2 font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.25em] text-[#EEF0EA]/70">
              Rooms planned
            </p>
          </div>
        </div>

        {/* Body */}
                {/* Body */}
        <div className="mx-auto mt-10 w-3/4 space-y-6 font-[family-name:var(--font-inter)] text-base leading-relaxed text-[#EEF0EA]/80 md:text-lg">
          <p>
            For a century, this land has been shaped by slow seasons, morning
            mist, and the steady flow of water along the east boundary. Our
            vision is to keep that rhythm intact. We want to protect the canal,
            the bungalow, and the open ground, and pass them on in better
            condition than we found them.
          </p>
          <p>
            The estate stands at 1,100 metres in the hills of Madikeri, in
            Kodagu. Mist settles over the land from June to February. The air
            stays cool, and the mornings are slow.
          </p>
          <p>
            The family keeps ownership of the land. The partner would run a
            twelve-room boutique stay, either as an operator who manages it
            day to day or as an investor who funds it. Every room will be
            planned with care, so guests can enter the rhythm of the land
            without changing it.
          </p>
          <p>
            We are looking for a partner who understands that some things
            should move slowly. Together, we want to restore what needs care,
            welcome guests with the same calm hospitality, and build something
            that will still feel right in another generation.
          </p>
        </div>

        {/* Nearby places */}
        <div className="mt-16">
          <p className="font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.25em] text-[#EEF0EA]/60">
            Nearby
          </p>
          <ul className="mx-auto mt-6 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
            {nearby.map((item) => (
              <li key={item.place}>
                <p className="font-[family-name:var(--font-cormorant)] text-2xl text-[#EEF0EA]">
                  {item.distance}
                </p>
                <p className="mt-2 font-[family-name:var(--font-inter)] text-xs uppercase tracking-[0.15em] text-[#8A6A3B]/70">
                  {item.place}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Image, same proportions as the Estate page */}
      <figure className="mt-16">
        <div className="relative aspect-[5/6] w-full overflow-hidden md:aspect-[19/10]">
          <Image
            src="/images/pexels-renjith-tomy-pkm-138432405-10821527.jpg"
            alt="A guest room at Silver Holem with soft light and wooden furnishings"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <figcaption className="mt-4 text-center font-[family-name:var(--font-inter)] text-xs uppercase tracking-[0.25em] text-[#EEF0EA]/60">
          A room at Silver Holme
        </figcaption>
      </figure>
      <div className="mx-auto mt-20 h-px w-full bg-[#8A6A3B]" />
    </section>
  );
};

export default Vision;