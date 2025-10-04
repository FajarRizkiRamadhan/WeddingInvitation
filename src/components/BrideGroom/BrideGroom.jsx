"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BrideGroom() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#E2E0D8] px-6 py-12">
      <h2 className="text-2xl md:text-3xl text-[#374D37] font-philosopher mb-12">
        Bride & Groom
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        {/* Groom */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <Image
            src="/groom.jpg"
            alt="Groom"
            width={250}
            height={250}
            className="rounded-full shadow-lg mx-auto mb-4"
          />
          <h3 className="text-3xl md:text-4xl text-[#374D37] font-gardena">
            Akmal Nuriksan
          </h3>
          <p className="mt-2 text-sm md:text-base text-[#636361] font-philosopher">
            Putra dari Bapak Ahmad & Ibu Siti
          </p>
        </motion.div>

        {/* Bride */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <Image
            src="/bride.jpg"
            alt="Bride"
            width={250}
            height={250}
            className="rounded-full shadow-lg mx-auto mb-4"
          />
          <h3 className="text-3xl md:text-4xl text-[#374D37] font-gardena">
            Marisa Mutie Pratiwi
          </h3>
          <p className="mt-2 text-sm md:text-base text-[#636361] font-philosopher">
            Putri dari Bapak Yusuf & Ibu Aminah
          </p>
        </motion.div>
      </div>
    </div>
  );
}
