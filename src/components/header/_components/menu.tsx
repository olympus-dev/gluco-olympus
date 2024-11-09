"use client";

import React from "react";
import ReactDom from "react-dom";

interface MenuProps {
  open: boolean;
  onClose: () => void;
}

export function Menu({ onClose, open }: MenuProps) {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  
  if (open) {
    return ReactDom.createPortal(
      <>
        <div
          className="bg-black/90 fixed top-0 right-0 left-0 bottom-0 z-40"
          onClick={onClose}
        ></div>
        <div className="fixed top-0 right-0 left-0 bottom-0 flex flex-col items-center justify-center text-white text-lg font-semibold gap-4 z-50" onClick={onClose}>
          <h1 className="text-lg font-bold pb-4">ENDOTEREC</h1>
          <a href="#formula" className="hover:text-gray-400 cursor-pointer">
            Formula
          </a>
          <a href="#benefits" className="hover:text-gray-400 cursor-pointer">
            Benefits
          </a>
          <a href="#faq" className="hover:text-gray-400 cursor-pointer">
            FAQ
          </a>
          <a href="#checkout" className="hover:text-gray-400 cursor-pointer">
            Order Now
          </a>
          <p className="cursor-pointer">Close</p>
        </div>
      </>,
      document.getElementById("portal") as HTMLElement
    );
  } else {
    return <></>;
  }
}
