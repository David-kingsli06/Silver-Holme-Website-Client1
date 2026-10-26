import PartnerForm from "@/components/Helper/PartnerForm";

const PartnerWithUS = () => {
  return (
    <main className="min-h-screen bg-[#1F2A22] text-[#EEF0EA]">
      <section className="mx-auto max-w-6xl px-6 pt-16 md:pt-32" id="contact">
         <div className="flex items-center justify-center gap-4 md:gap-8">
    <div className="h-px w-10 bg-[#8A6A3B] md:w-48" />
    <h2 className="text-center font-[family-name:var(--font-cormorant)] text-2xl font-semibold uppercase tracking-[0.15em] text-[#8A6A3B] md:text-5xl md:tracking-[0.25em]">
      Partner With US
    </h2>
    <div className="h-px w-10 bg-[#8A6A3B] md:w-48" />
  </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-16 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col">
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl font-semibold leading-tight text-[#8A6A3B] md:text-6xl">
  Let&apos;s build together
</h1>

          <div className="mt-5 space-y-5 font-[family-name:var(--font-inter)] text-base font-light leading-relaxed text-[#EEF0EA]">
            <p className="mt-10 max-w-xl font-[family-name:var(--font-inter)] text-base font-light leading-relaxed text-[#EEF0EA]">
  We invite thoughtful partners to help us shape a quiet hospitality stay in the Coorg hills. We are looking for investors, hospitality operators, designers, architects, and wellness brands who care about the land as much as we do. Together, we want to build a small destination of twelve rooms, where nature, rest, and considered design meet. The bungalow has stood here since 1924, and the family will keep the land. Our aim is a stay that feels rooted in its place, shaped with care rather than display. If you share this vision, tell us who you are and what you would bring to it. We read every message and will reply to you personally.
</p>
          </div>
        </div>

        <div className="border-t border-[#EEF0EA]/20 pt-10 md:border-l md:border-t-0 md:pl-16 md:pt-0">
          <PartnerForm />
        </div>
      </section>
      <div className="mx-auto mt-16 h-px w-full bg-[#8A6A3B]" />
    </main>
  );
};

export default PartnerWithUS;