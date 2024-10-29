import { OrderButton } from "../../order-button";
import { BenefitsList } from "./_components/benefits-list";

export function HeroSection() {
  return (
    <div className="mt-8 flex flex-col pb-12 items-center 
    lg:grid lg:grid-cols-2 lg:pb-4">
      <div>
        <h1 className="text-3xl text-center leading-10
        lg:py-12">
          The <b className="text-brandLight">Natural Secret</b> Behind
          Stronger, Longer-Lasting Erections!
        </h1>
        <BenefitsList className="sr-only 
        lg:not-sr-only mt-0 gap-4 max-w-[450px] lg:mx-auto" />
      </div>
      <div className="relative flex flex-col items-center
      lg:self-end">
        <img src="pill_1.svg" alt="Pill far" className="absolute left-[-26px] animate-float 
        lg:left-16" />
        <img src="pill_2.svg" alt="Pill near" className="absolute right-[-26px] bottom-14 animate-float delay-1000 
        lg:right-16" />
        <img src="hero.png" alt="Endoterec Bottles" />
        <img src="security_seals.png" alt="Security Seals" className="h-14" />
      </div>
      <BenefitsList className="lg:sr-only" />
      <OrderButton className="mt-12 
      lg:mx-auto lg:mb-6 lg:mt-12" />
    </div>
  );
}
