"use client";

import { Input } from "@/components/input";
import { OrderButton } from "@/components/order-button";
import { motion } from "framer-motion";
import { Link } from "lucide-react";
// import NextLink from "next/link";
import { useState } from "react";

/* eslint-disable react/no-unescaped-entities */
export function Promolinks() {
  const [campaignId, setCampaignId] = useState("");
  const [affiliateId, setAffiliateId] = useState("");
  const [linksVisible, setLinksVisible] = useState(false);

  const [boxChecked, setBoxChecked] = useState(false);
  const variants = {
    hidden: { x: "30%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  function handleGenerate() {
    if ( campaignId.length > 0 && affiliateId.length > 0 && boxChecked ) {
      setLinksVisible(true)
    }
  }
  
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-brand text-xl">Get your promolinks here</h1>
      <h2 className="text-[#212121] font-bold text-2xl">
        GET YOUR PROMO LINKS HERE
      </h2>
      <div className="w-36 h-1 bg-brandDark mt-1" />
      {/* Steps section */}
      <div className="bg-[#06142B] w-full p-8 rounded-lg text-white flex flex-col gap-12">
        <div>
          <h2 className="text-2xl font-bold">
            <u>STEP 1</u> - CREATE A FREE DIGISTORE 24 ACCOUNT
          </h2>
          <p className="pt-2">
            If you don't have one, visit this link to create a free Digistore 24
            account.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">
            <u>STEP 2</u> - Apply for 65% revshare and our 4 upsell funnel!
          </h2>
          <p className="pt-2">
            You can request for an immediate upgrade to 65% revshare commission
            on the initial product and 60% commission on the 4 upsells! CPA is
            available for high volume affiliates, contact us to put in a
            request.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">
            <u>STEP 3</u> - Build Your Links!
          </h2>
          <p className="pt-2">
            Enter your Digistore 24 ID below, copy your link and start sending
            traffic to earn big payouts!
          </p>
        </div>
      </div>
      {/* Your affiliate Links */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        transition={{ duration: 0.8 }}
        className="bg-white w-full rounded-lg flex flex-col mt-4"
      >
        <div className="w-full bg-[#06142B] flex px-5 py-6 rounded-t-lg text-2xl font-bold items-center gap-2 text-white">
          <Link />
          YOUR AFFILIATE LINK
        </div>
        <div className="p-8 flex flex-col gap-4">
          <p>Sign up with an account at Digistore24.com</p>
          <p>
            Replace YOUR_ID with your own Digistore 24 affiliate ID or nickname
          </p>
          <p>
            Insert your own tracking reference following the campaign ID value
            (optional)
          </p>
          <p className="font-bold">Your Main Affiliate Link</p>
          <div>
            <div className="bg-[#06142B] w-full p-8 rounded-lg text-white flex flex-col gap-6">
              <Input
                placeholder="Your Afilliate ID"
                onChange={(e) => setAffiliateId(e.target.value)}
              />
              <Input
                placeholder="Campaign ID"
                onChange={(e) => setCampaignId(e.target.value)}
              />
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="checkbox"
                  onChange={(e) => setBoxChecked(e.target.checked)}
                />
                <label
                  htmlFor="checkbox"
                  className="font-semibold cursor-pointer"
                >
                  I agree with the terms and conditions
                </label>
              </div>
              {boxChecked && (
                <OrderButton text="Generate Promolinks" className="mx-auto" onClick={handleGenerate} />
              )}
              {linksVisible && (
                <>
                  <p className="font-semibold text-xl">
                    ✨ You're just one step to conversions!
                  </p>
                  <p className="font-semibold">Your VSL Page</p>
                  <Input
                    placeholder="VSL Page ID"
                    readOnly
                    value={`https://endoterec.com/ds24/reveal/?aff=${affiliateId}&cam=${campaignId}`}
                  />
                  <p className="font-semibold">Your Landing Page</p>
                  <Input
                    placeholder="Landing Page ID"
                    readOnly
                    value={`https://endoterec.com/ds24/lp-af/?aff=${affiliateId}&cam=${campaignId}`}
                  />
                  <p className="font-semibold">Your DTC Page</p>
                  <Input
                    placeholder="DTC Page ID"
                    readOnly
                    value={`https://endoterec.com/ds24/dtc-af/?aff=${affiliateId}&cam=${campaignId}`}
                  />
                </>
              )}
            </div>
          </div>
          {/* <p className="font-bold">
            By promoting our products you hereby agree to the affiliate terms
            <NextLink href="/" className="text-[#3B82F6] hover:text-[#60A5FA]">
              {" "}found here.
            </NextLink>
          </p>{" "} */}
          {/* Adicionar Link Aqui <- */}
        </div>
      </motion.div>
    </div>
  );
}
