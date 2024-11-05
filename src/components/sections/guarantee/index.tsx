import { Subtitle } from "@/components/subtitle";

export function Guarantee() {
  return (
    <section className="flex flex-col items-center relative max-w-md mx-auto">
      <img
        src="guarantee.png"
        alt="60-days guarantee badge"
        loading="lazy"
        width={136}
        height={136}
        className="absolute -top-14 left-1/2 transform -translate-x-1/2
        lg:-top-20"
      />
      <Subtitle className="mt-24
      lg:mt-20">
        <span className="text-yellow-400">100% Satisfaction</span>
        <br />
        60-Day Money Back Guarantee
      </Subtitle>
      <p className="text-center pt-4">
        Your order today is covered by our <b>iron-clad 60-day 100% money-back
        guarantee</b>. If you are not impressed with the results, then at any time
        in the next 60 days write to us and we’ll <b>refund every single cent</b>.
      </p>
    </section>
  );
}
