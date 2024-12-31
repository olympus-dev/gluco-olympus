import { Subtitle } from "@/components/subtitle";
import { BenefitItem } from "./_components/benefit-item";

export function BenefitsSection() {
  return (
    <section id="benefits">
      <Subtitle>
        How <span className="text-brandLight">Gluco Guardian©</span>
        <br /> works?
      </Subtitle>
      <p className="font-medium text-center py-8">
        <span className="font-bold">Gluco Guardian</span> is a powerful,{" "}
        <span className="font-bold">natural supplement</span> carefully
        formulated with{" "}
        <span className="font-bold">high-quality ingredients</span> that target
        the root causes of imbalanced glucose levels and low energy.
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
          imgPath="/heart.svg"
          title="Supports Healthy Blood Sugar Levels"
          description="The powerful ingredients in the formula help regulate glucose, keeping your levels stable throughout the day for improved well-being."
        />
        <BenefitItem
          imgPath="/graph.svg"
          title="Boosts Natural Energy and Vitality"
          description="Gluco Guardian’s natural components work to increase your stamina and reduce fatigue, helping you stay active and energized."
        />
        <BenefitItem
          imgPath="/stress.svg"
          title="Enhances Metabolic Function"
          description="The formula promotes better metabolism, aiding your body’s ability to process sugars efficiently and naturally."
        />
        <div className="hidden lg:flex justify-center max-h-[363px] col-span-3 gap-4">
          <BenefitItem
            imgPath="/health.svg"
            title="Strengthens Blood Vessel and Circulatory Health"
            description="Carefully selected ingredients support vascular health, improving blood flow and overall cardiovascular well-being."
            className="max-w-[373px]"
          />
          <BenefitItem
            imgPath="/natural.svg"
            title="100% Natural and Safe Formula"
            description="Crafted with premium, plant-based ingredients, Gluco Guardian is free from chemicals and side effects—your natural path to optimal health!"
            className="md:col-span-2 md:mx-auto md:max-w-[365px]
          lg:col-span-1 lg:max-w-[373px]"
          />
        </div>
        <BenefitItem
          imgPath="/health.svg"
          title="Strengthens Blood Vessel and Circulatory Health"
          description="Carefully selected ingredients support vascular health, improving blood flow and overall cardiovascular well-being."
          className="lg:hidden"
        />
        <BenefitItem
          imgPath="/natural.svg"
          title="100% Natural and Safe Formula"
          description="Crafted with premium, plant-based ingredients, Gluco Guardian is free from chemicals and side effects—your natural path to optimal health!"
          className="md:col-span-2 md:mx-auto md:max-w-[365px]
          lg:col-span-1 lg:max-w-fit lg:hidden"
        />
      </div>
    </section>
  );
}
