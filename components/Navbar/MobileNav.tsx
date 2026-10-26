"use client";

import Link from "next/link";
import { NAVLINKS } from "@/constant/Constant";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  return (
    <div
      id="mobile-menu"
      inert={!showNav}
      className={`fixed inset-x-0 top-[64px] sm:top-[72px] z-[1002] border-t border-[#EEF0EA]/20 bg-[#1F2A22]/40 px-7 pb-8 pt-4 shadow-[0_8px_32px_rgba(31,42,34,0.35)] backdrop-blur-xl backdrop-saturate-150 transition-[opacity,transform,visibility] duration-300 ease-out lg:hidden ${
        showNav
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-3 opacity-0"
      }`}
    >
      {/* Soft highlight along the top edge for the glass effect */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#EEF0EA]/40 to-transparent" />

      <nav className="flex flex-col">
        {NAVLINKS.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            onClick={closeNav}
            className="py-4 font-[family-name:var(--font-cormorant)] text-lg uppercase tracking-[0.2em] text-[#EEF0EA] transition-colors hover:text-[#8A6A3B]"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Link
        href="/#contact"
        onClick={closeNav}
        className="mt-8 block w-full bg-[#8A6A3B]/90 px-6 py-4 text-center font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.2em] text-[#EEF0EA] shadow-[inset_0_1px_0_rgba(238,240,234,0.25)] backdrop-blur-sm transition-colors hover:bg-[#5B3A29]"
      >
        Partner With Us
      </Link>
    </div>
  );
};

export default MobileNav;