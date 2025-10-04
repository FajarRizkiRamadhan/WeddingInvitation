import { motion } from "framer-motion";

export default function OurJourney() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-16 bg-[#E2E0D8]">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-[Ayuthaya] text-[#374D37] mb-6"
      >
        Our Journey
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="max-w-2xl text-lg md:text-xl font-[Philosopher] text-[#636361] leading-relaxed mb-10"
      >
        Every love story is unique, and ours is written with patience, trust, 
        and countless unforgettable moments. This is just the beginning of 
        our beautiful journey together, filled with dreams and everlasting love. 
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 bg-[#374D37] text-[#E2E0D8] rounded-2xl shadow-md 
                   font-[Gardena] text-lg tracking-wide"
      >
        Read
      </motion.button>
    </section>
  );
}
