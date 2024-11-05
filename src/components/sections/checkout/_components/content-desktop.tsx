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

export default function ContentDesktop() {
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
        <p className="text-xl mt-2">Below While Stocks Last!</p>
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
              className="w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-2xl font-semibold">
                {selectedPackage === "6"
                  ? prices[1].supply
                  : selectedPackage === "3"
                  ? prices[0].supply
                  : prices[2].supply}{" "}
                Day Supply
              </span>
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
            <RadioGroup
              value={selectedPackage}
              onValueChange={setSelectedPackage}
              className="grid grid-cols-3 gap-4"
            >
              <div>
                <RadioGroupItem value="3" id="3-bottles" className="sr-only" />
                <Label
                  htmlFor="3-bottles"
                  className={`flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer transition-all ${
                    selectedPackage === "3"
                      ? "bg-blue-100 border-blue-500"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <span className="text-lg font-semibold">3</span>
                  <span>Bottles</span>
                  <span className="text-xs text-blue-600 font-semibold mt-1 text-center">
                    Most Popular
                  </span>
                </Label>
              </div>
              <div>
                <RadioGroupItem value="6" id="6-bottles" className="sr-only" />
                <Label
                  htmlFor="6-bottles"
                  className={`flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer transition-all ${
                    selectedPackage === "6"
                      ? "bg-blue-100 border-blue-500"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <span className="text-lg font-semibold">6</span>
                  <span>Bottles</span>
                  <span className="text-xs text-blue-600 font-semibold mt-1">
                    Best
                    <br /> Value
                  </span>
                </Label>
              </div>
              <div>
                <RadioGroupItem value="1" id="1-bottle" className="sr-only" />
                <Label
                  htmlFor="1-bottle"
                  className={`flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer transition-all ${
                    selectedPackage === "1"
                      ? "bg-blue-100 border-blue-500"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <span className="text-lg font-semibold">1</span>
                  <span>Bottle</span>
                </Label>
              </div>
            </RadioGroup>
            <div className="flex gap-4">
              <Button
                variant={purchaseType === "subscribe" ? "default" : "outline"}
                className={`flex-1 ${
                  purchaseType === "subscribe"
                    ? "bg-brand hover:bg-brandDark"
                    : ""
                }`}
                onClick={() => setPurchaseType("subscribe")}
              >
                Subscribe
              </Button>
              <Button
                variant={purchaseType === "onetime" ? "default" : "outline"}
                className={`flex-1 ${
                  purchaseType === "subscribe"
                    ? ""
                    : "bg-brand hover:bg-brandDark"
                }`}
                onClick={() => setPurchaseType("onetime")}
              >
                One-time purchase
              </Button>
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
        <p className="text-sm text-gray-600">
          Remaining Bottles in stock:{" "}
          <span className="font-bold text-red-400">112</span>
        </p>
        <Button
          className="w-full max-w-md bg-brand hover:bg-brandDark"
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
        <img src="cards.svg" />
      </CardFooter>
    </Card>
  );
}
