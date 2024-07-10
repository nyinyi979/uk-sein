import React from "react";
import DefaultResults from "./default";
import SearchResults from "./searchResults";
import { motion } from "framer-motion";

export default function SearchResult({
  searchResults,
  searhValue,
}: {
  searchResults: string[];
  searhValue: string;
}) {
  const trendingSearch = [
    "Chairs",
    "Pillow",
    "Tables",
    "Chairs",
    "ချည်သားခေါင်းဦး",
  ];
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
      className="xl:w-[651px] h-fit flex flex-col gap-10 absolute right-0 top-24 px-[35px] pt-[35px] pb-[50px] rounded-[15px] bg-white shadow-dropdown z-[1000]"
    >
      {searhValue === "" ? (
        <DefaultResults trendingSearch={trendingSearch} />
      ) : (
        <SearchResults searchResults={searchResults} />
      )}
    </motion.div>
  );
}
