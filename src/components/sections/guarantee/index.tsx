import { Subtitle } from "@/components/subtitle";
import Image from "next/image";

interface IGuarantee {
  isLandingPage?: boolean;
}

export function Guarantee({ isLandingPage = false }: IGuarantee) {
  return (
    <>
      {isLandingPage ? (
        <section className="flex flex-col items-center relative max-w-md mx-auto">
          <Image
            src="/guarantee.png"
            alt="60-days guarantee badge"
            loading="lazy"
            width={136}
            height={136}
            className="absolute -top-14 left-1/2 transform -translate-x-1/2
          lg:-top-20"
          />
          <Subtitle
            className="mt-24
        lg:mt-20"
          >
            <span className="text-yellow-400">100% Satisfaction</span>
            <br />
            60-Day Money Back Guarantee
          </Subtitle>
          <p className="text-center pt-4">
            Your order today is covered by our{" "}
            <b>iron-clad 60-day 100% money-back guarantee</b>. If you are not
            impressed with the results, then at any time in the next 60 days
            write to us and we’ll <b>refund every single cent</b>.
          </p>
        </section>
      ) : (
        <>
          {/* desktop */}
          <section className="hidden lg:flex items-center relative mx-auto max-w-4xl gap-8">
            <Image
              src="/guarantee.png"
              alt="60-days guarantee badge"
              loading="lazy"
              width={136}
              height={136}
              className=""
            />
            <div>
              <Subtitle
                className="
          lg:text-left"
              >
                <span className="text-yellow-400">100% Satisfaction</span>
                <br />
                60-Day Money Back Guarantee
              </Subtitle>
              <p className="pt-4 font-semibold">
                Your order today is covered by our{" "}
                <span>iron-clad 60-day 100% money-back guarantee</span>. If you
                are not impressed with the results, then at any time in the next
                60 days write to us and we’ll{" "}
                <span>refund every single cent</span>.
              </p>
            </div>
          </section>
          {/* mobile */}
          <section className="flex flex-col items-center relative max-w-md mx-auto mt-4 lg:hidden">
            <Image
              src="/guarantee.png"
              alt="60-days guarantee badge"
              loading="lazy"
              width={136}
              height={136}
              className="absolute -top-14 left-1/2 transform -translate-x-1/2
        lg:-top-20"
            />
            <Subtitle
              className="mt-24
      lg:mt-20"
            >
              <span className="text-yellow-400">100% Satisfaction</span>
              <br />
              60-Day Money Back Guarantee
            </Subtitle>
            <p className="text-center pt-4">
              Your order today is covered by our{" "}
              <b>iron-clad 60-day 100% money-back guarantee</b>. If you are not
              impressed with the results, then at any time in the next 60 days
              write to us and we’ll <b>refund every single cent</b>.
            </p>
          </section>
          {/* Landing Page */}
        </>
      )}
    </>
  );
}
