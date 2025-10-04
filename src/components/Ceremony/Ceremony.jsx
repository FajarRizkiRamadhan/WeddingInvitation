"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function WeddingCeremony() {
  // Target date acara (contoh: 20 Oktober 2025 jam 09:00)
  const targetDate = new Date("2025-10-20T09:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Link Add to Calendar (Google)
  const addToGoogleCalendar = () => {
    const title = encodeURIComponent("Wedding Ceremony Akmal & Marisa");
    const start = "20251020T020000Z"; // UTC format
    const end = "20251020T050000Z"; // UTC format
    const details = encodeURIComponent("Wedding Ceremony (Family Only)");
    const location = encodeURIComponent("Masjid Agung, Bogor, Indonesia");

    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
    window.open(url, "_blank");
  };

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center bg-[#E2E0D8] px-6 py-12 text-center">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl font-ayuthaya text-[#374D37] mb-6"
      >
        Wedding Ceremony <span className="block text-sm text-[#636361]">(Family Only)</span>
      </motion.h2>

      {/* Waktu & Tempat */}
      <p className="text-lg font-philosopher text-[#636361]">
        Saturday, 02 November 2025 - 09:00 AM
      </p>
      <p className="text-md font-philosopher text-[#374D37] mt-2">
        Rimba Alam, Serpong, Indonesia
      </p>

      {/* Countdown */}
      <div className="flex gap-4 mt-8">
        {["days", "hours", "minutes", "seconds"].map((unit) => (
          <div
            key={unit}
            className="flex flex-col items-center bg-white/80 rounded-xl shadow-md px-4 py-3"
          >
            <span className="text-2xl font-bold text-[#374D37]">
              {/* {timeLeft[unit as keyof typeof timeLeft]} */}
            </span>
            <span className="text-xs text-[#636361] capitalize">{unit}</span>
          </div>
        ))}
      </div>

      {/* Add to Calendar */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={addToGoogleCalendar}
        className="mt-10 px-6 py-3 bg-[#374D37] text-white font-ayuthaya rounded-lg shadow-lg"
      >
        Add to Calendar
      </motion.button>
    </section>
  );
}
