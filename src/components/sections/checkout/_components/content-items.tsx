"use client";

import { Subtitle } from "@/components/subtitle";
import { Package, Shield, ShoppingCart, Truck } from "lucide-react";
import { useState } from "react";

interface ButtonProps {
  // children: React.ReactNode;
  quantity: number;
  bestWhat?: string;
  selected: boolean;
  onClick?: () => void;
}

function Button({ quantity, bestWhat, selected, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={
        "flex-1 rounded-lg p-7 relative " +
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
    </button>
  );
}

interface ContentItemsProps {
  subscribeMode: boolean;
}

export function ContentItems({ subscribeMode }: ContentItemsProps) {
  const [itemSelected, setItemSelected] = useState(1);
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
  }

  const prices: ItemProps[] = [
    { price: 59, total: 177, discount: 447 },
    { price: 49, total: 294, discount: 894 },
    { price: 89, total: 89, discount: 149 },
  ];

  return (
    <div className="flex flex-col items-center">
      <img
        src={images[itemSelected]}
        alt=""
        loading="lazy"
        width={296}
        height={296}
        className="max-h-[296px] object-contain my-4"
      />
      <p className="font-semibold text-[#5F5F5F]">· 180 Day Supply ·</p>
      <p className="font-bold text-3xl text-brand">
        ${prices[itemSelected].price}
        <span className="text-base text-[#898B8B]">/Bottle</span>
      </p>
      <p>
        TOTAL:
        <span className="line-through">${prices[itemSelected].discount}</span>
        <span className="font-bold text-positive">
          ${prices[itemSelected].total}
        </span>
      </p>
      <div className="flex gap-1 py-4">
        {[
          { quantity: 3, bestWhat: "Most Popular" },
          { quantity: 6, bestWhat: "Best Value" },
          { quantity: 1 },
        ].map((item, index) => (
          <Button
            key={index}
            quantity={item.quantity}
            bestWhat={item.bestWhat}
            selected={itemSelected === index}
            onClick={() => setItemSelected(index)}
          />
        ))}
      </div>
      <div className="space-y-2 text-center">
        {[
          { icon: Truck, text: "FREE US SHIPPING" },
          { icon: Package, text: "BIGGEST DISCOUNT" },
          { icon: Shield, text: "60 DAYS GUARANTEE" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center text-gray-600 space-x-2"
          >
            <item.icon className="w-5 h-5" />
            <p className="text-sm font-medium">{item.text}</p>
          </div>
        ))}
      </div>
      <p className="pt-4">
        Remaining Bottles in stock:{" "}
        <span className="text-red-400 font-bold">112</span>
      </p>
      <a
        className="bg-brand rounded-lg text-white flex gap-2 py-4 px-7 mt-4 cursor-pointer hover:brightness-125 transition-all"
        href={
          subscribeMode
            ? subscribeLinks[itemSelected]
            : onePurchaseLinks[itemSelected]
        }
        target="_blank"
      >
        <ShoppingCart />
        <Subtitle>Add to Cart</Subtitle>
      </a>
      <img src="cards.svg" className="pt-2" />
    </div>
  );
}
