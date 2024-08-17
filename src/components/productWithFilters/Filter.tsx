"use client";
import CategoryFilter from "@/components/actions/CategoryFilter";
import ColorFilter from "./ColorFilter";
import SizeFilter from "./SizeFilter";
import MaterialFilter from "./MaterialFilter";
import PriceFilter from "./PriceFilter";
import { prodcutFilterWithSet, productFilter } from "@/types/type";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Toggle from "@/components/actions/Toggle";

export default function Filter({
  appliedFilters,
  filterApplied,
  possibleFilters,
  resetFilter,
  category,
  updateCategory,
  toggleColor,
  toggleSize,
  toggleMaterial,
  minimum,
  minimumPercent,
  maximum,
  maximumPercent,
  setMinimum,
  setMaximum,
  setMaximumInPercent,
  setMinimumInPercent,
  hidden,
  hide,
  show,
  filterJustApplied,
  filterJustAppliedOff,
}: {
  resetFilter: () => void;
  filterApplied: boolean;
  possibleFilters: productFilter;
  appliedFilters: prodcutFilterWithSet;
  category: string;
  updateCategory: (cat: string) => void;
  toggleColor: (clr: string) => void;
  toggleSize: (size: string) => void;
  toggleMaterial: (mat: string) => void;
  minimum: number;
  maximum: number;
  minimumPercent: number;
  maximumPercent: number;
  setMinimum: (min: string) => void;
  setMaximum: (max: string) => void;
  setMinimumInPercent: (min: string) => void;
  setMaximumInPercent: (max: string) => void;
  hidden: boolean;
  hide: () => void;
  show: () => void;
  filterJustApplied: boolean;
  filterJustAppliedOff: () => void;
}) {
  const t = useTranslations("category");
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      exit={{
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
      onClick={hide}
      className="lg:w-fit lg:h-fit size-full lg:relative fixed top-0 left-0 xl:bg-transparent bg-popup-bg xl:z-auto z-[9999]"
    >
      <motion.div
        animate={{ translateY: [200, 0] }}
        exit={{
          translateY: 200,
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
        className="lg:w-fit w-full lg:h-fit h-[616px] overflow-y-auto xl:pt-0 pt-6 xl:pb-0 pb-[50px] bg-white lg:relative fixed bottom-0 left-0 lg:rounded-none rounded-t-3xl"
      >
        <div className="lg:w-[274px] md:w-[663px] w-full xl:h-auto mx-auto flex flex-col xl:gap-6 gap-8 md:px-0 px-5">
          <div className="lg:block flex flex-row justify-between">
            <button
              onClick={resetFilter}
              className={`lg:w-full w-fit h-[56px] xl:p-0 p-2.5 ${filterApplied ? "xl:bg-red-500 text-red-500 xl:text-white" : "xl:bg-grey-50 text-grey-100 xl:text-white"} md:text-base text-sm rounded-[10px] duration-300`}
            >
              {t("clear-filters")}
            </button>
            <p className="lg:hidden font-sora font-semibold text-lg my-2">
              {t("filters")}
            </p>
            <button
              onClick={hide}
              className={`lg:hidden w-fit h-[56px] py-2.5 px-4 ${filterJustApplied ? "bg-success hover:bg-sucessHover" : "bg-grey-50"} md:text-base text-sm rounded-[10px] text-white`}
            >
              {t("save")}
            </button>
          </div>
          <Toggle name={t("category")}>
            <CategoryFilter
              categories={possibleFilters.categories}
              category={category}
              updateCategory={updateCategory}
            />
          </Toggle>
          <Toggle name={t("color")}>
            <ColorFilter
              colors={possibleFilters.color}
              color={appliedFilters.color}
              toggleColor={toggleColor}
            />
          </Toggle>
          <Toggle name={t("size")}>
            <SizeFilter
              sizes={possibleFilters.sizes}
              size={appliedFilters.sizes}
              toggleSize={toggleSize}
            />
          </Toggle>
          <Toggle name={t("material")}>
            <MaterialFilter
              materials={possibleFilters.material}
              material={appliedFilters.material}
              toggleMaterial={toggleMaterial}
            />
          </Toggle>
          <Toggle name={t("price-per-item")}>
            <PriceFilter
              maximum={maximum}
              minimum={minimum}
              setMaximum={setMaximum}
              setMinimum={setMinimum}
              setMaximumInPercent={setMaximumInPercent}
              setMinimumInPercent={setMinimumInPercent}
              maximumPercent={maximumPercent}
              minimumPercent={minimumPercent}
              possibleMaximum={possibleFilters.pricePerItem.maximum}
              possibleMinimum={possibleFilters.pricePerItem.minimum}
            />
          </Toggle>
        </div>
      </motion.div>
    </motion.div>
  );
}
