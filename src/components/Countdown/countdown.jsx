"use client";
import { useEffect, useState } from "react";

const Countdown = ({ date }) => {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const target = new Date(date).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setTimeLeft(null);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [date]);

  return (
    <section className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Menuju Hari Bahagia</h2>
      {timeLeft ? (
        <div className="flex justify-center gap-4">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div
              key={label}
              className="bg-pink-200 w-20 h-20 flex flex-col justify-center items-center rounded-xl shadow"
            >
              <span className="text-2xl font-bold">{value}</span>
              <p className="text-sm capitalize">{label}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-xl font-semibold text-pink-600 mt-4">
          🎉 Hari Bahagia Telah Tiba! 🎉
        </p>
      )}
    </section>
  );
};
export default Countdown;
