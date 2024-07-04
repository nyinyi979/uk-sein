"use client";
import CategoryFilter from "@/components/categoryFilter";
import ColorFilter from "./colorFilter";
import SizeFilter from "./sizeFilter";
import MaterialFilter from "./materialFilter";
import PriceFilter from "./priceFilter";
import Toggle from "../../../../components/toggle";
import { prodcutFilterWithSet, productFilter } from "@/app/types/type";
import { motion } from "framer-motion";

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
      className="xl:w-fit xl:h-fit w-full h-full xl:relative fixed top-0 left-0 xl:bg-transparent bg-popup-bg xl:z-auto z-[100]"
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
        className="xl:w-fit w-full xl:h-fit h-[616px] overflow-y-auto xl:pt-0 pt-6 xl:pb-0 pb-[50px] bg-white xl:relative fixed bottom-0 left-0 xl:rounded-none rounded-t-3xl"
      >
        <div className="xl:w-[274px] md:w-[663px] w-full xl:h-auto mx-auto flex flex-col xl:gap-6 gap-8 md:px-0 px-5">
          <div className="xl:block flex flex-row justify-between">
            <button
              onClick={resetFilter}
              className={`xl:w-full w-fit h-[56px] xl:p-0 p-2.5 ${filterApplied ? "xl:bg-red-500 text-red-500 xl:text-white" : "xl:bg-grey-50 text-grey-100 xl:text-white"} md:text-base text-sm rounded-[10px] duration-300`}
            >
              Clear filters
            </button>
            <p className="xl:hidden font-sora font-semibold text-lg my-2">
              Filters
            </p>
            <button
              onClick={hide}
              className={`xl:hidden w-fit h-[56px] py-2.5 px-[16px] ${filterJustApplied ? "bg-success hover:bg-sucessHover" : "bg-grey-50"} md:text-base text-sm rounded-[10px] text-white`}
            >
              Save
            </button>
          </div>
          <Toggle name="Category">
            <CategoryFilter
              categories={possibleFilters.categories}
              category={category}
              updateCategory={updateCategory}
            />
          </Toggle>
          <Toggle name="Color">
            <ColorFilter
              colors={possibleFilters.color}
              color={appliedFilters.color}
              toggleColor={toggleColor}
            />
          </Toggle>
          <Toggle name="Size">
            <SizeFilter
              sizes={possibleFilters.sizes}
              size={appliedFilters.sizes}
              toggleSize={toggleSize}
            />
          </Toggle>
          <Toggle name="Material">
            <MaterialFilter
              materials={possibleFilters.material}
              material={appliedFilters.material}
              toggleMaterial={toggleMaterial}
            />
          </Toggle>
          <Toggle name="Price Per Item">
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
