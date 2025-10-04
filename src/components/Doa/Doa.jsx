"use client";
import { motion } from "framer-motion";

export default function DoaSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-12 bg-[#F8F7F3]">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-[Ayuthaya] text-[#374D37] mb-6"
      >
        Doa
      </motion.h2>

      {/* Arabic Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-2xl md:text-3xl font-[Scheherazade] text-[#374D37] leading-loose mb-6"
      >
        بَارَكَ اللهُ لَكُما وَبَارَكَ عَلَيْكُما وَجَمَعَ بَيْنَكُما فِي خَيْرٍ
      </motion.p>

      {/* Translation */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="max-w-xl text-base md:text-lg font-[Philosopher] text-[#636361] leading-relaxed"
      >
        “May Allah bless you both and shower His blessings upon you,  
        and may He bring you together in goodness.”
      </motion.p>
    </section>
  );
}
