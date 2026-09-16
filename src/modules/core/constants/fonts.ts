import { Geist, Geist_Mono, Vazirmatn } from "next/font/google";

export const geistSansFont = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMonoFont = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const vazirmatnFont = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"],
});
