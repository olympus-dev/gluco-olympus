import { ReactNode } from "react";

interface CheckBenefitsProps {
  children: ReactNode;
  className?: string;
}

export function CheckBenefits({ children, className }: CheckBenefitsProps) {
  return (
    <div className={"flex gap-4 items-center " + className}>
      <img src="check.svg" alt="*V" className="w-8 h-8" />
      {children}
    </div>
  );
}
