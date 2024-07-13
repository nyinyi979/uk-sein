import Image from "next/image";
import Cross from "@/svg/cross.svg";
import { filter } from "@/types/type";
import { motion } from "framer-motion";

export default function Filters({
  filters,
  toggleColor,
  toggleMaterial,
  toggleSize,
}: {
  filters: filter[];
  toggleColor: (clr: string) => void;
  toggleSize: (size: string) => void;
  toggleMaterial: (mat: string) => void;
}) {
  return (
    <motion.div className="h-fit col-span-3 flex flex-row gap-[18px]" layout>
      {filters[0].values.map((clr) => (
        <div
          key={clr}
          className="w-fit h-full flex flex-row gap-[10px] py-2 px-4 bg-khaki-50 rounded-lg"
        >
          {clr}
          <Image
            src={Cross}
            alt="cross"
            width={10}
            height={10}
            className="pt-1"
            onClick={() => toggleColor(clr)}
          />
        </div>
      ))}
      {filters[1].values.map((size) => (
        <div
          key={size}
          className="w-fit h-full flex flex-row gap-[10px] py-2 px-4 bg-khaki-50 rounded-lg"
        >
          {size}
          <Image
            src={Cross}
            alt="cross"
            width={10}
            height={10}
            className="pt-2"
            onClick={() => toggleSize(size)}
          />
        </div>
      ))}
      {filters[2].values.map((mat) => (
        <div
          key={mat}
          className="w-fit h-full flex flex-row gap-[10px] py-2 px-4 bg-khaki-50 rounded-lg"
        >
          {mat}
          <Image
            src={Cross}
            alt="cross"
            width={10}
            height={10}
            className="pt-2"
            onClick={() => toggleMaterial(mat)}
          />
        </div>
      ))}
    </motion.div>
  );
}
