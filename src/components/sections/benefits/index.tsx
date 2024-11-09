import { Subtitle } from "@/components/subtitle";
import { BenefitItem } from "./_components/benefit-item";

export function BenefitsSection() {
  return (
    <section id="benefits">
      <Subtitle>
        How <span className="text-brandLight">Endoterec©</span>
        <br /> works?
      </Subtitle>
      <p className="font-medium text-center py-8">
        Endoterec is a
        <span className="font-bold">powerful natural supplement</span>
        formulated with
        <span className="font-bold">
          high-quality ingredients that target the root causes of low potency
          and decreased sexual desire
        </span>
        .
        <br />
        <br />
        Here’s what happens when you start using it:
      </p>
      <div
        className="flex flex-col gap-4
      md:grid md:grid-cols-2 md:justify-center
      lg:grid-cols-3 lg:justify-items-center lg:justify-center"
      >
        <BenefitItem
          imgPath="heart.svg"
          title="Boosts Blood Flow"
          description="The active components in the formula enhance blood circulation, especially in strategic areas. This means firmer, stronger, and longer-lasting erections, without failure."
        />
        <BenefitItem
          imgPath="graph.svg"
          title="Increases Natural Testosterone Production"
          description="The formula includes extracts that stimulate testosterone production, the key hormone for male vitality. With higher levels, you experience a significant boost in libido and energy."
        />
        <BenefitItem
          imgPath="stress.svg"
          title="Combats Stress and Fatigue"
          description="Adaptogenic ingredients help reduce stress and fatigue, factors that often negatively impact performance. This brings back your energy, confidence, and mental clarity."
        />
        <div className="hidden lg:flex justify-center max-h-[363px] col-span-3 gap-4">
          <BenefitItem
            imgPath="health.svg"
            title="Improves Sexual and Vascular Health"
            description="The combination of natural ingredients directly supports the health of blood vessels and overall vitality, providing fast and noticeable results."
            className="max-w-[373px]"
          />
          <BenefitItem
            imgPath="natural.svg"
            title="100% Natural and Safe Formula"
            description="The active components in the formula enhance blood circulation, especially in strategic areas. This means firmer, stronger, and longer-lasting erections, without failure."
            className="md:col-span-2 md:mx-auto md:max-w-[365px]
          lg:col-span-1 lg:max-w-[373px]"
          />
        </div>
        <BenefitItem
          imgPath="health.svg"
          title="Improves Sexual and Vascular Health"
          description="The combination of natural ingredients directly supports the health of blood vessels and overall vitality, providing fast and noticeable results."
          className="lg:hidden"
        />
        <BenefitItem
          imgPath="natural.svg"
          title="100% Natural and Safe Formula"
          description="The active components in the formula enhance blood circulation, especially in strategic areas. This means firmer, stronger, and longer-lasting erections, without failure."
          className="md:col-span-2 md:mx-auto md:max-w-[365px]
          lg:col-span-1 lg:max-w-fit lg:hidden"
        />
      </div>
    </section>
  );
}
