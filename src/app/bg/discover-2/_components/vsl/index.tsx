/* eslint-disable react/no-unescaped-entities */
"use client";

import { useBottles } from "@/hooks/bottles";
import { useEffect, useRef } from "react";
import "./video-style.css";
import { Container } from "@/components/container";
import { Helmet } from "react-helmet";

export function VslSection() {
  const { turnOff } = useBottles();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  function insertVideo() {
    return new Promise<void>((resolve) => {
      document.onload = () => {
        const waitForVideoElement = setInterval(() => {
          const videoElement = document.getElementsByTagName("video")[0];
          if (videoElement) {
            videoRef.current = videoElement;
            clearInterval(waitForVideoElement); // Para a observação
            resolve();
          }
        }, 100); // Verifique a cada 100ms
      };

      document.onerror = () => {
        console.error("Erro ao carregar o script.");
        resolve(); // Resolva mesmo em caso de erro para não travar
      };

    });
  }

  useEffect(() => {
    turnOff();

    insertVideo();
  }, []);

  return (
    <>
      <Container className="flex flex-col overflow-hidden text-background text-center">
        {/* Header Text Section */}
        <div className="lg:gap-4 lg:flex lg:flex-col">
          <h1
            className="text-4xl leading-10
        lg:text-6xl lg:max-w-[600px] mx-auto"
          >
            IN 2025, BLOOD SUGAR BALANCE IS <br />
            <span
              className="text-[#222222] relative z-10
          before:content-[' '] before:z-[-1] before:absolute before:bg-yellow-300 before:h-12 before:w-full before:top-1/2 before:-translate-y-1/2
          lg:before:h-16"
            >
              SIMPLE!
            </span>
          </h1>
          <p
            className="hidden text-2xl
        lg:block pt-4 pb-8"
          >
            No fads, no frustrations. Uncover the natural solution that’s
            reshaping lives and boosting vitality worldwide.
          </p>
        </div>

        {/* Video Section */}
        <div className="pt-6 lg:pt-0">
          <div
            id="video-section"
            className="flex flex-col gap-8 vsl-video mx-auto
          lg:border-2 lg:border-yellow-300 lg:rounded-[25px] p-2"
          >
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<script type="text/javascript" id="scr_67734a30e548d24d0424d374"></script>',
              }}
            />
            <Helmet><script type="text/javascript" id="scr_67734a30e548d24d0424d374"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/bbdb9907-ae9e-49fa-8d8b-b1d3886ec07c/ab-test/67734a30e548d24d0424d374/player.js", s.async=!0,document.head.appendChild(s); </script></Helmet>
          </div>
          <p className="text-center text-sm pt-4">
            IMPORTANT UPDATE: PRESS PLAY and make sure your sound is ON. May
            take up to 10 seconds to load...
          </p>
          {/* References Desktop */}
          <div className="hidden lg:flex gap-4 py-12 w-full justify-center">
            <img width={"70px"} src="/nature_news.svg" alt="" />
            <img src="/science_daily.svg" alt="" />
            <img width={"88px"} src="/webmd.svg" alt="" />
            <img src="/cell.svg" alt="" />
            <img src="/european.svg" alt="" />
          </div>
        </div>
      </Container>
    </>
  );
}
