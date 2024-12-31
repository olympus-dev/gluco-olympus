import { OrderButton } from "@/components/order-button";
import { Subtitle } from "@/components/subtitle";
import {
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Dialog, DialogTitle } from "@radix-ui/react-dialog";
import { Search } from "lucide-react";
import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */
export function FormulaSection() {
  return (
    <section
      className="flex flex-col items-center
    lg:grid lg:grid-cols-2 lg:pt-4"
    >
      <article
        className="col-start-2 
      lg:self-center"
      >
        <Subtitle className="pb-12">
          Discover the <span className="text-brand">Exclusive</span> Formula
          Designed to Balance your{" "}
          <span className="text-brand">Blood Sugar</span> and Boost Your Overall{" "}
          <span className="text-brand">Vitality</span>.
        </Subtitle>
        <div
          className="text-center sr-only
        lg:not-sr-only"
        >
          <p>
            <b>
              Gluco Guardian® harnesses the power of 8 premium natural
              ingredients, proven to support healthy glucose levels and restore
              your energy naturally. It’s everything your body needs to achieve
              optimal health and well-being!
            </b>
            .
          </p>
          <p className="mt-8">
              With <b>100% natural ingredients, Gluco Guardian® is a safe and
              effective solution for anyone looking to take control of their
              health.
            </b>
          </p>
        </div>
        <OrderButton
          className="mx-auto mt-8 hidden
        lg:flex "
        />
      </article>

      <div className="col-start-1 row-start-1 lg:mx-auto lg:w-4/5 relative">
        <Dialog>
          <Image
            src="/plants.png"
            alt="Endoterec bottle with plants around."
            className="h-full w-full"
            loading="lazy"
            width={364}
            height={374}
          />
          <DialogTrigger asChild>
            <button className="absolute top-[48%] left-[52%] transform -translate-x-1/2 -translate-y-1/2 lg:w-24 lg:h-24 w-20 h-20 rounded-lg bg-brand opacity-60 lg:opacity-45 flex justify-center items-center hover:opacity-90 transition-all">
              <Search className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
            </button>
          </DialogTrigger>
          <DialogContent className="md:max-w-7xl lg:max-w-7xl">
            <DialogTitle>Nutrition Facts</DialogTitle>
            <DialogDescription>
              <img src="/nutrition.png" alt="Nutrition Facts Image" />
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </div>

      <div
        className="text-center not-sr-only
        lg:sr-only"
      >
        <p>
          With <b>100% natural ingredients, Gluco Guardian® is a safe and
              effective solution for anyone looking to take control of their
              health.
          </b><br/>
          With <b>premium ingredients sourced 100% from nature</b>.
        </p>
      </div>

      <OrderButton
        className="mt-8 lg:mx-auto col-start-2
      lg:mt-0 lg:hidden"
      />
    </section>
  );
}
