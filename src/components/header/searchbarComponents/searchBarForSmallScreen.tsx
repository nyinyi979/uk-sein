import React from "react";
import Image from "next/image";
import SearchIcon from "@/svg/search.svg";
import CrossIcon from "@/svg/cross.svg";
import DefaultResults from "./defaultSearches";
import SearchResults from "./searchResults";
import useWindowSize from "@/components/hooks/useWindowSize";
import { useTranslations } from "next-intl";
import { AnimatePresence } from "framer-motion";

export default function SearchBarForSmallScreen() {
  const [searchInput, setSearchInput] = React.useState("");
  const [searchResult, setSearchResult] = React.useState<string[]>([]);
  const size = useWindowSize();

  const updateSearchValue = (val: string) => {
    setSearchInput(val);
  };
  const t = useTranslations("banner");
  const placeholder =
    size[0] > 1440 ? t("search-products") : t("search-products");

  React.useEffect(() => {
    let timer = setTimeout(() => {
      // fetch from api
      setSearchResult(["Example", "Example2", "Example3", "Example4"]);
    }, 2000);
  }, [searchInput]);

  const searchBtnClick = () => {
    if (searchInput !== "") {
      setSearchInput("");
    }
  };
  return (
    <div className="xl:hidden md:w-[664px] w-[340px] relative py-4 mx-auto">
      <input
        value={searchInput}
        onChange={(e) => updateSearchValue(e.target.value)}
        id="search"
        className={`w-full mx-auto xl:h-[62px] h-[52px] xl:pl-16 xl:p-5 pl-6 rounded-[15px] outline-none border border-grey-200 focus:border-grey-500 duration-300`}
        placeholder={placeholder}
      />
      <div
        onClick={searchBtnClick}
        className="size-[18px] absolute xl:left-5 right-5 xl:top-[38px] top-8 z-[2]"
      >
        <Image src={SearchIcon} alt="search icon" fill sizes="100%" />
      </div>
      {searchInput !== "" && (
        <button
          onClick={searchBtnClick}
          className="size-[18px] absolute right-5 xl:top-[38px] top-8 bg-white z-[3]"
        >
          <Image src={CrossIcon} alt="search icon" fill sizes="100%" />
        </button>
      )}
      <DefaultResults small />
      {searchInput !== "" && (
        <AnimatePresence>
          <SearchResults searchResults={searchResult} />
        </AnimatePresence>
      )}
    </div>
  );
}
