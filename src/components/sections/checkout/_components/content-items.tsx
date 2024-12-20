"use client";

import { Subtitle } from "@/components/subtitle";
import { useBottles } from "@/hooks/bottles";
import { Package, Shield, ShoppingCart, Truck } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ButtonProps {
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

export interface ItemProps {
  price: number;
  total: number;
  discount: number;
  subscribeBottle: number;
  subscribeTotal: number;
  quantity: number;
  bestWhat?: string;
  daysSupply: number;
}

export interface ContentItemsProps {
  items: ItemProps[];
  onePurchaseLinks: string[];
  images: string[];
}

export function ContentItems({ items, onePurchaseLinks, images }: ContentItemsProps) {
  const { remainingBottles } = useBottles();
  const [itemSelected, setItemSelected] = useState(1);

  return (
    <div className="flex flex-col items-center">
      <Image
        src={`/${images[itemSelected]}`}
        alt=""
        loading="lazy"
        width={296}
        height={296}
        className="max-h-[296px] object-contain"
      />
      <p className="font-semibold text-[#5F5F5F]">
        · {itemSelected === 0 ? items[0].daysSupply : itemSelected === 1 ? items[1].daysSupply : items[2].daysSupply} Day Supply ·
      </p>
      <p className="font-bold text-3xl text-brand">
        $
        {items[itemSelected].price}
        <span className="text-base text-[#898B8B]">/Bottle</span>
      </p>
      <p>
        TOTAL:
        <span className="line-through">${items[itemSelected].discount}</span>
        <span className="font-bold text-positive">
          $
          {items[itemSelected].total}
        </span>
      </p>
      <div className="flex gap-1 py-4">
        {items.map((item, index) => (
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
        <span className="text-red-400 font-bold">{remainingBottles}</span>
      </p>
      <a
        className="bg-yellow-300 rounded-lg text-black flex gap-2 py-4 px-7 mt-4 cursor-pointer hover:brightness-110 transition-all"
        href={onePurchaseLinks[itemSelected]}
      >
        <ShoppingCart />
        <Subtitle>Add to Cart</Subtitle>
      </a>
      <img src="/cards.svg" className="pt-2" />
    </div>
  );
}
