import React from "react";
import CategoryDropdown from "./CategoryDropdown";
import { AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import Toggle from "@/components/actions/Toggle";
import CategoryFilter from "./CategoryFilter";

export default function WhitelistCateogry({
  categories,
  category,
  updateCategory,
}: {
  categories: string[];
  category: string;
  updateCategory: (cat: string) => void;
}) {
  const [hidden, setHidden] = React.useState(true);
  const t = useTranslations();
  return (
    <div className="lg:w-[274px] w-full lg:block flex flex-row">
      <div className="lg:hidden flex flex-col md:gap-1.5 gap-1">
        <p className="font-bold md:text-[32px] text-lg">
          {t("wishlist.wishlist")}{" "}
        </p>
        <p className="font-semibold md:text-base text-sm">
          <span className="text-grey-100">{t("profile.account")} - </span>
          {t("wishlist.wishlist")}
        </p>
      </div>
      <div className="ml-auto relative">
        <button
          onClick={() => setHidden(!hidden)}
          className="lg:hidden flex flex-row gap-3 p-[14px] rounded-lg bg-white-700 hover:bg-grey-50 duration-300"
        >
          <span className="font-semibold text-xs">
            {t("wishlist.all-category")}
          </span>
          <span className="w-[14px] h-3 mt-1.5">
            <svg
              viewBox="0 0 18 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.7632 1.42322L9.68281 9.75562C9.60776 9.83309 9.51864 9.89455 9.42055 9.93649C9.32245 9.97842 9.21731 10 9.11112 10C9.00493 10 8.89978 9.97842 8.80169 9.93649C8.70359 9.89455 8.61447 9.83309 8.53943 9.75562L0.45903 1.42322C0.307409 1.26687 0.222229 1.05482 0.222229 0.833703C0.222229 0.612592 0.307409 0.400535 0.45903 0.244186C0.610651 0.0878359 0.816294 0 1.03072 0C1.24514 0 1.45079 0.0878359 1.60241 0.244186L9.11112 7.98811L16.6198 0.244186C16.6949 0.166769 16.784 0.105359 16.8821 0.0634615C16.9802 0.021564 17.0853 0 17.1915 0C17.2977 0 17.4028 0.021564 17.5009 0.0634615C17.599 0.105359 17.6881 0.166769 17.7632 0.244186C17.8383 0.321602 17.8978 0.413509 17.9385 0.514659C17.9791 0.615808 18 0.72422 18 0.833703C18 0.943187 17.9791 1.0516 17.9385 1.15275C17.8978 1.2539 17.8383 1.3458 17.7632 1.42322Z"
                fill="#101010"
              />
            </svg>
          </span>
        </button>
        <AnimatePresence>
          {!hidden && (
            <CategoryDropdown
              categories={categories}
              category={category}
              updateCategory={updateCategory}
            />
          )}
        </AnimatePresence>
      </div>
      <div className="lg:block hidden">
        <Toggle name={t("category.category")}>
          <CategoryFilter
            categories={categories}
            category={category}
            updateCategory={updateCategory}
          />
        </Toggle>
      </div>
    </div>
  );
}
