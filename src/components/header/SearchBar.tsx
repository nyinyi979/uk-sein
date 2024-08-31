import React from "react";
import Image from "next/image";
import useWindowSize from "../hooks/useWindowSize";
import SearchIcon from "@/svg/search.svg";
import CrossIcon from "@/svg/cross.svg";
import DefaultResults from "./searchbarComponents/DefaultSearches";
import SearchResults from "./searchbarComponents/SearchResults";
import { useTranslations } from "next-intl";
import axios from "@/utils/axios";
import { AnimatePresence } from "framer-motion";
import { showErrorAlert } from "../Alert";
import { variant } from "@/types/type";

export default function SearchBarInBanner() {
  const [searchInput, setSearchInput] = React.useState("");
  const [searchResults, setSearchResults] = React.useState<variant[]>([]);
  const [hidden, setHidden] = React.useState(true);
  const size = useWindowSize();
  const show = () => setHidden(false);
  const hide = () => setHidden(true);
  const onBlur = () => {
    if (searchInput === "") hide();
  };
  const forceBlur = () => {
    setSearchInput("");
    hide();
  };
  const updateSearchValue = (val: string) => {
    setSearchInput(val);
  };
  const t = useTranslations("banner");
  const placeholder = size[0] > 1440 ? t("search-products") : t("search");

  const searchBtnClick = () => {
    if (searchInput !== "") {
      setSearchInput("");
    }
  };
  const escCapture = () => {
    if (searchInput !== "") setSearchInput("");
    else {
      hide();
      document.getElementById("search")?.blur();
    }
  };

  React.useEffect(() => {
    hide();
  }, [size]);
  React.useEffect(() => {
    if (searchInput === "") return;
    let timer = setTimeout(() => {
      // fetch from api
      axios
        .get(`search/?color=&size=&material=&category=&query=${searchInput}`)
        .then((data) => {
          setSearchResults(data.data);
          // setLoading(false)
        })
        .catch(() => {
          showErrorAlert({ text: "Something went wrong" });
        });
    }, 500);
    return () => clearInterval(timer);
  }, [searchInput]);

  return (
    <div
      onBlur={onBlur}
      onKeyDown={(ev) => ev.key === "Escape" && escCapture()}
      className="xl:w-[651px] md:w-[664px] w-[340px] h-fit relative py-4 mx-auto"
    >
      <input
        value={searchInput}
        onChange={(e) => updateSearchValue(e.target.value)}
        onFocus={show}
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
      <AnimatePresence>
        {!hidden && (
          <>
            {searchInput === "" ? (
              <DefaultResults />
            ) : (
              <SearchResults
                searchResults={searchResults}
                onLinkClick={forceBlur}
              />
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
