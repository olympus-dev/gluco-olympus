"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface OrderButtonProps {
  className?: string;
  text?: string;
  onClick?: () => void;
}

export function OrderButton({ className, text = "Order now", onClick }: OrderButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={"relative inline-block font-sans w-fit " + className} onClick={onClick}>
      <a
        href="#checkout"
        className={`
          relative z-10 inline-flex items-center justify-center
          px-8 py-4 overflow-hidden
          font-bold text-gray-900 rounded-full
          group bg-gradient-to-br from-yellow-300 to-yellow-400
          hover:from-yellow-400 hover:to-yellow-500
          active:from-yellow-500 active:to-yellow-600
          focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-75
          transition-all duration-300 ease-out
          ${
            isHovered
              ? "shadow-lg shadow-yellow-200/50 scale-105"
              : "shadow-md scale-100"
          } 
        ` }
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="button"
        aria-label="Order now"
      >
        <span className="absolute right-0 w-12 h-44 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
        <span className="relative">{text}</span>
        <ArrowRight className="relative ml-2 w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
      </a>
      <span
        className={`
          absolute inset-0 rounded-full
          ${isHovered ? "animate-expand-border" : ""}
          bg-gradient-to-br from-yellow-200 to-yellow-300 opacity-0
        `}
        aria-hidden="true"
      ></span>
      <style jsx>{`
        @keyframes expand-border {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }
        .animate-expand-border {
          animation: expand-border 1.5s ease-out infinite;
        }
      `}</style>
    </div>
  );
}
