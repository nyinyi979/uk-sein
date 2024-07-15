"use client";
import BackArrow from "./images/backArrow.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
export default function SearchHeader() {
  const router = useRouter();
  const pushBack = router.back;
  return (
    <motion.div
      animate={{ translateY: [-50, 0] }}
      transition={{
        stiffness: 19.75,
        mass: 1,
        damping: 6.67,
      }}
      className="xl:hidden flex flex-row py-2.5 px-[50px] shadow-lightest"
    >
      <button
        onClick={pushBack}
        className="size-[46px] block bg-white-700 rounded-full hover:bg-white-400 duration-300"
      >
        <div className="w-[13px] h-4 mx-auto mt-[3px] relative">
          <Image
            src={BackArrow}
            alt="Back arrow"
            fill
            sizes="100%"
            className="size-auto"
          />
        </div>
      </button>
      <div className="w-full mt-2 font-semibold font-sora text-lg text-center">
        Search
      </div>
    </motion.div>
  );
}
