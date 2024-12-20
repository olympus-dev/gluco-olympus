/* eslint-disable react/no-unescaped-entities */
"use client";

import { Container } from "@/components/container";
import { useBottles } from "@/hooks/bottles";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import "../reveal/_components/vsl/video-style.css";
import CheckoutSection from "@/components/sections/checkout";
import CheckoutDesktop from "@/components/sections/checkout/_components/content-desktop";
import { ItemProps } from "@/components/sections/checkout/_components/content-items";
import UpsellDownsellLoader from "@/utils/downsell-upsell-script";

interface IVideoProps {
  src: string;
  backdrop: string;
  id: string;
  thumb: string;
}

export default function Upsell() {
  const { turnOff, turnOn } = useBottles();

  const [windowWidth, setWindowWidth] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [vslVideo, setVslVideo] = useState<IVideoProps>({} as IVideoProps);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [urlPath, setUrlPath] = useState("");

  const images: string[] = ["6-bottles.png", "9-bottles.png", "3-bottles.png"];

  const onePurchaseLinks: string[] = [
    "https://www.checkout-ds24.com/answer/yes?template=light&product=581474", // 6 bottles
    "https://www.checkout-ds24.com/answer/yes?template=light&product=581475", // 9 bottles
    "https://www.checkout-ds24.com/answer/yes?template=light&product=581473", // 3 bottles
  ];

  const items: ItemProps[] = [
    {
      price: 39,
      total: 234,
      discount: 354,
      subscribeBottle: 54.28, // Sem uso
      subscribeTotal: 162.84, // Sem uso
      quantity: 6,
      bestWhat: "Most Popular",
      daysSupply: 180,
    },
    {
      price: 29,
      total: 261,
      discount: 621,
      subscribeBottle: 44.1, // Sem uso
      subscribeTotal: 264.6, // Sem uso
      quantity: 9,
      bestWhat: "Best Value",
      daysSupply: 270,
    },
    {
      price: 59,
      total: 177,
      discount: 117,
      subscribeBottle: 84.55, // Sem uso
      subscribeTotal: 84.55, // Sem uso
      quantity: 3,
      daysSupply: 90,
    },
  ];

  function setVideo() {
    setVslVideo({
      backdrop: "backdrop_6751b5b6769b3c2a9e98d753",
      id: "vid_6751b5b6769b3c2a9e98d753",
      src: "https://scripts.converteai.net/bbdb9907-ae9e-49fa-8d8b-b1d3886ec07c/players/6751b5b6769b3c2a9e98d753/player.js",
      thumb: "thumb_6751b5b6769b3c2a9e98d753",
    } as IVideoProps);
  }

  function insertVideoTimer() {
    if (!videoRef.current) {
      console.error("Video Not Found!");
      return;
    }

    const handleTimeUpdate = () => {
      const targetTime = 264; // 26 minutos e 31 segundos

      if (Math.floor(videoRef.current!.currentTime) >= targetTime) {
        setShowContent(true);
        turnOn();
        // Remove o evento para evitar chamadas repetidas
        videoRef.current!.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };

    videoRef.current.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      // Limpa o evento ao desmontar o componente
      videoRef.current?.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }

  function insertVideo() {
    return new Promise<void>((resolve) => {
      const script = document.createElement("script");
      script.src = vslVideo.src;
      script.async = true;

      script.onload = () => {
        const waitForVideoElement = setInterval(() => {
          const videoElement = document.getElementsByTagName("video")[0];
          if (videoElement) {
            videoRef.current = videoElement;
            insertVideoTimer();
            clearInterval(waitForVideoElement); // Para a observação
            resolve();
          }
        }, 100); // Verifique a cada 100ms
      };

      script.onerror = () => {
        console.error("Erro ao carregar o script.");
        resolve(); // Resolva mesmo em caso de erro para não travar
      };

      document.head.appendChild(script);
    });
  }

  useEffect(() => {
    setUrlPath(window.location.pathname);
    turnOff();

    setVideo();
    insertVideo();
    setWindowWidth(window.innerWidth);
  }, [vslVideo.id]);

  return (
    <>
      <UpsellDownsellLoader />
      <Head>
        <title>Stock Up - Exclusive Offer</title>
        <link
          rel="preload"
          href="https://scripts.converteai.net/bbdb9907-ae9e-49fa-8d8b-b1d3886ec07c/players/6751b5b6769b3c2a9e98d753/player.js"
          as="script"
        />
        <link
          rel="preload"
          href="https://scripts.converteai.net/lib/js/smartplayer/v1/smartplayer.min.js"
          as="script"
        />
        <link
          rel="preload"
          href="https://images.converteai.net/bbdb9907-ae9e-49fa-8d8b-b1d3886ec07c/players/6751b5b6769b3c2a9e98d753/thumbnail.jpg"
          as="image"
        />
        <link
          rel="preload"
          href="https://cdn.converteai.net/bbdb9907-ae9e-49fa-8d8b-b1d3886ec07c/6751b55f28e5bef581fadd9f/main.m3u8"
          as="fetch"
        />
        <link
          rel="preload"
          href="https://scripts.converteai.net/bbdb9907-ae9e-49fa-8d8b-b1d3886ec07c/players/6751bf5970ca8d7e4fa49e1d/player.js"
          as="script"
        />
        <link
          rel="preload"
          href="https://images.converteai.net/bbdb9907-ae9e-49fa-8d8b-b1d3886ec07c/players/6751bf5970ca8d7e4fa49e1d/thumbnail.jpg"
          as="image"
        />
        <link
          rel="preload"
          href="https://cdn.converteai.net/bbdb9907-ae9e-49fa-8d8b-b1d3886ec07c/6751bee13ed02d63e31b199e/main.m3u8"
          as="fetch"
        />
        <link rel="dns-prefetch" href="https://cdn.converteai.net" />
        <link rel="dns-prefetch" href="https://scripts.converteai.net" />
        <link rel="dns-prefetch" href="https://images.converteai.net" />
        <link rel="dns-prefetch" href="https://api.vturb.com.br" />
      </Head>
      <main
        className="pb-16 lg:py-16 bg-repeat-round bg-fixed overflow-hidden
        lg:bg-contain"
        style={{
          backgroundImage: 'url("/bg.png")',
        }}
      >
        <Container className="bg-background rounded-lg px-2">
          <div className="py-8 lg:p-8">
            <ul className="flex items-center justify-center">
              <li className="flex flex-col items-center font-bold gap-1">
                <p>Shipping</p>
                <p className="text-background bg-slate-900 w-12 h-12 rounded-full flex justify-center items-center">
                  1
                </p>
              </li>
              <li
                className="h-1 bg-slate-900 mt-6 rounded-full w-16
              lg:w-36"
              ></li>{" "}
              {/* Divider */}
              <li className="flex flex-col items-center font-bold gap-1">
                <p>Options</p>
                <p className="text-background bg-slate-900 w-12 h-12 rounded-full flex justify-center items-center">
                  2
                </p>
              </li>
              <li
                className="h-1 bg-slate-900 mt-6 rounded-full w-16
              lg:w-36"
              ></li>{" "}
              {/* Divider */}
              <li className="flex flex-col items-center font-bold gap-1">
                <p className="text-slate-500">Summary</p>
                <p className="text-background bg-slate-500 w-12 h-12 rounded-full flex justify-center items-center cursor-not-allowed">
                  3
                </p>
              </li>
            </ul>
            <h1 className={`text-center mt-8 text-2xl lg:text-4xl text-brand`}>
              Your Order Is Not Complete Yet
            </h1>
            <h1 className="mt-2 text-center text-xl lg:text-4xl">
              Please Watch This Important Message Below Now
            </h1>
            {/* VIdeo */}
            <div
              id="video-section"
              className={`flex flex-col gap-8 vsl-video max-w-[550px] mx-auto my-4 lg:border-2 lg:rounded-[25px] lg:p-2 lg:border-brand`}
            >
              <div
                id={vslVideo.id}
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#06142B",
                  border: windowWidth < 1000 ? `2px solid #315AE0` : "",
                  padding: "133.33333333333331% 0 0",
                  borderRadius: "25px",
                }}
                className="rounded-full"
              >
                <img
                  id={vslVideo.thumb}
                  src="https://images.converteai.net/bbdb9907-ae9e-49fa-8d8b-b1d3886ec07c/players/673649b32eb080000b6d8a8c/thumbnail.jpg"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    borderRadius: "25px",
                  }}
                  alt="thumbnail"
                />
                <div
                  id={vslVideo.backdrop}
                  style={{
                    WebkitBackdropFilter: "blur(5px)",
                    backdropFilter: "blur(5px)",
                    position: "absolute",
                    top: 0,
                    height: "100%",
                    width: "100%",
                    borderRadius: "25px",
                  }}
                />
              </div>
            </div>
            <p
              className={`text-center pb-4 lg:max-w-[550px] lg:mx-auto lg:pb-8 ${
                showContent ? "pt-4" : ""
              }`}
            >
              <b>If you are not satisfied with your purchase</b> for any reason,
              contact us within sixty days at any time and{" "}
              <b>we will refund every penny of your investment.</b> <br />
              You don&lsquo;t even need to return the bottles.{" "}
            </p>
            {showContent && (
              <>
                <CheckoutSection
                  images={images}
                  items={items}
                  onePurchaseLinks={onePurchaseLinks}
                />
                <CheckoutDesktop
                  images={images}
                  items={items}
                  onePurchaseLinks={onePurchaseLinks}
                />
                <p className="font-bold max-w-[550px] mx-auto pt-4 text-center cursor-pointer underline">
                  <Link href="https://www.checkout-ds24.com/answer/no">
                    NO THANKS I understand that this is my only opportunity to
                    get access to this special offer, and I’m okay with missing
                    out. I’ll pass on this chance forever.
                  </Link>
                </p>
              </>
            )}
          </div>
        </Container>
        <Container>
          <Image
            src="/security_seals.png"
            alt="Security seals"
            width={450}
            height={200}
            className="mx-auto my-8"
          />
          <div className="text-background flex flex-col items-center justify-center gap-6 font-bold lg:flex-row lg:gap-12">
            <Link className="hover:underline" href="/privacy-policy">
              Privacy
            </Link>
            <Link className="hover:underline" href="/terms-of-service">
              Terms & Conditions
            </Link>
            <Link className="hover:underline" href="/disclaimer">
              Disclaimer
            </Link>
            <Link className="hover:underline" href="/return-policy">
              Returns Policy
            </Link>
            <Link
              className="hover:underline"
              href="mailto:support@endoterec.com"
            >
              Contact
            </Link>
          </div>
          <div
            className={`hidden text-center text-xs flex-col gap-8 mt-8 lg:flex ${
              urlPath === "/exclusive-offer"
                ? "text-gray-400"
                : "text-gray-100 font-semibold"
            }`}
          >
            <p>
              All statements and results presented on this website are for
              informational purposes only. They are not specific medical advice
              for any individual. Neither the website, nor product should
              substitute medical advice given by a certified health
              professional. If you have a health problem, or you have sensible
              allergies, are pregnant or diagnosed with chronic conditions, it
              is strongly recommended that you consult your doctor immediately
              and before taking any pills or supplements. Individual results may
              vary depending on the case. Copyright © 2023 Endoterec. All Rights
              Reserved.
            </p>
            <p>
              The website's content and the product for sale is based upon the
              author's opinion and is provided solely on an "AS IS" and "AS
              AVAILABLE" basis. You should do your own research and confirm the
              information with other sources when searching for information
              regarding health issues and always review the information
              carefully with your professional health care provider before using
              any of the protocols presented on this website and/or in the
              product sold here. Neither digistore nor the author are engaged in
              rendering medical or similar professional services or advice via
              this website or in the product, and the information provided is
              not intended to replace medical advice offered by a physician or
              other licensed healthcare provider. You should not construe
              digistore's sale of this product as an endorsement by digistore of
              the views expressed herein, or any warranty or guarantee of any
              strategy, recommendation, treatment, action, or application of
              advice made by the author of the product. Testimonials, case
              studies, and examples found on this page are results that have
              been forwarded to us by users of Boostaro products and related
              products, and may not reflect the typical purchaser's experience,
              may not apply to the average person and are not intended to
              represent or guarantee that anyone will achieve the same or
              similar Results.{" "}
            </p>
            <p>
              Statements on this website have not been evaluated by the Food and
              Drug Administration. Products are not intended to diagnose, treat,
              cure or prevent any disease. If you are pregnant, nursing, taking
              medication, or have a medical condition, consult your physician
              before using our products.
            </p>
          </div>
        </Container>
      </main>
    </>
  );
}
