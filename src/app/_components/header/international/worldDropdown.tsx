import mm from "../images/mm.png";
import eng from "../images/eng.png";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WorldDropdown() {
  return (
    <motion.div
      animate={{ translateY: [20, 0], opacity: [0, 1] }}
      exit={{ translateY: [0, 20], opacity: [1, 0] }}
      className="w-[200px] absolute right-0 -bottom-[8.5rem] p-2.5 rounded-[15px] bg-white shadow-dropdown z-[40]"
    >
      <button className="w-[180px] flex flex-row align-middle justify-items-center gap-3 py-3 px-2.5 rounded-[10px] hover:bg-grey-50 duration-300">
        <div className="size-8 relative">
          <Image
            src={eng}
            alt="english"
            fill
            sizes="100%"
            className="w-full h-full bg-cover"
          />
        </div>
        <p className="font-semibold">English</p>
      </button>
      <button className="w-[180px] flex flex-row align-middle justify-items-center gap-3 py-3 px-2.5 rounded-[10px] hover:bg-grey-50 duration-300">
        <div className="size-8 relative">
          <Image
            src={mm}
            alt="myanmar"
            fill
            sizes="100%"
            className="w-full h-full bg-cover"
          />
        </div>
        <p className="font-semibold">Myanmar</p>
      </button>
    </motion.div>
  );
}
