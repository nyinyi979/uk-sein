"use client";
import React from "react";
import axios from "@/utils/axios";
import { useTranslations } from "next-intl";
import EachCategory, { category, CategoryLoading } from "./EachCategory";
import { showErrorAlert } from "@/components/Alert";

export default function Categories() {
  const [categories, setCategories] = React.useState<category[]>([]);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const filter = {
      page: 1,
      query: "",
      page_size: 5,
      order_by: "-created_at",
    };
    const url = `category/list/all/?query=${filter.query}&page_size=${filter.page_size}&order_by=${filter.order_by}&page=${filter.page}`;
    axios
      .get(url)
      .then((data) => {
        setCategories(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
        showErrorAlert({
          text: "Something went wrong while trying to display categories!",
        });
      });
  }, []);
  const t = useTranslations("product");
  return (
    <div className="flex flex-col xl:gap-[50px] md:gap-8 gap-6">
      <p className="font-sora font-bold xl:text-5xl md:text-2xl text-lg">
        {t("product-categories")}
      </p>
      <div className="w-full grid ssm:grid-cols-3 sm:grid-cols-2 xl:gap-[33px] md:gap-[18px] gap-4">
        {loading ? (
          <CategoryLoading />
        ) : (
          categories.map((c, index) => (
            <EachCategory key={c.name + index} category={c} />
          ))
        )}
      </div>
    </div>
  );
}
