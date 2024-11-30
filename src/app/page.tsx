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
import { FAQ } from "@/components/sections/faq";
import Footer from "@/components/sections/footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
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
            <CheckoutSection />
            <CheckoutDesktop />
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
            <img
              src="science.png"
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
              <p className="text-sm text-gray-400 max-w-2xl mb-4 mx-auto">
                Disclaimer: This official website is the only authorized place
                to purchase Endoterec! We are not responsible for purchases made
                from unknown and unreliable sites. Avoid piracy and cheap,
                illegal imitations.
              </p>

              <p className="text-sm text-gray-400">
                Copyright © 2023,{" "}
                <Link href="/" className="text-[#3B82F6] hover:text-[#60A5FA]">
                  Endoterec
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
