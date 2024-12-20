"use client";

import { useEffect } from "react";

export default function UpsellDownsellLoader() {
  useEffect(() => {
    // Adiciona o primeiro script dinamicamente
    const script = document.createElement("script");
    script.src = "https://www.digistore24-scripts.com/service/digistore.js";
    script.async = true;
    document.body.appendChild(script);

    // Executa o segundo script após o carregamento do primeiro
    script.onload = () => {
      if (typeof digistoreUpsell === "function") {
        digistoreUpsell();
      }
    };

    // Limpeza ao desmontar
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
