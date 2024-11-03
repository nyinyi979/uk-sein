import React from "react";
import Image from "next/image";
import SearchIcon from "@/svg/search.svg";
import CrossIcon from "@/svg/cross.svg";
import DefaultResults from "./DefaultSearches";
import SearchResults from "./SearchResults";
import axios from "@/utils/axios";
import useWindowSize from "@/components/hooks/useWindowSize";
import { useTranslations } from "next-intl";
import { AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { variant } from "@/types/type";
import { showErrorAlert } from "@/components/Alert";

export default function SearchBarForSmallScreen() {
  const [searchInput, setSearchInput] = React.useState("");
  const [searchResult, setSearchResult] = React.useState<variant[]>([]);
  const [loading, setLoading] = React.useState(false);
  const size = useWindowSize();
  const updateSearchValue = (val: string) => {
    setSearchInput(val);
  };
  const t = useTranslations("banner");
  const placeholder =
    size[0] > 1440 ? t("search-products") : t("search-products");

  React.useEffect(() => {
    if (searchInput === "") return;
    let timer = setTimeout(() => {
      // fetch from api
      axios
        .get(`search/?color=&size=&material=&category=&query=${searchInput}`)
        .then((data) => {
          setSearchResult(data.data);
          setLoading(false);
        })
        .catch(() => {
          showErrorAlert({ text: "Something went wrong" });
        });
    }, 500);
    return () => clearInterval(timer);
  }, [searchInput]);

  const searchBtnClick = () => {
    if (searchInput !== "") {
      setSearchInput("");
    }
  };
  const query = useSearchParams().get("query");
  return (
    <div className="w-full xl:hidden relative py-4 mx-auto">
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
      {query === null && <DefaultResults small />}
      {query === null && searchInput !== "" && (
        <AnimatePresence>
          <SearchResults
            searchResults={searchResult}
            onLinkClick={() => updateSearchValue("")}
          />
        </AnimatePresence>
      )}
    </div>
  );
}
