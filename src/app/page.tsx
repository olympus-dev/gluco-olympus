import { Container } from "@/components/container";
import { BenefitsSection } from "@/components/sections/benefits";
import { FormulaSection } from "@/components/sections/formula";
import { HeroSection } from "@/components/sections/hero";

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
    </main>
  );
}
