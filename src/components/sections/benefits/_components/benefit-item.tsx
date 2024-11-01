import { Subtitle } from "@/components/subtitle";
import Image from "next/image";

interface BenefitItemProps {
  imgPath: string;
  title: string;
  description: string;
  className?: string;
}

export function BenefitItem({
  description,
  imgPath,
  title,
  className,
}: BenefitItemProps) {
  return (
    <article
      className={
        "bg-brandExtraDark text-background flex flex-col items-center gap-4 border border-brandLight rounded-lg px-4 py-8 text-center " +
        className
      }
    >
      <Image src={imgPath} alt="Ilustration icon" width={80} height={80} />
      <Subtitle>{title}</Subtitle>
      <p>{description}</p>
    </article>
  );
}
