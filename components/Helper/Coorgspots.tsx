import Image from "next/image";

const spots = [
  {
    name: "Abbey Falls",
    distance: "9 km from the estate",
    note: "A waterfall set among coffee estates and tall trees. The path down is short and shaded.",
    url: "https://karnatakatourism.org/en/experiences/abbey-falls-experience/",
    image: "/images/priyanka-neve-5689xaWKL8k-unsplash.jpg",
    alt: "Abbey Falls, a waterfall over dark rock surrounded by forest",
  },
  {
    name: "Raja's Seat",
    distance: "6 km from the estate",
    note: "A viewpoint above Madikeri. Visitors come at sunset to watch the valleys fill with mist.",
    url: "https://www.trawell.in/karnataka/coorg/rajas-seat",
    image: "/images/praswin-prakashan--9lSetEgtjo-unsplash.jpg",
    alt: "Misty green hills and forest above the Coorg valleys",
  },
  {
    name: "Dubare Elephant Camp",
    distance: "32 km from the estate",
    note: "A camp on the banks of the Cauvery river, where elephants are bathed and fed. Book ahead.",
    url: "https://www.coorgtourisminfo.com/dubare-elephant-camp",
    image: "/images/pexels-babyblade-biker-2147876301-32702785.jpg",
    alt: "Misty green hills and forest above the Coorg valleys",
  },
  {
    name: "Madikeri Fort",
    distance: "In Madikeri town",
    note: "A hilltop fort built in the 1700s, with a clock tower and a view over the town.",
    url: "https://en.wikipedia.org/wiki/Madikeri_Fort",
    image: "/images/pexels-logalongwithme-36568503.jpg",
    alt: "Misty green hills and forest above the Coorg valleys",
  },
];

const CoorgSpots = () => {
  return (
    <ul className="space-y-12">
      {spots.map((spot, i) => {
        const imageFirst = i % 2 === 0;

        return (
          <li
            key={spot.name}
            className={`flex flex-col gap-6 border-b border-[#EEF0EA]/20 pb-12 md:items-center md:gap-10 ${
              imageFirst ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden md:w-1/2">
              <Image
                src={spot.image}
                alt={spot.alt}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="w-full md:w-1/2">
              <p className="font-[family-name:var(--font-inter)] text-xs font-bold uppercase tracking-[0.25em] text-[#8A6A3B]">
                {spot.distance}
              </p>
              <h4 className="mt-3 font-[family-name:var(--font-cormorant)] text-3xl leading-tight text-[#EEF0EA] md:text-4xl">
                {spot.name}
              </h4>
              <p className="mt-4 font-[family-name:var(--font-inter)] font-light leading-relaxed text-[#EEF0EA]/80">
                {spot.note}
              </p>
              <a
                href={spot.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block border border-[#8A6A3B] px-6 py-2.5 font-[family-name:var(--font-inter)] text-xs uppercase tracking-[0.25em] text-[#EEF0EA] transition-colors hover:bg-[#8A6A3B] hover:text-[#EEF0EA]"
              >
                Read more  ↗
              </a>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CoorgSpots;