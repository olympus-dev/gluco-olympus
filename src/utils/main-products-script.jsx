"use client";

import { useEffect } from "react";

export default function MainProductsLoader() {
  useEffect(() => {
    // Adiciona o primeiro script dinamicamente
    const script = document.createElement("script");
    script.src = "https://www.digistore24-scripts.com/service/digistore.js";
    script.async = true;
    document.body.appendChild(script);

    // Executa o segundo script após o carregamento do primeiro
    script.onload = () => {
      if (typeof digistorePromocode === "function") {
        digistorePromocode({
          product_id: 589404,
          adjust_all_urls: true,
          adjust_domain: true,
        });
      }
    };

    // Limpeza ao desmontar o componente
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
