"use client";
import { motion } from "framer-motion";

export default function Closing() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-12 bg-[#374D37] text-[#E2E0D8]">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-[Ayuthaya] mb-6"
      >
        Thank You
      </motion.h2>

      {/* Closing Message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-w-xl text-lg md:text-xl leading-relaxed font-[Philosopher] mb-10"
      >
        With deep gratitude and joy, we thank you for being part of our special
        day.  
        Your presence, prayers, and love mean the world to us.
      </motion.p>

      {/* Names */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="font-[Gardena] text-2xl md:text-3xl tracking-wide"
      >
        Akmal Nuriksan <br /> & <br /> Marisa Mutie Pratiwi
      </motion.div>

      {/* Divider / Ornament */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="mt-10 w-16 h-1 bg-[#E2E0D8] rounded-full"
      />

      {/* Footer Note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="mt-8 text-sm md:text-base text-[#D5D3CA]"
      >
        We look forward to celebrating this sacred moment with you 🌿
      </motion.p>
    </section>
  );
}
