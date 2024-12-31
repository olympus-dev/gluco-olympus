import Image from "next/image";
import { OrderButton } from "../../order-button";
import { BenefitsList } from "./_components/benefits-list";

export function HeroSection() {
  return (
    <div
      className="mt-8 flex flex-col pb-12 items-center 
    lg:grid lg:grid-cols-2 lg:pb-4"
    >
      <div>
        <h1
          className="text-4xl text-center leading-10
        lg:py-12"
        >
          The <b className="text-brandLight">Top-Ranked</b> <br/>Blood Sugar Solution
        </h1>
        <BenefitsList
          className="sr-only 
        lg:not-sr-only mt-0 gap-4 max-w-[450px] lg:mx-auto"
        />
      </div>
      <div
        className="relative flex flex-col items-center
      lg:self-end"
      >
        <Image
          src="/hero.png"
          alt="Endoterec Bottles"
          width={364}
          height={364}
          className="lg:w-[378px] lg:h-[378px]"
        />
        <img src="security_seals.png" alt="Security Seals" className="h-14" />
      </div>
      <BenefitsList className="lg:sr-only" />
      <OrderButton
        className="mt-12 
      lg:mx-auto lg:mb-6 lg:mt-12"
      />
    </div>
  );
}
