"use client"

import { Container } from "@/components/container";
import { VslSection } from "./_components/vsl-section";
import Head from "next/head";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { BottomBadge } from "@/components/digi-badge/bottom-badge";
import { TopBadge } from "@/components/digi-badge/top-badge";
import MainProductsLoader from "@/utils/main-products-script";

export default function VslPage() {
  return (
    <>
      <MainProductsLoader/>
      <Head>
        <link
          rel="preload"
          href="https://scripts.converteai.net/bbdb9907-ae9e-49fa-8d8b-b1d3886ec07c/players/673649b32eb080000b6d8a8c/player.js"
          as="script"
        />
        <link
          rel="preload"
          href="https://scripts.converteai.net/lib/js/smartplayer/v1/smartplayer.min.js"
          as="script"
        />
        <link
          rel="preload"
          href="https://images.converteai.net/bbdb9907-ae9e-49fa-8d8b-b1d3886ec07c/players/673649b32eb080000b6d8a8c/thumbnail.jpg"
          as="image"
        />
        <link
          rel="preload"
          href="https://cdn.converteai.net/bbdb9907-ae9e-49fa-8d8b-b1d3886ec07c/67364879dc7073000cacf2e6/main.m3u8"
          as="fetch"
        />
        <link rel="dns-prefetch" href="https://cdn.converteai.net" />
        <link rel="dns-prefetch" href="https://scripts.converteai.net" />
        <link rel="dns-prefetch" href="https://images.converteai.net" />
        <link rel="dns-prefetch" href="https://api.vturb.com.br" />
      </Head>
      <main
        className="pt-12 bg-repeat-round bg-fixed
      lg:bg-contain"
        style={{ backgroundImage: 'url("/bg.png")' }}
      >
        <VslSection />
      </main>
      {/* Footer */}
      <div className="bg-gradient-to-b from-[#020817] to-[#03001E] text-white pt-8">
        <Container>
          <Footer />
        </Container>
        <div className="text-center py-8 relative">
          <div className="px-8">
            <p className="text-sm text-gray-400 max-w-2xl mb-4 mx-auto">
              Disclaimer: This official website is the only authorized place to
              purchase Gluco Guardian! We are not responsible for purchases made from
              unknown and unreliable sites. Avoid piracy and cheap, illegal
              imitations.
            </p>

            <p className="text-sm text-gray-400">
              Copyright © 2023,{" "}
              <Link href="/" className="text-[#3B82F6] hover:text-[#60A5FA]">
                Gluco Guardian
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
      {/* End Footer */}
      <TopBadge />
      <BottomBadge />
    </>
  );
}
