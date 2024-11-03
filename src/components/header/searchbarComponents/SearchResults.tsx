import { variant } from "@/types/type";
import { motion } from "framer-motion";
import Link from "next/link";
export default function SearchResults({
  searchResults,
  onLinkClick,
}: {
  searchResults: variant[];
  onLinkClick: () => void;
}) {
  return (
    <motion.div
      animate={{ translateY: [20, 0], opacity: [0, 1] }}
      exit={{
        translateY: 20,
        opacity: 0,
        transition: {
          stiffness: 19.75,
          mass: 1,
          damping: 6.67,
        },
      }}
      transition={{
        stiffness: 19.75,
        mass: 1,
        damping: 6.67,
      }}
      className="w-full h-fit flex flex-col gap-10 absolute left-0 top-24 mx-auto xl:px-[35px] xl:pt-[35px] xl:pb-[50px] p-[18px] rounded-[15px] bg-white shadow-search z-[10]"
    >
      <div className="flex flex-col gap-[18px]">
        {searchResults.map((s, index) => (
          <Link
            href={`/products/${s.product}`}
            onClick={onLinkClick}
            key={s.name + index}
            className="py-2.5 px-3 rounded-[5px] text-left hover:bg-white-500 duration-300"
          >
            {s.name}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
