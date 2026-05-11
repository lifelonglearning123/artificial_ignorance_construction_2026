import type { Metadata } from "next";
import {
  Archivo_Black,
  Big_Shoulders,
  IBM_Plex_Sans,
  IBM_Plex_Mono,
} from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  variable: "--font-archivo-black",
  subsets: ["latin"],
  display: "swap",
});

const bigShoulders = Big_Shoulders({
  weight: ["700", "800", "900"],
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "A Job A Day For Tradesmen | Artificial Ignorance",
  description:
    "Half the price of a PA. We pay for the Google ads, answer every call day and night, and book the jobs. A real job a day from week one — or you don't pay.",
  openGraph: {
    title: "A Job A Day. Starting Week One.",
    description:
      "£1,000/mo. We pay for your ads, answer every call, book your jobs. Or you don't pay.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${bigShoulders.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body className="min-h-screen bg-black text-bone selection:bg-hazard selection:text-black">
        {children}
      </body>
    </html>
  );
}
