import Image from "next/image";
import Cross from "@/svg/cross.svg";
import { motion } from "framer-motion";
import { filter } from "./Filter";

export default function FilterList({
  filters,
  toggleColor,
  toggleMaterial,
  toggleSize,
}: {
  filters: filter;
  toggleColor: (clr: string) => void;
  toggleSize: (size: string) => void;
  toggleMaterial: (mat: string) => void;
}) {
  return (
    <motion.div className="h-fit col-span-3 flex flex-row gap-[18px]" layout>
      {filters.color !== "" && (
        <div className="w-fit h-full flex flex-row gap-[10px] py-2 px-4 bg-khaki-50 rounded-lg">
          {filters.color}
          <Image
            src={Cross}
            alt="cross"
            width={10}
            height={10}
            className="pt-1"
            onClick={() => toggleColor(filters.color)}
          />
        </div>
      )}
      {filters.material !== "" && (
        <div className="w-fit h-full flex flex-row gap-[10px] py-2 px-4 bg-khaki-50 rounded-lg">
          {filters.material}
          <Image
            src={Cross}
            alt="cross"
            width={10}
            height={10}
            className="pt-1"
            onClick={() => toggleMaterial(filters.material)}
          />
        </div>
      )}
      {filters.size !== "" && (
        <div className="w-fit h-full flex flex-row gap-[10px] py-2 px-4 bg-khaki-50 rounded-lg">
          {filters.size}
          <Image
            src={Cross}
            alt="cross"
            width={10}
            height={10}
            className="pt-1"
            onClick={() => toggleSize(filters.size)}
          />
        </div>
      )}
    </motion.div>
  );
}
