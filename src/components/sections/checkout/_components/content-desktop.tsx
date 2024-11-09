"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ShoppingCart, Package, Truck, Shield } from "lucide-react";
import { Separator } from "@/components/Separator";
import Image from "next/image";

interface ButtonProps {
  quantity: number;
  bestWhat?: string;
  selected: boolean;
  htmlFor: string;
}

function ButtonCustom({ quantity, bestWhat, selected, htmlFor }: ButtonProps) {
  return (
    <Label
      htmlFor={htmlFor}
      className={
        "flex flex-col items-center justify-center rounded-lg p-7 relative text-center cursor-pointer " +
        (selected ? "bg-brand text-white" : "bg-[#C4C7C7] text-[#4E4E4E]")
      }
    >
      {bestWhat && (
        <div
          className={
            "absolute top-0 left-0 right-0 rounded-t-lg text-xs font-semibold py-1 " +
            (selected ? "bg-brandDark" : "text-white bg-[#4E4E4E]")
          }
        >
          {bestWhat}
        </div>
      )}
      <p className="font-bold text-3xl leading-4 mt-4">
        {quantity}
        <br />
        <span className="font-medium text-base">
          {quantity > 1 ? `Bottles` : `Bottle`}
        </span>
      </p>
    </Label>
  );
}

export default function CheckoutDesktop() {
  const [selectedPackage, setSelectedPackage] = useState("6");
  const [purchaseType, setPurchaseType] = useState("subscribe");

  const images: string[] = ["3-bottles.png", "6-bottles.png", "1-bottle.png"];
  const subscribeLinks: string[] = [
    "https://www.youtube.com/watch?v=LeQBBAxrDdw&t=1164s",
    "https://www.youtube.com/watch?v=LeQBBAxrDdw&t=1164s",
    "https://www.youtube.com/watch?v=LeQBBAxrDdw&t=1164s",
  ];
  const onePurchaseLinks: string[] = [
    "https://www.google.com",
    "https://www.google.com",
    "https://www.google.com",
  ];

  interface ItemProps {
    price: number;
    total: number;
    discount: number;
    supply: number;
  }

  const prices: ItemProps[] = [
    { price: 59, total: 177, discount: 447, supply: 90 },
    { price: 49, total: 294, discount: 894, supply: 180 },
    { price: 89, total: 89, discount: 149, supply: 30 },
  ];

  return (
    <Card className="w-full max-w-3xl mx-auto hidden lg:block">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">
          Claim Your{" "}
          <span className="text-blue-600">Discounted Endoterec©</span>
        </CardTitle>
        <p className="text-xl mt-2 font-semibold">Below While Stocks Last!</p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img
              src={
                selectedPackage === "6"
                  ? images[1]
                  : selectedPackage === "3"
                  ? images[0]
                  : images[2]
              }
              alt="Endoterec Bottles"
              width={400}
              height={400}
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex gap-4">
              <Button
                variant={purchaseType === "subscribe" ? "default" : "outline"}
                className={`flex-1 font-bold ${
                  purchaseType === "subscribe"
                    ? "bg-brand hover:bg-brandDark"
                    : "bg-gray-400 text-gray-700"
                }`}
                onClick={() => setPurchaseType("subscribe")}
              >
                Subscribe
              </Button>
              <Button
                variant={purchaseType === "onetime" ? "default" : "outline"}
                className={`flex-1 font-bold ${
                  purchaseType === "subscribe"
                    ? "bg-gray-400 text-gray-700"
                    : "bg-brand hover:bg-brandDark"
                }`}
                onClick={() => setPurchaseType("onetime")}
              >
                One-time purchase
              </Button>
            </div>
            <RadioGroup
              value={selectedPackage}
              onValueChange={setSelectedPackage}
              className="grid grid-cols-3 gap-4"
            >
              <div>
                <RadioGroupItem value="3" id="3-bottles" className="sr-only" />
                <ButtonCustom
                  key={0}
                  quantity={3}
                  bestWhat={"Most Popular"}
                  selected={selectedPackage === "3"}
                  htmlFor="3-bottles"
                />
              </div>
              <div>
                <RadioGroupItem value="6" id="6-bottles" className="sr-only" />
                <ButtonCustom
                  key={1}
                  quantity={6}
                  bestWhat={"Best Value"}
                  selected={selectedPackage === "6"}
                  htmlFor="6-bottles"
                />
              </div>
              <div>
                <RadioGroupItem value="1" id="1-bottle" className="sr-only" />
                <ButtonCustom
                  key={2}
                  quantity={1}
                  selected={selectedPackage === "1"}
                  htmlFor="1-bottle"
                />
              </div>
            </RadioGroup>
            <div className="flex flex-row-reverse justify-between items-center relative">
              <span className="text-2xl font-semibold text-center">
                {selectedPackage === "6"
                  ? prices[1].supply
                  : selectedPackage === "3"
                  ? prices[0].supply
                  : prices[2].supply}
                  <br/>
                Day Supply
              </span>
              <Separator className="md:w-[2.5px] md:h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              <div className="text-right">
                <span className="text-3xl font-bold text-blue-600">
                  $
                  {selectedPackage === "6"
                    ? prices[1].price
                    : selectedPackage === "3"
                    ? prices[0].price
                    : prices[2].price}
                </span>
                <span className="text-lg">/Bottle</span>
                <p className="text-sm font-semibold text-green-500">
                  <span className="text-black">TOTAL:</span>{" "}
                  <span className="line-through text-red-400">
                    $
                    {selectedPackage === "6"
                      ? prices[1].discount
                      : selectedPackage === "3"
                      ? prices[0].discount
                      : prices[2].discount}
                  </span>{" "}
                  $
                  {selectedPackage === "6"
                    ? prices[1].total
                    : selectedPackage === "3"
                    ? prices[0].total
                    : prices[2].total}
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-center gap-4">
        <div className="flex justify-center gap-8 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Truck size={20} />
            <span>FREE US SHIPPING</span>
          </div>
          <div className="flex items-center gap-2">
            <Package size={20} />
            <span>BIGGEST DISCOUNT</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield size={20} />
            <span>60 DAYS GUARANTEE</span>
          </div>
        </div>
        <p className="text-sm font-semibold">
          Remaining Bottles in stock:{" "}
          <span className="font-bold text-red-400">112</span>
        </p>
        <Button
          className="w-full max-w-md bg-yellow-400 text-black font-semibold text-base hover:bg-yellow-500"
          size="lg"
          asChild
        >
          <a
            href={
              purchaseType === "subscribe"
                ? selectedPackage === "6"
                  ? subscribeLinks[1]
                  : selectedPackage === "3"
                  ? subscribeLinks[1]
                  : subscribeLinks[0]
                : selectedPackage === "6"
                ? onePurchaseLinks[1]
                : selectedPackage === "3"
                ? onePurchaseLinks[1]
                : onePurchaseLinks[0]
            }
          >
            <ShoppingCart className="mr-2" /> Add to Cart
          </a>
        </Button>
        <Image src="cards.svg" alt="cards" loading="lazy" width={133} height={23} />
      </CardFooter>
    </Card>
  );
}
