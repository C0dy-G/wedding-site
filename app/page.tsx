"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeImageOpacity = Math.max(1 - scrollY / 300, 0);
  const fadeFormOpacity = Math.min(scrollY / 300, 1);

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      {/* Header text (fixed on top) */}
      <div className="fixed top-20 w-full flex flex-col items-center z-20 pointer-events-none">
        <div className="bg-white/80 rounded-xl px-8 py-4 shadow pointer-events-auto">
          <h1
            className="text-4xl md:text-5xl font-bold text-[#155703] text-center"
            style={{ fontFamily: "'Poiret One', cursive" }}
          >
            Alyssa & Cody
          </h1>
          <h2
            className="text-xl md:text-2xl font-medium text-[#155703] mt-2 text-center"
            style={{ fontFamily: "'Poiret One', cursive" }}
          >
            October 16, 2025 · San Francisco City Hall
          </h2>
        </div>
      </div>

      {/* Image background (scrolls & fades out) */}
      <motion.div
        className="h-screen w-full bg-cover bg-center"
        style={{
          backgroundImage: `url("/sfCityHallBlueprint.jpg")`,
          opacity: fadeImageOpacity,
          marginTop: "60px", // soft margin under the fixed header
        }}
        initial={{ opacity: 1 }}
        animate={{ opacity: fadeImageOpacity }}
        transition={{ duration: 0.3 }}
      />

      {/* RSVP form fades in */}
      <motion.div
        className="py-12 px-6 flex flex-col items-center bg-white relative z-10 -mt-[25vh] pt-[120px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: fadeFormOpacity }}
        transition={{ duration: 0.3 }}
      >
        <h2
          className="text-3xl font-semibold text-[#155703] mb-6 mt-4"
          style={{ fontFamily: "'Poiret One', cursive" }}
        >
          RSVP to Our Wedding
        </h2>

        <div className="w-full max-w-2xl">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScbZi0cyhDrNKK4bv2IMj7RCskFyTP4K_38l-VeDTHvMoDHlw/viewform?embedded=true"
            width="100%"
            height="946"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="rounded-lg border border-gray-200 shadow-md"
          >
            Loading…
          </iframe>
        </div>
      </motion.div>
    </div>
  );
}
