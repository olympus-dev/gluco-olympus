"use client";

import { Container } from "@/components/container";
import { Header } from "@/components/header";
import {
  BenefitsSection,
  ComparationSection,
  FormulaSection,
  Guarantee,
  HeroSection,
  SocialProofSection,
} from "@/components/sections";
import CheckoutSection from "@/components/sections/checkout";
import CheckoutDesktop from "@/components/sections/checkout/_components/content-desktop";
import { ItemProps } from "@/components/sections/checkout/_components/content-items";
import { FAQ } from "@/components/sections/faq";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import Link from "next/link";
import MainPageLoader from "@/utils/main-products-script";
import { BgBadge } from "./_components/bg-badge";

export default function Home() {
  const images: string[] = ["3-bottles.png", "6-bottles.png", "1-bottle.png"];
  const onePurchaseLinks: string[] = [
    "https://buygoods.com/secure/checkout.html?account_id=9099&product_codename=glu3&redirect=aHR0cHM6Ly9nZXRnbHVjb2d1YXJkaWFuLmNvbS9vdG8xLw==", // 3 bottles
    "https://buygoods.com/secure/checkout.html?account_id=9099&product_codename=glu6&redirect=aHR0cHM6Ly9nZXRnbHVjb2d1YXJkaWFuLmNvbS9vdG8xLw==", // 6 bottles
    "https://buygoods.com/secure/checkout.html?account_id=9099&product_codename=glu1&redirect=aHR0cHM6Ly9nZXRnbHVjb2d1YXJkaWFuLmNvbS9vdG8xLw==", // 1 bottles
  ];
  const items: ItemProps[] = [
    {
      price: 59,
      total: 177,
      discount: 447,
      subscribeBottle: 54.28,
      subscribeTotal: 162.84,
      quantity: 3,
      bestWhat: "Most Popular",
      daysSupply: 90,
    },
    {
      price: 49,
      total: 294,
      discount: 894,
      subscribeBottle: 44.1,
      subscribeTotal: 264.6,
      quantity: 6,
      bestWhat: "Best Value",
      daysSupply: 180,
    },
    {
      price: 89,
      total: 89,
      discount: 149,
      subscribeBottle: 84.55,
      subscribeTotal: 84.55,
      quantity: 1,
      daysSupply: 30,
    },
  ];

  return (
    <>
      <MainPageLoader />
      <Header />
      <div id="portal"></div>
      <main
        className="pt-16 bg-repeat-round bg-fixed
      lg:bg-contain"
        style={{ backgroundImage: 'url("bg.png")' }}
      >
        <Container className="drop-shadow-2xl text-white">
          <HeroSection />
        </Container>

        <div
          className="bg-background top-0 bottom-0 left-0 right-0"
          id="formula"
        >
          <Container className="py-8">
            <FormulaSection />
          </Container>
        </div>

        <Container className="text-white py-8">
          <BenefitsSection />
        </Container>

        <Container
          className="text-white pb-8 overflow-hidden 
      lg:py-4"
        >
          <ComparationSection />
        </Container>

        <div className="text-white pb-8">
          <SocialProofSection />
        </div>

        <div className="bg-background pb-10" id="checkout">
          <Container className="py-8">
            <CheckoutSection
              images={images}
              items={items}
              onePurchaseLinks={onePurchaseLinks}
            />
            <CheckoutDesktop
              images={images}
              items={items}
              onePurchaseLinks={onePurchaseLinks}
            />
          </Container>
        </div>

        <Container
          className="text-white pb-12
      lg:py-8"
        >
          <Guarantee isLandingPage />
        </Container>

        <div className="bg-background pb-4" id="faq">
          <Container className="py-8">
            <FAQ />
          </Container>
        </div>

        <div className="bg-background pb-10">
          <Container>
            <Image
              src="/science.png"
              alt="Scientific Reference"
              loading="lazy"
              width={886}
              height={146}
              className="mx-auto w-[90%] sm:w-[746px]"
            />
          </Container>
        </div>
        <div className="text-white pt-8">
          <Container>
            <Footer />
          </Container>
          <div className="text-center bg-[#020817] py-8 relative">
            <div className="px-8">
              <p className="text-sm text-gray-400">
                Copyright © 2025,{" "}
                <Link href="/" className="text-[#3B82F6] hover:text-[#60A5FA]">
                  Gluco Guardian
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
        <BgBadge />
      </main>
    </>
  );
}
