"use client";
import { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { AppContext } from "@/context/AppContext";

import Opening from "@/components/Opening";
import Greetings from "@/components/Greeting";
import Quote from "@/components/Quote";
import BrideGroom from "@/components/BrideGroom";
import WeddingCeremony from "@/components/Ceremony";
import Reception from "@/components/Reception";
import MapSection from "@/components/Location";
import OurJourney from "@/components/OurJourney";
import FilterSection from "@/components/Filter";
import GiftSection from "@/components/Gift";
import DoaSection from "@/components/Doa";
import WishesSection from "@/components/Wishes";
import Closing from "@/components/Closing";
import Navbar from "@/components/Navbar";
import MusicPlayer from "@/components/MusicPlayer";

export default function WeddingCard() {
  const { currentPage, setCurrentPage, sections } = useContext(AppContext);

  // Auto slide setiap 15 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % sections.length);
    }, 15000);
    return () => clearInterval(timer);
  }, [sections.length, setCurrentPage]);

  return (
    <motion.div
      className="absolute inset-0 bg-white/90 backdrop-blur-md shadow-xl overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Section aktif */}
      <div className="w-full h-full overflow-hidden">
        {currentPage === 0 && <Opening />}
        {currentPage === 1 && <Greetings />}
        {currentPage === 2 && <Quote />}
        {currentPage === 3 && <BrideGroom />}
        {currentPage === 4 && <WeddingCeremony />}
        {currentPage === 5 && <Reception />}
        {currentPage === 6 && <MapSection />}
        {currentPage === 7 && <OurJourney />}
        {currentPage === 8 && <FilterSection />}
        {currentPage === 9 && <GiftSection />}
        {currentPage === 10 && <DoaSection />}
        {currentPage === 11 && <WishesSection />}
        {currentPage === 12 && <Closing />}
      </div>

      {/* Navbar tetap di bawah */}
      <Navbar />

      {/* Musik autoplay */}
      <MusicPlayer />
    </motion.div>
  );
}
