import { Subtitle } from "@/components/subtitle";
import SocialProofCarousel from "./_components/social-carousel";
import { SocialDesktop } from "./_components/social-desktop";

export function SocialProofSection() {
  return (
    <section className="relative">
      <div className="flex items-center h-14">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 opacity-45">
          <img src="/testimonials.svg" alt="testimonials" className="max-w-full" />
        </div>
        <Subtitle className="leading-6 max-w-fit mx-auto lg:text-4xl">
          Real <span className="text-brandLight">Endoterec©</span> Users, Real
          Life-Changing Results.
        </Subtitle>
      </div>
      <SocialProofCarousel />
      <SocialDesktop />
    </section>
  );
}
