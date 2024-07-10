import React from "react";
import SearchBar from "@/components/search/searchBar";
import SearchResult from "./searchResult/searchResult";
import { AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
export default function SearchBarInBanner() {
  const [searchValue, setSearchValue] = React.useState("");
  const [hidden, setHidden] = React.useState(true);
  const t = useTranslations("banner");
  const router = useRouter();
  const show = () => setHidden(false);
  const hide = () => setHidden(true);
  const [searchResult, setSearchResult] = React.useState<string[]>([]);
  React.useEffect(() => {
    let timer = setTimeout(() => {
      // fetch from api
      setSearchResult(["Example", "Example", "Example", "Example"]);
    }, 2000);
  }, [searchValue]);
  return (
    <>
      <SearchBar
        width="w-[651px]"
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        placeholder={t("search-products")}
        onBlur={hide}
        onFocus={show}
        onEnter={() => router.push(`/category/${searchValue}`)}
      />
      <AnimatePresence>
        {!hidden && (
          <SearchResult searchResults={searchResult} searhValue={searchValue} />
        )}
      </AnimatePresence>
    </>
  );
}
