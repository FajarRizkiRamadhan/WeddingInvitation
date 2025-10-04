"use client";
import { motion } from "framer-motion";

export default function Quote() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#E2E0D8] px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center max-w-2xl"
      >
        <h2 className="text-2xl md:text-3xl text-[#374D37] leading-relaxed mb-6 font-zapfino">
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِّنْ أَنْفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوٓا
          إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ
          لِّقَوْمٍ يَتَفَكَّرُونَ
        </h2>
        <p className="text-sm md:text-base text-[#636361] italic font-philosopher">
          "And of His signs is that He created for you from yourselves mates
          that you may find tranquility in them; and He placed between you
          affection and mercy. Indeed in that are signs for a people who give
          thought."
          <br /> (Ar-Rum 30:21)
        </p>
      </motion.div>
    </div>
  );
}
