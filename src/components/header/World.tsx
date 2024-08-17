"use client";
import React from "react";
import Image from "next/image";
import WorldImage from "./images/world.svg";
import WorldDropdown from "./international/WorldDropdown";
import { AnimatePresence } from "framer-motion";

export default function World({
  hidden,
  toggle,
}: {
  hidden: boolean;
  toggle: () => void;
}) {
  return (
    <div className="relative z-[10]">
      <button
        onClick={toggle}
        className="xl:w-[58px] xl:h-[50px] md:size-[48px] size-[46px] hidden md:flex pt-3 xl:px-5 bg-white-400 xl:rounded-xl md:rounded-full rounded-xl hover:bg-grey-50 duration-300"
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
      <AnimatePresence>
        {!hidden && <WorldDropdown hide={toggle} />}
      </AnimatePresence>
    </div>
  );
}
