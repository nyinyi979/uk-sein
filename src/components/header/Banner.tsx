"use client";
import Image from "next/image";
import Link from "next/link";
import DrawerBtn from "./drawer/DrawerBtn";
import LoginSide from "./LoginSide";
import SearchBarInBanner from "./SearchBar";
import React from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";

export default function Banner({
  searchSide = false,
}: {
  searchSide?: boolean;
}) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = React.useState(false);
  const [prevScroll, setPrevScroll] = React.useState(0);

  function update(latest: number, prev: number): void {
    if (latest < prev) {
      setHidden(false);
      // console.log("visible");
    } else if (latest > 100 && latest > prev) {
      setHidden(true);
      // console.log("hidden");
    }
  }

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    update(latest, prevScroll);
    setPrevScroll(latest);
  });
  console.log(hidden)
  return (
    <motion.div
      animate={{top: hidden ? "-100px" : "0px"}}
      transition={{
        duration: 0.2
      }}
      className={`w-full sticky xl:flex xl:flex-row top-0 left-0 ${searchSide ? "hidden" : "grid grid-cols-121"} xl:gap-[70px] gap-5 align-middle xl:justify-between bg-white xl:px-[126px] md:px-[50px] px-6 xl:py-5 py-0 border-b border-gray-300 z-[11] duration-300`}
    >
      <DrawerBtn />
      <Link
        href="/"
        className="xl:w-[106px] xl:h-[72px] w-[74px] h-[47px] xl:mt-2 mt-4 mx-auto relative"
      >
        <Image
          src="/images/UKSEIN.svg"
          alt="UKSEIN1"
          fill
          sizes="100%"
          className="size-full object-contain"
        />
      </Link>
      <div className="w-fit xl:block hidden relative">
        <SearchBarInBanner />
      </div>
      <LoginSide />
    </motion.div>
  );
}
