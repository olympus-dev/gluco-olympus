"use client";

import { Separator } from "@/components/Separator";
import { Subtitle } from "@/components/subtitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import React from "react";
import { ContentItems } from "./_components/content-items";

export default function CheckoutSection() {
  const [subscribeMode, setSubscribeMode] = React.useState(true);

  const handleSubscribeMode = () => {
    setSubscribeMode(!subscribeMode);
  };

  return (
    <section className="block lg:hidden">
      <Subtitle className="pb-4">
        Claim Your
        <br />
        <span className="text-brand">Discounted Endoterec©</span>
        <br />
        Below While Stocks Last!
        <Separator className="h-[2.5px] w-44 mx-auto mt-2 bg-brand" />
      </Subtitle>
      <Tabs
        defaultValue="account"
        className="w-full"
        onValueChange={handleSubscribeMode}
      >
        <TabsList className="flex justify-center gap-4">
          <TabsTrigger
            value="account"
            className={
              subscribeMode
                ? "bg-brand text-white font-bold p-4 w-full rounded-lg"
                : "bg-gray-400 text-gray-700 font-bold p-4 w-full rounded-lg"
            }
          >
            SUBSCRIBE
          </TabsTrigger>
          <TabsTrigger
            value="password"
            className={
              subscribeMode
                ? "bg-gray-400 text-gray-700 font-bold p-4 w-full rounded-lg"
                : "bg-brand text-white font-bold p-4 w-full rounded-lg"
            }
          >
            One-time <br />
            purchase
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <ContentItems subscribeMode={true} />
        </TabsContent>
        <TabsContent value="password">
          <ContentItems subscribeMode={false} />
        </TabsContent>
      </Tabs>
    </section>
  );
}
