"use client";
import { motion } from "framer-motion";

export default function Filter() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-12 bg-[#374D37]">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-[Ayuthaya] text-[#E2E0D8] mb-4"
      >
        Wedding Filter
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-md text-base md:text-lg font-[Philosopher] text-[#E2E0D8] leading-relaxed mb-6"
      >
        Capture your moments with our personalized wedding filter.  
        Add love to your photos and share the happiness.
      </motion.p>

      {/* Filter Preview Box */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-[220px] h-[340px] rounded-xl bg-[#E2E0D8] flex flex-col justify-center items-center shadow-lg relative overflow-hidden"
      >
        <span className="absolute top-3 left-3 text-xs font-[Philosopher] text-[#374D37]">
          #AkmalMarisaWedding
        </span>
        <span className="absolute bottom-3 text-sm font-[Gardena] text-[#374D37]">
          02.11.2025
        </span>
        <div className="flex flex-col justify-center items-center">
          <p className="font-[Zapfino] text-[#374D37] text-lg">Akmal & Marisa</p>
          <p className="font-[Philosopher] text-[#636361] text-xs">
            Filter Preview
          </p>
        </div>
      </motion.div>

      {/* Button Use Filter */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.2 }}
        className="mt-6 px-6 py-2 bg-[#E2E0D8] text-[#374D37] rounded-xl shadow-md 
                   font-[Gardena] text-sm tracking-wide"
      >
        Use Filter
      </motion.button>
    </section>
  );
}
