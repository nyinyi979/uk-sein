"use client";

import { prodcutFilterWithSet, productFilter } from "@/app/types/type";
import React from "react";
import Toggle from "./toggle";
import ColorFilter from "./colorFilter";
import SizeFilter from "./sizeFilter";
import MaterialFilter from "./materialFilter";
import PriceFilter from "./priceFilter";

export default function Filter({
  appliedFilters,
  filterApplied,
  possibleFilters,
  resetFilter,
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
}: {
  resetFilter: () => void;
  filterApplied: boolean;
  possibleFilters: productFilter;
  appliedFilters: prodcutFilterWithSet;
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
}) {
  return (
    <div className="w-[274px] my-5 flex flex-col gap-6">
      <button
        onClick={resetFilter}
        className={`w-full h-[56px] ${filterApplied ? "bg-red-500" : "bg-grey-50"} rounded-[10px] text-white`}
      >
        Clear filters
      </button>
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
  );
}
