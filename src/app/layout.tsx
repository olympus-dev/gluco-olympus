import type { Metadata } from "next";
import "./globals.css";

import { Konkhmer_Sleokchher, Montserrat } from "next/font/google";
import { Header } from "@/components/header";

const montserrat = Montserrat({ subsets: ["latin"] });
export const konkhmerSleokchher = Konkhmer_Sleokchher({
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
    <html lang="en">
      <body
        className={`${montserrat.className}} ${konkhmerSleokchher.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
