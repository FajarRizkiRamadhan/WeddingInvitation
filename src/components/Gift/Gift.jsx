"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GiftSection() {
  const [showGift, setShowGift] = useState(false);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-12 bg-[#E2E0D8]">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-[Ayuthaya] text-[#374D37] mb-4"
      >
        Gift of Love
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-md text-base md:text-lg font-[Philosopher] text-[#636361] leading-relaxed mb-6"
      >
        Your presence is the greatest gift of all.  
        But if you wish to honor us with a gift,  
        we would gratefully receive your kind contribution.
      </motion.p>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowGift(true)}
        className="px-6 py-3 bg-[#374D37] text-[#E2E0D8] rounded-xl shadow-lg font-[Gardena] tracking-wide"
      >
        Virtual Gift
      </motion.button>

      {/* Modal for Account Info */}
      <AnimatePresence>
        {showGift && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
            onClick={() => setShowGift(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-6 w-80 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-[Ayuthaya] text-[#374D37] mb-4">
                Bank Transfer
              </h3>
              <p className="text-sm font-[Philosopher] text-[#636361] mb-2">
                BCA – Akmal Nuriksan
              </p>
              <p className="text-xl font-bold tracking-wider text-[#374D37] mb-4">
                1234 5678 9012
              </p>
              <button
                onClick={() => setShowGift(false)}
                className="mt-2 px-4 py-2 bg-[#374D37] text-[#E2E0D8] rounded-lg font-[Gardena]"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
