"use client";
import { motion } from "framer-motion";

const Opening = ({ guestName }) => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/cover.jpg')" }} // ganti sesuai gambar background
    >
      {/* Overlay gelap hijau agar selaras dengan palette */}
      <div className="absolute inset-0 bg-[#374D37]/60" />

      <div className="relative z-10 px-4 text-[#E2E0D8]">
        {/* The Beginning Of */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-sm md:text-lg font-philosopher tracking-widest uppercase"
        >
          The Beginning Of
        </motion.p>

        {/* Nama Mempelai */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="text-4xl md:text-6xl font-gardena text-[#E2E0D8] mt-6"
        >
          Akmal
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-3xl md:text-5xl font-zapfino text-[#D53CA] mt-2"
        >
          &
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
          className="text-4xl md:text-6xl font-gardena text-[#E2E0D8] mt-2"
        >
          Marisa
        </motion.h1>

        {/* Guest Name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
          className="mt-10 text-lg md:text-2xl font-ayuthaya tracking-wide text-[#E2E0D8]"
        >
          To Our Honored <br />
          <span className="block text-xl md:text-3xl font-gardena text-[#E2E0D8]">
            {guestName}
          </span>
        </motion.p>
      </div>
    </section>
  );
};

export default Opening;
