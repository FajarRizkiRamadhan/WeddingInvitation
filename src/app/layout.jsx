"use client";

import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import "../styles/fonts.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en"
      >
      <body>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}

