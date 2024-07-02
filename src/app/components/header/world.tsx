"use client";
import React from "react";
import Image from "next/image";
import WorldImage from "./images/world.svg";
import WorldDropdown from "./international/worldDropdown";
import { AnimatePresence } from "framer-motion";

export default function World({
  hidden,
  toggle,
}: {
  hidden: boolean;
  toggle: () => void;
}) {
  return (
    <div className="relative">
      <button
        onClick={toggle}
        className="xl:w-[58px] xl:h-[50px] size-[46px] hidden md:flex align-middle justify-items-center py-3 px-5 bg-white-400 rounded-xl hover:bg-grey-50 duration-300"
      >
        <span className="size-[22px] block relative mx-auto">
          <Image
            src={WorldImage}
            alt="globe"
            fill
            sizes="100%"
            className="size-auto"
          />
        </span>
      </button>
      <AnimatePresence>{!hidden && <WorldDropdown />}</AnimatePresence>
    </div>
  );
}
