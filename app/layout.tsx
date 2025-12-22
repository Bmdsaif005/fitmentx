import "./globals.css";
import Providers from "./providers";

import {
  Inter,
  Oswald,
  Playfair_Display,
  Montserrat,
  Roboto_Condensed,
} from "next/font/google";

/* =========================
   GLOBAL FONTS
========================= */

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`
        ${inter.variable}
        ${oswald.variable}
        ${playfair.variable}
        ${montserrat.variable}
        ${robotoCondensed.variable}
      `}
    >
      <body>
        {/* ✅ ALL CLIENT CONTEXTS */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
