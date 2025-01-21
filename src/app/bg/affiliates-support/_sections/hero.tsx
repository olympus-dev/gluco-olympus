"use client";

import { useBottles } from "@/hooks/bottles";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

export function HeroSection() {
  const { turnOff } = useBottles();

  const variants = {
    hidden: { x: "50%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  useEffect(() => {
    turnOff();
  });

  return (
    <div
      className="mt-8 flex flex-col pb-12 items-center
    lg:grid lg:grid-cols-2 lg:pb-24 lg:pt-12"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        transition={{ duration: 0.5 }}
        className="flex-col flex gap-8"
      >
        {/* Aqui fica o texto */}
        <h2 className="text-2xl text-center lg:text-left">
          <span className="font-">Endoterec</span> is the HIGHEST EPC offer on
          the Digistore 24 Marketplace
        </h2>
        <h1 className="text-4xl text-center lg:text-6xl lg:text-left">
          DISCOVER WHY BY SENDING JUST A{" "}
          <span
            className="text-[#222222] relative z-10 block w-fit mx-auto
            lg:mx-0
          before:content-[' '] before:z-[-1] before:absolute before:bg-yellow-300 before:h-12 before:w-full before:top-1/2 before:-translate-y-1/2
          lg:before:h-16"
          >
            FEW CLICKS...
          </span>
        </h1>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col items-center pt-12
      lg:self-end lg:p-0"
      >
        <Image
          width={75}
          height={72}
          src="/pill_1.svg"
          alt="Pill far"
          className="absolute left-[-26px] animate-float 
        lg:left-8"
        />
        <Image
          width={75}
          height={72}
          src="/pill_2.svg"
          alt="Pill near"
          className="absolute right-[-26px] bottom-14 animate-float delay-1000 
        lg:right-14"
        />
        <Image
          src="/hero.png"
          alt="Endoterec Bottles"
          width={364}
          height={364}
          className="lg:w-[475px] lg:h-[475px]"
        />
      </motion.div>
      {/*  */}
    </div>
  );
}
