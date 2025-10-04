/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#374D37",     // hijau tua
        secondary: "#E2E0D8",   // putih gading
        accent: "#DD53CA",      // ungu muda (aku ganti biar valid hex)
        dark: "#636361",        // abu/gelap
      },
      fontFamily: {
        ayuthaya: ["var(--font-ayuthaya)"],
        gardena: ["var(--font-gardena)"],
        zapfino: ["var(--font-zapfino)"],
        philosopher: ["var(--font-philosopher)"],
      },
    },
  },
  plugins: [],
};
