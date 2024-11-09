import type { Metadata } from "next";
import "./globals.css";

import { Konkhmer_Sleokchher, Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
const konkhmerSleokchher = Konkhmer_Sleokchher({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-konk",
});

export const metadata: Metadata = {
  title: "Endoterec©",
  description:
    "The Herbal Science Breakthrough to Maximize Men's Sexual Performance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.className}} ${konkhmerSleokchher.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
