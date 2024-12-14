import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { HeroSection } from "./_sections/hero";
import { Promolinks } from "./_sections/promolinks";
import { DemoData } from "./_sections/demo-data";
import { AffiliatesNotes } from "./_sections/aff-note";

export default function AffiliatesPage() {
  return (
    <>
      <Header showElements={false} />
      <div id="portal"></div>
      <main
        className="pt-16 bg-repeat-round bg-fixed overflow-hidden
      lg:bg-contain"
        style={{ backgroundImage: 'url("bg.png")' }}
      >
        <Container className="drop-shadow-2xl text-white py-10 lg:py-20">
          <HeroSection />
        </Container>

        <div
          className="bg-background top-0 bottom-0 left-0 right-0"
          id="formula"
        >
          <Container className="py-8">
            <Promolinks />
          </Container>
        </div>

        <div
          style={{
            backgroundImage:
              "linear-gradient(180deg, #06142B 0%, #1a202e 100%)",
          }}
          className="top-0 bottom-0 left-0 right-0 text-background"
          id="formula"
        >
          <Container className="py-16">
            <DemoData />
          </Container>
        </div>

        <div
          className="bg-background top-0 bottom-0 left-0 right-0"
          id="formula"
        >
          <Container className="py-16">
            <AffiliatesNotes />
          </Container>
        </div>

        <footer className="bg-white top-0 bottom-0 left-0 right-0" id="formula">
          <Container className="py-8 text-xs text-center flex flex-col gap-4">
            <p>
              The information on this website has not been evaluated by the Food
              and Drug Administration. These products are not intended to
              diagnose, treat, cure or prevent any disease.
            </p>
            <p>© Endoterec Research 2023 All Rights Reserved.</p>
          </Container>
        </footer>
      </main>
    </>
  );
}
