"use client";
import React from "react";
import axios from "@/utils/axios";
import { useTranslations } from "next-intl";
import EachCategory, { category, CategoryLoading } from "./EachCategory";
import { showErrorAlert } from "@/components/Alert";
import { useCategoryStore } from "@/store/category";
import SearchIcon from "@/svg/search.svg";
import Image from "next/image";
import Input from "@/components/input/Input";

export default function Categories() {
  const { categories, setCategories } = useCategoryStore();
  const [loading, setLoading] = React.useState(false);
  const [search, setSearch] = React.useState({
    open: false,
    value: "",
  });
  const [searchValue, setSearchValue] = React.useState("");
  React.useEffect(() => {
    setLoading(true);
    const filter = {
      page: 1,
      page_size: 5,
      order_by: "-created_at",
    };
    const url = `category/list/all/?query=${search.value}&page_size=${filter.page_size}&order_by=${filter.order_by}&page=${filter.page}`;
    axios
      .get(url)
      .then((data) => {
        setCategories(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        showErrorAlert({
          text: "Something went wrong while trying to display categories!",
        });
      });
  }, [search.value]);
  const t = useTranslations("product");
  return (
    <div className="flex flex-col xl:gap-[50px] md:gap-8 gap-6">
      <p className="flex flex-wrap gap-3 items-center justify-between">
        <span className="font-sora font-bold xl:text-5xl md:text-2xl text-lg">
          {t("product-categories")}
        </span>
        <span
          onClick={() => setSearch({ open: !search.open, value: "" })}
          className="relative size-6"
        >
          <Image src={SearchIcon} alt="search icon" fill sizes="100%" />
        </span>
      </p>
      {search.open && (
        <div className="relative">
          <Input
            id="search"
            value={searchValue}
            // className="w-full p-3 outline-none rounded-md border border-grey-50 focus:border-grey-200"
            setValue={(value) => {
              setSearchValue(value);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter")
                setSearch({ ...search, value: searchValue });
            }}
            placeholder="Enter something to search!"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-grey-400">
            Press Enter
          </span>
        </div>
      )}
      <div className="w-full grid ssm:grid-cols-3 sm:grid-cols-2 xl:gap-[33px] md:gap-[18px] gap-4">
        {loading ? (
          <CategoryLoading />
        ) : categories.length > 0 ? (
          categories.map((c, index) => (
            <EachCategory key={c.name + index} category={c} />
          ))
        ) : (
          searchValue !== "" && <p className="font-medium">No Category found</p>
        )}
      </div>
    </div>
  );
}
