"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function WishesSection() {
  const [wishes, setWishes] = useState([
    { name: "Aisyah", message: "Congratulations! Wishing you endless happiness 💕" },
    { name: "Fajar", message: "May Allah bless your marriage with love and barakah." },
  ]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleAddWish = () => {
    if (name && message) {
      setWishes([...wishes, { name, message }]);
      setName("");
      setMessage("");
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-12 bg-[#E2E0D8]">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-[Ayuthaya] text-[#374D37] mb-6"
      >
        Wishes
      </motion.h2>

      {/* Wishes List */}
      <div className="w-full max-w-md h-64 overflow-y-auto bg-white rounded-xl shadow-md p-4 mb-6">
        {wishes.map((wish, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-left mb-4 border-b border-[#E2E0D8] pb-2"
          >
            <p className="font-bold text-[#374D37]">{wish.name}</p>
            <p className="text-sm text-[#636361]">{wish.message}</p>
          </motion.div>
        ))}
      </div>

      {/* Input Form */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-4">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-[#D5D3CA] rounded-md px-3 py-2 mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#374D37]"
        />
        <textarea
          placeholder="Write your wish..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-[#D5D3CA] rounded-md px-3 py-2 mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#374D37]"
        />
        <button
          onClick={handleAddWish}
          className="w-full bg-[#374D37] text-[#E2E0D8] py-2 rounded-md hover:bg-[#2b3c2b] transition"
        >
          Send Wish
        </button>
      </div>
    </section>
  );
}
