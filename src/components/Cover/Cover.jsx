"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Cover = ({ onOpen, guestName }) => {
  return (
    <section
      className="h-screen w-full bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: "url('/bg-cover.png')" }}
    >
      {/* Container gambar undangan */}
      <div className="relative">
        <Image
          src="/cover.jpg" // gambar undangan
          alt="Wedding Card"
          width={300}
          height={500}
          className="rounded-lg shadow-xl"
        />

        {/* Tombol open invitation (posisi di atas dalam gambar) */}
        <motion.button
          onClick={onOpen}
          className="absolute top-20 left-1/2 -translate-x-1/2 px-5 py-2 bg-[#374D37] text-[#E2E0D8] text-sm rounded-full shadow-lg hover:bg-[#3e6d6d] transition"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Open Invitation
        </motion.button>

        {/* Guest name (posisi di bawah dalam gambar) */}
        <motion.div
          className="absolute bottom-34 left-1/2 -translate-x-1/2 text-center text-[#E2E0D8]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <p className="font-ayuthaya text-lg">To our Honored Guest</p>
          <p className="font-gardena text-2xl">{guestName}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Cover;

