import { Subtitle } from "@/components/subtitle";
import { Star } from "lucide-react";
import SocialProofCarousel from "./_components/social-carousel";

export function SocialProofSection() {
  return (
    <section>
      <Subtitle className="leading-6 pb-4 max-w-80 mx-auto">
        Real <span className="text-brandLight">Endoterec©</span> Users. Real
        Life-Changing Results.
      </Subtitle>
      <div className="flex flex-col items-center relative w-fit mx-auto">
        <img
          src="pill_1.svg"
          alt="Pill far"
          className="absolute right-[-26px] animate-float 
        lg:right-4"
        />
        <img
          src="pill_2.svg"
          alt="Pill near"
          className="absolute left-[-26px] bottom-0 animate-float delay-1000 
        lg:left-[-14px] bottom-8 "
        />
        <img
          src="3-bottles.png"
          className="-translate-y-4"
          alt="3 bottles of endoretec"
        />
        <div className="bg-white rounded-full text-black p-2 pl-8 pr-10 absolute -right-14 bottom-8">
          <div className="flex gap-2 items-center font-bold">
            <p>4.9</p>
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          </div>
          <p className="text-xs">Stars out of 5</p>
        </div>
      </div>
      <SocialProofCarousel />
    </section>
  );
}
