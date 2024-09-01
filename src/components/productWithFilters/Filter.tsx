"use client";
import CategoryFilter from "@/components/actions/CategoryFilter";
import ColorFilter from "./ColorFilter";
import SizeFilter from "./SizeFilter";
import MaterialFilter from "./MaterialFilter";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Toggle from "@/components/actions/Toggle";
import React, { Dispatch, SetStateAction } from "react";
import { variant } from "@/types/type";
const initialPossibleFilters: possibleFilters = {
  category: new Set(),
  color: new Set(),
  material: new Set(),
  size: new Set(),
  maxium: 0,
  minimum: 0,
};
const initialFilters = {
  category: "",
  color: "",
  material: "",
  cid: "",
  size: "",
  maximum: 0,
  minimum: 0,
};
export default function Filter({
  filters,
  setFilters,
  variations,
  hide,
  toggleColor,
  toggleMaterial,
  toggleSize,
  categoryName,
}: Filter) {
  const [price, setPrice] = React.useState({
    maximum: "",
    minimum: "",
  });
  const possibleFilters = React.useMemo(() => {
    const filt: possibleFilters = initialPossibleFilters;
    variations.map((v) => {
      v.categories.map((c) => filt.category.add(c));
      filt.color.add(v.color);
      filt.material.add(v.material);
      filt.size.add(v.size);
    });
    return {
      category: Array.from(filt.category),
      color: Array.from(filt.color),
      size: Array.from(filt.size),
      material: Array.from(filt.material),
      maximum: 0,
      minimum: 0,
    };
  }, [variations]);
  const filterApplied =
    filters.category !== decodeURI(categoryName) ||
    filters.color !== "" ||
    filters.material !== "" ||
    filters.size !== "";
  const resetFilter = () => {
    setFilters(initialFilters);
  };
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
              className={`lg:hidden w-fit h-[56px] py-2.5 px-4 ${filterApplied ? "bg-success hover:bg-sucessHover" : "bg-grey-50"} md:text-base text-sm rounded-[10px] text-white`}
            >
              {t("save")}
            </button>
          </div>
          <Toggle name={t("category")}>
            <CategoryFilter
              categories={possibleFilters.category}
              category={filters.category}
              updateCategory={(category) =>
                setFilters({ ...filters, category })
              }
            />
          </Toggle>
          <Toggle name={t("color")}>
            <ColorFilter
              colors={possibleFilters.color}
              color={filters.color}
              toggleColor={toggleColor}
            />
          </Toggle>
          <Toggle name={t("size")}>
            <SizeFilter
              sizes={possibleFilters.size}
              size={filters.size}
              toggleSize={toggleSize}
            />
          </Toggle>
          <Toggle name={t("material")}>
            <MaterialFilter
              materials={possibleFilters.material}
              material={filters.material}
              toggleMaterial={toggleMaterial}
            />
          </Toggle>
          {/* <Toggle name={t("price-per-item")}>
            <PriceFilter
              maximum={filters.maximum}
              minimum={filters.minimum}
              setMaximum={()=>{}}
              setMinimum={()=>{}}
              setMaximumInPercent={(maximum)=>setPrice({...price,maximum})}
              setMinimumInPercent={(minimum)=>setPrice({...price,minimum})}
              maximumPercent={price.maximum}
              minimumPercent={price.minimum}
              possibleMaximum={possibleFilters.maximum}
              possibleMinimum={possibleFilters.minimum}
            />
          </Toggle> */}
        </div>
      </motion.div>
    </motion.div>
  );
}

export type filter = {
  color: string;
  size: string;
  material: string;
  category: string;
  cid:string
};
type possibleFilters = {
  color: Set<string>;
  size: Set<string>;
  material: Set<string>;
  category: Set<string>;
  maxium: number;
  minimum: number;
};
interface Filter {
  filters: filter;
  setFilters: Dispatch<SetStateAction<filter>>;
  variations: variant[];
  categoryName: string;
  hide: () => void;
  toggleMaterial: (mat: string) => void;
  toggleSize: (size: string) => void;
  toggleColor: (clr: string) => void;
}
