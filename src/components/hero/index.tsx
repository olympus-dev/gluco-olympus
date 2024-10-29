import { OrderButton } from "../order-button";
import { Separator } from "../Separator";
import { CheckBenefits } from "./_components/benefits";

export function HeroSection() {
  return (
    <div className="mt-8 flex flex-col pb-12 items-center">
      <h1 className="text-3xl text-center leading-10">
        The <b className="text-brandLight">Natural Secret</b> Behind
        Stronger, Longer-Lasting Erections!
      </h1>
      <div className="relative flex flex-col items-center">
        <img src="pill_1.svg" alt="Pill far" className="absolute left-[-26px] animate-float" />
        <img src="pill_2.svg" alt="Pill near" className="absolute right-[-26px] bottom-14 animate-float delay-1000" />
        <img src="hero.png" alt="Endoterec Bottles" />
        <img src="security_seals.png" alt="Security Seals" className="h-14" />
      </div>
      <div className="flex flex-col gap-4 mt-8">
        <CheckBenefits>
          <p>
            <b>Stronger</b> and <b>Longer-Lasting Erections</b>, No More
            Frustrations
          </p>
        </CheckBenefits>
        <Separator />
        <CheckBenefits>
          <p>
            <b>Boost in Male Potency</b> and Performance
          </p>
        </CheckBenefits>
        <Separator />
        <CheckBenefits>
          <p>
            <b>Restored and Elevated Male Confidence</b>
          </p>
        </CheckBenefits>
        <Separator />
        <CheckBenefits>
          <p>
            <b>Simple, Effective</b>, and No Side Effects
          </p>
        </CheckBenefits>
        <Separator />
        <CheckBenefits>
          <p>
            <b>Increased Libido</b> and Sexual Desire
          </p>
        </CheckBenefits>
        <Separator />
        <CheckBenefits>
          <p>
            <b>100% Natural Ingredient</b>, Safe and Proven
          </p>
        </CheckBenefits>
      </div>
      <OrderButton className="mt-12" />
    </div>
  );
}
