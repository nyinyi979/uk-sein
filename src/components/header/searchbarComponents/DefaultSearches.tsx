import Link from "next/link";
import SearchNotFound from "./NotFound";
import RecentSearches from "./RecentSearches";
import { useTranslations } from "next-intl";
import { useUserStore } from "@/store/clientData";
import { motion } from "framer-motion";
import React from "react";

export default function DefaultResults({ small = false }: { small?: boolean }) {
  const t = useTranslations("search-bar");
  const recentSearches = useUserStore((state) => state.recentSearches);
  const trendingSearch = [
    "Chairs",
    "Pillow",
    "Tables",
    "Examples",
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
      onClick={(e) => e.stopPropagation()}
      className="w-full h-fit flex flex-col gap-10 xl:absolute relative mt-2 xl:right-0 xl:top-24 mx-auto xl:px-[35px] xl:pt-[35px] xl:pb-[50px] p-[18px] rounded-[15px] bg-white xl:shadow-search xl:z-[10]"
    >
      <div className="flex flex-col gap-6">
        <p className="font-semibold fonts-sora text-lg">
          {t("trending-searches")}
        </p>
        <div className="flex gap-[18px] flex-wrap">
          {trendingSearch.map((ts) => (
            <Link
              key={ts}
              href={`/category/${ts}`}
              className="py-2 px-5 rounded-[50px] border border-grey-100 font-medium text-sm hover:bg-grey-50 duration-300"
            >
              {ts}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <p className="font-semibold fonts-sora">{t("recent-searches")}</p>
        {recentSearches.length === 0 ? (
          <SearchNotFound />
        ) : (
          <RecentSearches recentSearches={recentSearches} />
        )}
      </div>
    </motion.div>
  );
}
