import Image from "next/image";
import Search from "./images/searchResult.png";
import RecentSearches from "./recentSearches";
import { useTranslations } from "next-intl";
import { useUserStore } from "@/store/clientData";

export default function DefaultResults({
  trendingSearch,
}: {
  trendingSearch: string[];
}) {
  const t = useTranslations("search-bar");
  const recentSearches = useUserStore((state) => state.recentSearches);
  return (
    <>
      <div className="flex flex-col gap-6">
        <p className="font-semibold fonts-sora">Trending Searches</p>
        <div className="flex gap-[18px] flex-wrap">
          {trendingSearch.map((ts) => (
            <p
              key={ts}
              className="py-2 px-5 rounded-[50px] border border-grey-100 font-medium text-sm"
            >
              {ts}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <p className="font-semibold fonts-sora">{t("recent-searches")}</p>
        {recentSearches.length === 0 ? (
          <div className="flex flex-col gap-4">
            <div className="size-[60px] relative mx-auto">
              <Image
                src={Search}
                alt="search not found"
                sizes="100%"
                fill
                className="size-full"
              />
            </div>
            <p className="font-medium text-center text-sm text-grey-200">
              {t("no-recent")}
            </p>
          </div>
        ) : (
          <RecentSearches recentSearches={recentSearches} />
        )}
      </div>
    </>
  );
}
