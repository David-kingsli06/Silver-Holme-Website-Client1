"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { CgClose } from "react-icons/cg";
import { NAVLINKS } from "@/constant/Constant";

type Props = {
  showNav: boolean;
  openNav: () => void;
  closeNav: () => void;
};

const Nav = ({ showNav, openNav, closeNav }: Props) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on Escape and stop the page scrolling behind the open menu
  useEffect(() => {
    if (!showNav) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeNav();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [showNav, closeNav]);

  const toggleNav = () => (showNav ? closeNav() : openNav());

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[1001] h-[64px] w-full border-b transition-all duration-300 sm:h-[72px] lg:h-[12vh] ${
        scrolled || showNav
          ? "border-white/10 bg-[#1F2A22]/90 shadow-md backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full w-[90%] items-center justify-between xl:w-[80%]">
        <Link
          href="/#hero"
          onClick={closeNav}
          className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold uppercase tracking-[0.2em] text-[#EEF0EA]"
        >
          Silver Holme
        </Link>

        {/* Desktop links */}
        <nav aria-label="Main" className="hidden items-center gap-10 lg:flex">
          {NAVLINKS.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="font-[family-name:var(--font-inter)] text-xs font-medium uppercase tracking-[0.25em] text-[#EEF0EA] transition-colors duration-200 hover:text-[#8A6A3B]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Desktop CTA */}
          <Link
            href="/#contact"
            className="hidden rounded-none bg-[#8A6A3B] px-5 py-3 font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.2em] text-[#EEF0EA] transition-colors duration-200 hover:bg-[#5B3A29] lg:block"
          >
            Partner With Us
          </Link>

          {/* Hamburger / close toggle (below lg) */}
          <button
            type="button"
            onClick={toggleNav}
            aria-label={showNav ? "Close menu" : "Open menu"}
            aria-expanded={showNav}
            aria-controls="mobile-menu"
             className="flex h-12 w-12 cursor-pointer items-center justify-center bg-[#8A6A3B] text-[#EEF0EA] transition-colors duration-200 hover:bg-[#5B3A29] lg:hidden"
          >
            {showNav ? (
              <CgClose className="h-6 w-6" />
            ) : (
              <HiBars3BottomRight className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nav;