"use client";

import { Separator } from "@/components/Separator";
import { Subtitle } from "@/components/subtitle";
import { Tabs } from "@radix-ui/react-tabs";
import React from "react";
import { ContentItems, ContentItemsProps } from "./_components/content-items";

type ICheckoutSectionProps = {
  items: ContentItemsProps["items"];
  onePurchaseLinks: ContentItemsProps["onePurchaseLinks"];
  images: ContentItemsProps["images"];
  isAlternative?: boolean;
  isPrimeBoostUpsell?: boolean;
}

export default function CheckoutSection({ isAlternative = false, images, items, onePurchaseLinks, isPrimeBoostUpsell = false }: ICheckoutSectionProps) {
  const [subscribeMode, setSubscribeMode] = React.useState(true);

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.toLocaleString('en-US', { month: 'long' });
  const offerEndsMessage = `Offer ends on ${day} of ${month}`;
  const handleSubscribeMode = () => {
    setSubscribeMode(!subscribeMode);
  };

  return (
    <section className="block lg:hidden">
      <Subtitle className="pb-4">
        Claim Your
        <br />
        <span className={isPrimeBoostUpsell ? "text-red-600" : "text-blue-600"}>Discounted {isPrimeBoostUpsell ? "PrimeBoost" : "Endoterec©"}</span>
        <br />
        { isAlternative ? offerEndsMessage : "Below While Stocks Last!" }
        <Separator className="h-[2.5px] w-44 mx-auto mt-2 bg-brand" />
      </Subtitle>
      <Tabs
        defaultValue="account"
        className="w-full"
        onValueChange={handleSubscribeMode}
      >
          <ContentItems images={images} items={items} onePurchaseLinks={onePurchaseLinks} />
      </Tabs>
    </section>
  );
}
