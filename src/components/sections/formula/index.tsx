import { OrderButton } from "@/components/order-button";
import { Subtitle } from "@/components/subtitle";

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
          That Will Transform Your
          <span className="text-brand"> Confidence</span> and
          <span className="text-brand">Performance</span>!
        </Subtitle>
        <div
          className="text-center sr-only
        lg:not-sr-only"
        >
          <p>
            <b>
              Endoterec© is powered by a unique, cutting-edge formula—8 of the
              world's best natural boosters for male vitality,
            </b>
            with <b>premium ingredients sourced 100% from nature</b>.
          </p>
          <p className="mt-8">
            It’s everything your body needs to
            <b> achieve peak male performance</b>
            and <b>unstoppable confidence!</b>
          </p>
        </div>
        <OrderButton
          className="mx-auto mt-8 hidden
        lg:flex"
        />
      </article>

      <img
        src="plants.png"
        alt="Endoterec bottle with plants around."
        className="col-start-1 row-start-1
      lg:mx-auto lg:w-4/5"
        loading="lazy"
        width={364}
        height={374}
      />

      <div
        className="text-center not-sr-only
        lg:sr-only"
      >
        <p>
          <b>
            Endoterec© is powered by a unique, cutting-edge formula—8 of the
            world's best natural boosters for male vitality,
          </b>
          with <b>premium ingredients sourced 100% from nature</b>.
        </p>
        <p className="mt-8">
          It’s everything your body needs to
          <b> achieve peak male performance</b>
          and <b>unstoppable confidence!</b>
        </p>
      </div>

      <OrderButton
        className="mt-8 lg:mx-auto col-start-2
      lg:mt-0 lg:hidden"
      />
    </section>
  );
}
