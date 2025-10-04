"use client";
import { motion } from "framer-motion";

export default function Location() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center bg-[#E2E0D8] px-6 py-12 text-center">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl font-ayuthaya text-[#374D37] mb-6"
      >
        Location
      </motion.h2>

      {/* Deskripsi */}
      <p className="text-lg font-philosopher text-[#636361] mb-6">
        Join us in celebrating our special day at <br />
        <span className="font-bold text-[#374D37]">Rimba Alam Serpong</span>
      </p>

      {/* Google Maps Embed */}
      <div className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-lg border-4 border-[#374D37]/20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.123456789!2d106.650000!3d-6.250000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e123456789%3A0xabcdef123456789!2sRimba%20Alam%20Serpong!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Tombol buka di Google Maps */}
      <motion.a
        href="https://goo.gl/maps/XXXXXXX" // ganti dengan link real maps lokasi
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        className="mt-8 inline-block px-6 py-3 bg-[#374D37] text-white font-ayuthaya rounded-lg shadow-lg"
      >
        Open in Google Maps
      </motion.a>
    </section>
  );
}
