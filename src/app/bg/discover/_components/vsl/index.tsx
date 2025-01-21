"use client";

import { useBottles } from "@/hooks/bottles";
import { useEffect, useRef, useState } from "react";
import "./video-style.css";
import { Container } from "@/components/container";
import Dtc from "@/components/sections/dtc";

export function VslSection() {
  const { turnOff, turnOn } = useBottles();
  const [windowWidth, setWindowWidth] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  function insertVideoTimer() {
    if (!videoRef.current) {
      console.error("Video Not Found!");
      return;
    }

    const handleTimeUpdate = () => {
      const targetTime = 1591; // 26 minutos e 31 segundos

      if (Math.floor(videoRef.current!.currentTime) >= targetTime) {
        turnOn();
        setShowContent(true);
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
      script.src =
        "https://scripts.converteai.net/bbdb9907-ae9e-49fa-8d8b-b1d3886ec07c/players/677c4aa8cc0f15daf49857e9/player.js";
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
    turnOff();
    setWindowWidth(window.innerWidth);

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
            IN 2025, BLOOD SUGAR BALANCE IS{" "}
            <br />
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
            No fads, no frustrations. Uncover the natural solution that’s reshaping lives and boosting vitality worldwide.
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
              id="vid_677c4aa8cc0f15daf49857e9"
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                border: windowWidth < 1000 ? "1px solid yellow" : "",
                padding: "133.33333333333331% 0 0",
                borderRadius: "25px",
              }}
              className="rounded-full"
            >
              <img
                id="thumb_67731c0f1aaa74b67916f69d"
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
                id="backdrop_67731c0f1aaa74b67916f69d"
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
        {/* References Mobile*/}
        {!showContent && (
          <div
            className="grid grid-cols-3 grid-rows-2 gap-y-2 justify-items-center items-center
      lg:hidden"
          >
            <img width={"70px"} src="./nature_news.svg" alt="" />
            <img src="./science_daily.svg" alt="" />
            <img width={"88px"} src="./webmd.svg" alt="" />
            <div className="flex justify-center col-span-3 gap-4">
              <img src="./cell.svg" alt="" />
              <img src="./european.svg" alt="" />
            </div>
          </div>
        )}
      </Container>
      {showContent && <Dtc withFooter={false} />}
    </>
  );
}
