import { Separator } from "@/components/Separator";
import { ReactNode } from "react";

interface CheckBenefitsProps {
  children: ReactNode;
  className?: string;
}

function CheckBenefits({ children, className }: CheckBenefitsProps) {
  return (
    <div className={"flex gap-4 items-center " + className}>
      <img src="check.svg" alt="*V" className="w-8 h-8" width={32} height={32} />
      {children}
    </div>
  );
}

interface BenefitsListProps {
  className?: string;
}

export function BenefitsList({ className }: BenefitsListProps) {
  return (
    <div
      className={"flex flex-col gap-4 mt-8 " + className}
    >
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
  );
}
