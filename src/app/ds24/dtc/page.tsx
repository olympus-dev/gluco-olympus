"use client";

import Dtc from "@/components/sections/dtc";
import MainPageLoader from "@/utils/main-products-script";

export default function Page() {
  return (
    <>
      <MainPageLoader />
      <Dtc />
    </>
  );
}
