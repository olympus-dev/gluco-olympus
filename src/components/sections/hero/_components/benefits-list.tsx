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
          <b>Balanced</b> and <b>Stable</b> Blood Sugar Levels, <b>No More Worries</b>
        </p>
      </CheckBenefits>
      <Separator />
      <CheckBenefits>
        <p>
          <b>Boost in Energy</b> and Overall <b>Health</b>
        </p>
      </CheckBenefits>
      <Separator />
      <CheckBenefits>
        <p>
          <b>Restored and Elevated Confidence in Your Wellness</b>
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
          <b>Enhanced Vitality</b> and Daily Stamina
        </p>
      </CheckBenefits>
      <Separator />
      <CheckBenefits>
        <p>
          <b>100% Natural Ingredients</b>, Safe and Proven
        </p>
      </CheckBenefits>
    </div>
  );
}
