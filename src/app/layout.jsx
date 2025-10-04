// import "./globals.css";
// import localFont from "next/font/local";

// const atahaya = localFont({
//   src:"../../public/fonts/Atahaya-Regular.ttf",
//   variable: "--font-atahaya",
// });

// export const metadata = {
//   title: "Akmal & Marisa Wedding Invitation",
//   description: "Undangan pernikahan digital",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="id">
//       <body className={`${atahaya.variable} font-sans`}>
//         {children}
//       </body>
//     </html>
//   );
// }
"use client";

import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import { ayuthaya, gardena, zapfino, philosopher } from "@/styles/fonts";


export default function RootLayout({ children }) {
  return (
    <html lang="en"
         className={`
        ${ayuthaya.variable} 
        ${gardena.variable} 
        ${zapfino.variable} 
        ${philosopher.variable}
      `}
      >
      <body>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}

