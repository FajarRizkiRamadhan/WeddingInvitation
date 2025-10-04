"use client";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import {
  Home,
  Heart,
  Quote,
  Users,
  Calendar,
  MapPin,
  Gift,
  Book,
  Star,
  MessageCircle,
  XCircle,
} from "lucide-react";

export default function Navbar() {
  const { currentPage, setCurrentPage, sections } = useContext(AppContext);

  // Daftar icon sesuai urutan section
  const icons = [
    Home,        // Opening
    Heart,       // Greetings
    Quote,       // Quote
    Users,       // Bride & Groom
    Calendar,    // Ceremony
    Calendar,    // Reception
    MapPin,      // Map
    Book,        // Our Journey
    Star,        // Filter
    Gift,        // Gift
    Heart,       // Doa
    MessageCircle, // Wishes
    XCircle,     // Closing
  ];

  // Ambil 4 item: current + 3 berikutnya
  const visibleSections = [];
  for (let i = 0; i < 4; i++) {
    visibleSections.push((currentPage + i) % sections.length);
  }

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-[#E2E0D8]/90 backdrop-blur-lg rounded-2xl px-4 py-2 flex space-x-6 shadow-lg transition-all duration-500">
      {visibleSections.map((pageIndex) => {
        const Icon = icons[pageIndex];
        return (
          <button
            key={pageIndex}
            onClick={() => setCurrentPage(pageIndex)}
            className={`flex flex-col items-center transition ${
              currentPage === pageIndex ? "text-[#374D37]" : "text-[#636361]"
            }`}
          >
            <Icon
              size={22}
              className={`mb-1 transition-transform ${
                currentPage === pageIndex ? "scale-110" : "opacity-70"
              }`}
            />
            <span
              className={`text-xs font-ayuthaya ${
                currentPage === pageIndex ? "font-bold" : ""
              }`}
            >
              {sections[pageIndex]}
            </span>
          </button>
        );
      })}
    </div>
  );
}

