"use client";

import { motion } from "framer-motion";
import { Mails } from "lucide-react";
import Image from "next/image";

export function DemoData() {
  const variants = {
    hidden: { x: "50%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-4"
    >
      <h2 className="text-center text-xl font-bold">Demographics</h2>
      <h1 className="text-center text-4xl">
        Endoterec Is The{" "}
        <span className="text-yellow-400">HOTTEST SUPPLEMENT CRAZE</span> On The
        Internet Right Now!
      </h1>
      <div className="w-36 h-1 bg-yellow-400 mb-4" />
      <Image
        src="/demo-country.png"
        width={887}
        height={273}
        alt=""
        className="rounded-lg"
      />
      <Image
        src="/demo-device.png"
        width={887}
        height={161}
        alt=""
        className="rounded-lg mt-4"
      />
      <h2 className="pt-8 text-3xl">CONTACT AFFILIATE SUPPORT</h2>

      <div className="bg-background text-slate-900 p-8 rounded-md flex flex-col items-center justify-center lg:px-32">
        <Mails className="h-20 w-20 text-gray-600" />
        <p className="pt-4 font-bold">info@endoterec.com</p>
      </div>
    </motion.div>
  );
}
