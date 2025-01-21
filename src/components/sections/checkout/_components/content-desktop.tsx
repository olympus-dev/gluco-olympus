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
import { useBottles } from "@/hooks/bottles";
import { ItemProps } from "./content-items";

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

interface ICheckoutDesktopProps {
  items: ItemProps[];
  onePurchaseLinks: string[];
  images: string[];
  isRevitaSleepUpsell?: boolean;
}

export default function CheckoutDesktop({
  images,
  items,
  onePurchaseLinks,
  isRevitaSleepUpsell = false,
}: ICheckoutDesktopProps) {
  const [selectedPackage, setSelectedPackage] = useState("6");
  const { remainingBottles } = useBottles();

  return (
    <Card className="w-full max-w-3xl mx-auto hidden lg:block shadow-[0_0_15px_5px_rgba(0,0,0,0.2)]">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">
          Claim Your{" "}
          <span
            className={isRevitaSleepUpsell ? "text-blue-600" : "text-blue-600"}
          >
            Discounted {isRevitaSleepUpsell ? "RevitaSleep" : "Gluco Guardian©"}
          </span>
        </CardTitle>
        <p className="text-xl mt-2 font-semibold">Below While Stocks Last!</p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <Image
              src={`/${
                selectedPackage === "6"
                  ? images[1]
                  : selectedPackage === "3"
                  ? images[0]
                  : images[2]
              }`}
              alt="Endoterec Bottles"
              width={400}
              height={400}
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <RadioGroup
              value={selectedPackage}
              onValueChange={setSelectedPackage}
              className="grid grid-cols-3 gap-4"
            >
              <div>
                <RadioGroupItem value="3" id="3-bottles" className="sr-only" />
                <ButtonCustom
                  key={0}
                  quantity={items[0].quantity}
                  bestWhat={"Most Popular"}
                  selected={selectedPackage === "3"}
                  htmlFor="3-bottles"
                />
              </div>
              <div>
                <RadioGroupItem value="6" id="6-bottles" className="sr-only" />
                <ButtonCustom
                  key={1}
                  quantity={items[1].quantity}
                  bestWhat={"Best Value"}
                  selected={selectedPackage === "6"}
                  htmlFor="6-bottles"
                />
              </div>
              <div>
                <RadioGroupItem value="1" id="1-bottle" className="sr-only" />
                <ButtonCustom
                  key={2}
                  quantity={items[2].quantity}
                  selected={selectedPackage === "1"}
                  htmlFor="1-bottle"
                />
              </div>
            </RadioGroup>
            <div className="flex flex-row-reverse justify-between items-center relative">
              <span className="text-2xl font-semibold text-center">
                {selectedPackage === "6"
                  ? items[1].daysSupply
                  : selectedPackage === "3"
                  ? items[0].daysSupply
                  : items[2].daysSupply}
                <br />
                Day Supply
              </span>
              <Separator className="md:w-[2.5px] md:h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              <div className="text-center">
                <span className="text-3xl font-bold text-blue-600">
                  $
                  {selectedPackage === "6"
                    ? items[1].price
                    : selectedPackage === "3"
                    ? items[0].price
                    : items[2].price}
                </span>
                <span className="text-lg">/Bottle</span>
                <p className="text-sm font-semibold text-green-500">
                  <span className="text-black">TOTAL:</span>{" "}
                  <span className="line-through text-red-400">
                    $
                    {selectedPackage === "6"
                      ? items[1].discount
                      : selectedPackage === "3"
                      ? items[0].discount
                      : items[2].discount}
                  </span>{" "}
                  $
                  {selectedPackage === "6"
                    ? items[1].total
                    : selectedPackage === "3"
                    ? items[0].total
                    : items[2].total}
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
          <span className="font-bold text-red-400">{remainingBottles}</span>
        </p>
        <Button
          className="w-full max-w-md bg-yellow-400 text-black font-semibold text-base hover:bg-yellow-500"
          size="lg"
          asChild
        >
          <a
            href={
              selectedPackage === "6"
                ? onePurchaseLinks[1]
                : selectedPackage === "3"
                ? onePurchaseLinks[0]
                : onePurchaseLinks[2]
            }
          >
            <ShoppingCart className="mr-2" /> Add to Cart
          </a>
        </Button>
        <Image
          src="/cards.svg"
          alt="cards"
          loading="lazy"
          width={133}
          height={23}
        />
      </CardFooter>
    </Card>
  );
}
