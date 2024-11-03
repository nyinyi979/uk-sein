import React from "react";
import SearchBar from "@/components/search/SearchBar";
import Image from "next/image";
import SearchIcon from "@/svg/search.svg";
import { useTranslations } from "next-intl";

export default function OrderTitle() {
  const t = useTranslations();
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <div className="flex flex-row">
      <div className="flex flex-col xl:gap-2.5 gap-1.5">
        <p className="font-sora font-bold xl:text-5xl md:text-[32px] text-lg">
          {t("orders.my-orders")}
        </p>
        <p className="font-semibold xl:text-lg md:text-base text-sm text-grey-100">
          {t("profile.account")} -{" "}
          <span className="text-grey-500">{t("checkout.order-history")}</span>
        </p>
      </div>
      <div className="xl:w-[430px] w-[280px] md:block hidden ml-auto">
        <SearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          width="w-full"
          placeholder={t("orders.search-by-keyword")}
        />
      </div>
      <div className="size-[46px] md:hidden ml-auto rounded-lg bg-white-700 hover:bg-grey-50 duration-300">
        <div className="size-4 mx-auto my-3.5 relative">
          <Image
            src={SearchIcon}
            alt="search icon"
            fill
            sizes="100%"
            className="size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
