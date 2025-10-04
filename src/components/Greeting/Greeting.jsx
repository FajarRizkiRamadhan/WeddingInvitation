"use client";
import { motion } from "framer-motion";

export default function Greeting() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#F5F4F0] px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-xl"
      >
        <h2 className="text-lg md:text-xl font-semibold text-[#374D37] mb-4 font-ayuthaya">
          Assalamu’alaikum Warahmatullahi Wabarakatuh
        </h2>
        <p className="text-sm md:text-base text-[#4A4A48] leading-relaxed">
          Dengan memohon Rahmat dan Ridho Allah SWT, 
          kami bermaksud menyelenggarakan pernikahan putra-putri kami.
        </p>
      </motion.div>
    </div>
  );
}
