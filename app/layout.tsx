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
  title: "10 Guaranteed Leads Month One | Artificial Ignorance",
  description:
    "One-eighth the cost of a real team. We pay for your Google ads, answer every call day and night, and book the jobs. At least 10 real leads in your first month — or that month is free.",
  openGraph: {
    title: "10 Leads. Month One. Guaranteed.",
    description:
      "£1,000/mo. We pay for your ads, answer every call, book your jobs. 10 leads in month one — or that month is free.",
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
