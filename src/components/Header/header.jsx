"use client";
import { useSearchParams } from "next/navigation";

const Header = ({ couple }) => {
  const searchParams = useSearchParams();
  const guest = searchParams.get("to") || "Tamu Undangan";

  return (
    <section className="p-10 text-center bg-pink-100 rounded-b-2xl shadow-md">
      <h1 className="text-4xl font-bold">{couple}</h1>
      <p className="mt-2 text-lg italic">Kepada Yth. {guest}</p>
      <p className="mt-4">
        Dengan penuh rasa syukur, kami mengundang Anda untuk hadir dalam acara
        pernikahan kami.
      </p>
    </section>
  );
};
export default Header;
