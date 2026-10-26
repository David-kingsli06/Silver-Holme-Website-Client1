import Image from "next/image";
import Link from "next/link";

const keyFeatures = [
  "22 acres of private land",
  "A private canal with still green water",
  "Six rooms today",
  "Three generations of care",
];

export default function SilverHolem() {
  return (
    <main className="bg-[#1F2A22] text-[#EEF0EA]">
      <section className="w-full px-5 pb-24 pt-[16vh]" id="silverholme">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="text-center font-[family-name:var(--font-inter)] text-xs uppercase tracking-[0.2em] text-[#EEF0EA]/60"
        >
          <Link href="/" className="transition-colors hover:text-[#8A6A3B]">
            Home
          </Link>
          <span className="mx-3">/</span>
          <span className="text-[#8A6A3B]">The Estate</span>
        </nav>

        <div className="mx-auto mt-12 w-full text-center">
          {/* Heading with straight lines on both sides */}
          <div className="flex items-center justify-center gap-5 md:gap-8">
            <div className="h-px w-16 bg-[#8A6A3B] md:w-48" />
            <h1 className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold uppercase tracking-[0.25em] text-[#EEF0EA] md:text-5xl">
              Silver Holme
            </h1>
            <div className="h-px w-16 bg-[#8A6A3B] md:w-48" />
          </div>

          {/* Large tagline */}
          <p className="mt-6 font-[family-name:var(--font-cormorant)] text-4xl leading-tight text-[#8A6A3B] md:text-7xl">
            Mist-Kissed Lands and Private Waters
          </p>

          {/* 1px line */}
          <div className="mx-auto mt-10 h-px w-full bg-[#8A6A3B]" />

          {/* Story of the estate */}
          <div data-aos="fade-out" className="mx-auto mt-15 space-y-6 font-[family-name:var(--font-inter)] text-base leading-relaxed text-[#EEF0EA]/80 md:text-lg">
            <p>
              In 1924, a planter climbed into the hills of Madikeri and chose a
              place to build his life. He laid red-oxide floors, roofed his
              home with Mangalore tiles, and built it to last. Nearly a century
              later, the bungalow still stands, and every room still holds the
              quiet of the hills.
            </p>
            <p>
              Three generations have lived here, each shaping the land in their
              own way. Coffee and black pepper grow beneath the silver oak, in
              soil the family has tended for decades. Each June, the mist rolls
              over the hills and settles in the valleys, staying until February,
              and the estate wakes to it every morning.
            </p>
            <p>
              Water moves quietly along the east boundary, as it has for a
              century, carrying the calm of the land past every window.
              <br className="hidden md:block" />
              The family will keep the land. They are looking for a partner to
              share it.
            </p>
          </div>

          {/* Key features */}
          <h2 className="mt-16 font-[family-name:var(--font-cormorant)] text-2xl text-[#8A6A3B] md:text-3xl">
            Key features
          </h2>
          <ul className="mt-6 flex flex-col items-center font-[family-name:var(--font-inter)] text-sm text-[#EEF0EA]/80 md:text-base">
            {keyFeatures.map((feature) => (
              <li
                key={feature}
                className="w-fit border-b border-[#8A6A3B]/60 py-4"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Estate image, placed below the key features */}
        <div 
        data-aos="fade-out"
        className="relative mt-26 aspect-[5/6] w-full overflow-hidden md:aspect-[19/10]">
          <Image
            src="/images/anton-ryazanov-jnHnIN8pmHA-unsplash.jpg"
            alt="The private canal with white ducks, still green water, and cottages beyond"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="mx-auto mt-30 h-px w-full bg-[#8A6A3B]" />
      </section>
    </main>
  );
}