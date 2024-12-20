import { Container } from "@/components/container";
import { OrderButton } from "@/components/order-button";
import {
  BenefitsSection,
  ComparationSection,
  FormulaSection,
  Guarantee,
  SocialProofSection,
} from "@/components/sections";
import CheckoutSection from "@/components/sections/checkout";
import CheckoutDesktop from "@/components/sections/checkout/_components/content-desktop";
import { FAQ } from "@/components/sections/faq";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { ItemProps } from "../checkout/_components/content-items";
import Image from "next/image";
import { BottomBadge } from "@/components/digi-badge/bottom-badge";
import { TopBadge } from "@/components/digi-badge/top-badge";

interface IDtcProps {
  withFooter?: boolean;
}

export default function Dtc({ withFooter = true }: IDtcProps) {
  const images: string[] = ["3-bottles.png", "6-bottles.png", "1-bottle.png"];
  const onePurchaseLinks: string[] = [
    "https://www.checkout-ds24.com/product/581467", // 3 bottles
    "https://www.checkout-ds24.com/product/581468", // 6 bottles
    "https://www.checkout-ds24.com/product/581466", // 1 bottles
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
      <div id="portal"></div>
      <main
        className="bg-repeat-round bg-fixed
      lg:bg-contain"
        style={{ backgroundImage: 'url("/bg.png")' }}
      >
        <div className="bg-background pb-4" id="checkout">
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

        <Container className="text-white py-8">
          <BenefitsSection />
        </Container>

        <div
          className="bg-background top-0 bottom-0 left-0 right-0"
          id="formula"
        >
          <Container className="pt-20 pb-10">
            <FormulaSection />
          </Container>
        </div>

        <div className="bg-background top-0 bottom-0 left-0 right-0">
          <Container
            className="text-white pb-8 overflow-hidden 
      lg:py-4 lg:pb-12"
          >
            <ComparationSection />
          </Container>
        </div>

        <div
          className="text-white pt-12 pb-8 overflow-hidden
      lg:py-8 lg:pt-10"
        >
          <SocialProofSection />
        </div>

        <Container className="text-white py-8">
          <Guarantee />
        </Container>

        <div className="w-full flex justify-center pb-12">
          <OrderButton />
        </div>

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
        {withFooter && (
          <div className="text-white pt-8">
            <Container>
              <Footer />
            </Container>
            <div className="text-center bg-[#020817] py-8 relative">
              <div className="px-8">
                <p className="text-sm text-gray-400 max-w-2xl mb-4 mx-auto">
                  Disclaimer: This official website is the only authorized place
                  to purchase Endoterec! We are not responsible for purchases
                  made from unknown and unreliable sites. Avoid piracy and
                  cheap, illegal imitations.
                </p>

                <p className="text-sm text-gray-400">
                  Copyright © 2023,{" "}
                  <Link
                    href="/"
                    className="text-[#3B82F6] hover:text-[#60A5FA]"
                  >
                    Endoterec
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="text-black">
            <TopBadge />
            <BottomBadge />
            </div>
          </div>
        )}
      </main>
    </>
  );
}
