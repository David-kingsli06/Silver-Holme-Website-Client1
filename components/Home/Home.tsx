"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "./Hero/Hero";
import SilverHolem from "./TheSilverHolme/SilverHolme";
import Vision from "./Vision/Vision";
import Gallery from "./Gallery/Gallery";
import Coorg from "./Coorg/Coorg";
import PartnerWithUS from "./PartnerWithUs/PartnerWithUs";

export default function Home() {
 useEffect(()=>{
      const initAOS= async () => {
        await import("aos");
        AOS.init({
          duration: 1000,
          easing: "ease",
          once: true,
          anchorPlacement: "top-bottom"
        });
      };
    initAOS();
  },[]);

  return (
    <div>
      <Hero />
      <SilverHolem />
      <Vision />
      <Gallery />
      <Coorg />
      <PartnerWithUS />
    </div>
  );
}