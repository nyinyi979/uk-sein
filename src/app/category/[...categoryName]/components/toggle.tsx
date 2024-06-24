import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Arrow from "../images/arrow.svg";
export default function Toggle({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <div
      className={`flex flex-col align-middle justify-center gap-[18px] p-[18px] rounded-[10px] border-[.5px] border-transparent hover:border-grey-300 duration-300`}
    >
      <p
        className="flex flex-row font-semibold cursor-pointer select-none"
        onClick={() => setExpanded(!expanded)}
      >
        {name}
        <span
          className={`ml-auto ${expanded ? "scale-y-[-1]" : "-translate-y-1"} duration-300`}
        >
          <Image
            src={Arrow}
            alt="arrow"
            width={18}
            height={10}
            className="w-auto h-auto mt-3"
          />
        </span>
      </p>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ maxHeight: 0 }}
            animate={{ maxHeight: 500 }}
            // cause lags just a bit when adding the following line
            // exit={{ maxHeight: 0 }}
            transition={{
              duration: 0.2,
              type: "just",
            }}
            className="h-fit overflow-y-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
