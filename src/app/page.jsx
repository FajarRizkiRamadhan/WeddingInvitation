"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Cover from "@/components/Cover";
import WeddingCard from "@/components/WeddingCard";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="relative h-screen w-full overflow-hidden">
      {/* Background tetap dengan tombol Open Invitation */}
      <Cover onOpen={() => setIsOpen(true)} />

      {/* Card isi undangan */}
      <AnimatePresence>
        {isOpen && <WeddingCard onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </main>
  );
}
