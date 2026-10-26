import Link from "next/link";
import { NAVLINKS } from "@/constant/Constant";

const Footer = () => {
  return (
    <footer className="bg-[#1F2A22] px-6 py-16 text-[#EEF0EA] md:py-20">
      <div className="mx-auto flex w-[90%] flex-col items-center gap-10 text-center xl:w-[80%] lg:flex-row lg:items-start lg:justify-between lg:text-left">
        {/* Brand */}
        <div className="flex flex-col items-center gap-3 lg:items-start">
          <p className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold uppercase tracking-[0.2em]">
            Silver Holem
          </p>
          <p className="font-[family-name:var(--font-inter)] text-xs uppercase tracking-[0.25em] text-[#EEF0EA]/70">
            Madikeri, Coorg, Karnataka
          </p>
        </div>

        {/* Links */}
        <nav className="flex flex-col items-center gap-4" aria-label="Footer">
          {NAVLINKS.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="group relative py-1 font-[family-name:var(--font-inter)] text-xs font-medium uppercase tracking-[0.25em] text-[#EEF0EA]/85 transition-all duration-300 hover:translate-x-1 hover:text-[#EEF0EA] focus-visible:outline-none focus-visible:text-[#8A6A3B]"
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-[#8A6A3B] transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/#contact"
          className="group relative overflow-hidden bg-[#8A6A3B] px-5 py-3 font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.2em] text-[#EEF0EA] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5B3A29] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EEF0EA]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1F2A22]"
        >
          <span className="relative z-10">Partner With Us</span>
        </Link>
      </div>

      {/* Back to top, rule, and copyright */}
      <div className="mx-auto mt-12 flex w-[90%] flex-col items-center gap-6 border-t border-[#EEF0EA]/15 pt-6 xl:w-[80%] md:flex-row md:justify-between">
        <p className="font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.25em] text-[#EEF0EA]/50">
          © 2026 Silver Holem. All rights reserved.
        </p>

        <a
          href="#hero"
          className="group inline-flex items-center gap-2 font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.25em] text-[#EEF0EA]/60 transition-colors duration-300 hover:text-[#8A6A3B] focus-visible:outline-none focus-visible:text-[#8A6A3B]"
        >
          Back to top
          <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1">
            ↑
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;