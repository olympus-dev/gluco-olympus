import { Container } from "@/components/container";
import {
  BenefitsSection,
  ComparationSection,
  FormulaSection,
  HeroSection,
} from "@/components/sections";
import CheckoutSection from "@/components/sections/checkout";
import ContentDesktop from "@/components/sections/checkout/_components/content-desktop";
import { SocialProofSection } from "@/components/sections/social-proof";

export default function Home() {
  return (
    <main
      className="pt-16 bg-repeat-round bg-fixed
      lg:bg-contain"
      style={{ backgroundImage: 'url("bg.png")' }}
    >
      <Container className="drop-shadow-2xl text-white">
        <HeroSection />
      </Container>

      <div className="bg-background top-0 bottom-0 left-0 right-0">
        <Container className="py-8">
          <FormulaSection />
        </Container>
      </div>

      <Container className="text-white py-8">
        <BenefitsSection />
      </Container>

      <Container className="text-white pb-8 overflow-hidden 
      lg:py-4">
        <ComparationSection />
      </Container>

      <Container className="text-white pb-12 overflow-hidden
      lg:py-8">
        <SocialProofSection />
      </Container>

      <div className="bg-background top-0 bottom-0 left-0 right-0">
        <Container className="py-8">
          <CheckoutSection />
          <ContentDesktop />
        </Container>
      </div>
    </main>
  );
}
