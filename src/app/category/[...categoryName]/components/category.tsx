"use client";
import React from "react";
import Filter from "./filter";
import Product from "@/app/components/product";
import DiscountBanner from "@/app/components/discountBanner";
import Filters from "./filterList";
import useFilters from "./useFilter";
import Pagination from "@/app/components/pagination";
import { product } from "@/app/types/type";
import { AnimatePresence } from "framer-motion";
export default function Category({
  params,
}: {
  params: { categoryName: string };
}) {
  const { categoryName } = params;
  const [category, setCategory] = React.useState(categoryName[0]);
  const [products, setProducts] = React.useState<product[]>([
    {
      itemID: "sample id",
      category: "sample",
      imageURL: "/sampleDiscount.png",
      engName: "sample",
      myName: "မြန်မာ",
      rating: 4,
      color: "red",
      material: "aluminium",
      size: "17 x 18",
      price: 250000,
      whiteListed: false,
    },
    {
      itemID: "sample id2",
      category: "sample",
      imageURL: "/sampleDiscount.png",
      engName: "sample",
      myName: "မြန်မာ",
      rating: 4,
      color: "Red",
      material: "aluminium",
      size: "17 x 18",
      price: 250000,
      whiteListed: false,
    },
    {
      itemID: "sample id3",
      category: "sample",
      imageURL: "/sampleDiscount.png",
      engName: "sample",
      myName: "မြန်မာ",
      rating: 4,
      color: "red",
      material: "aluminium",
      size: "17 x 18",
      price: 250000,
      whiteListed: false,
    },
    {
      itemID: "sample id4",
      category: "sample",
      imageURL: "/sampleDiscount.png",
      engName: "sample",
      myName: "မြန်မာ",
      rating: 4,
      color: "red",
      material: "aluminium",
      size: "17 x 18",
      price: 250000,
      whiteListed: false,
    },
    {
      itemID: "sample id5",
      category: "sample",
      imageURL: "/sampleDiscount.png",
      engName: "sample",
      myName: "မြန်မာ",
      rating: 4,
      color: "red",
      material: "aluminium",
      size: "17 x 18",
      price: 250000,
      whiteListed: false,
    },
  ]);
  const [filteredProducts, setFilteredProducts] = React.useState(products);
  const updateProducts = (products: product[]) => {
    setProducts(products);
  };
  const updateFilteredProducts = (products: product[]) => {
    setFilteredProducts(products);
  };
  const {
    appliedFilters,
    filters,
    filterApplied,
    resetFilter,
    toggleCategory,
    toggleColor,
    toggleMaterial,
    toggleSize,
    maximumPercent,
    minimumPercent,
    setMaximum,
    setMinimum,
    setMaximumInPercent,
    setMinimumInPercent,
  } = useFilters({
    products: products,
    updateFilteredProducts: updateFilteredProducts,
  });
  const [pages, setPage] = React.useState(1);
  const updatePage = (ind: number) => setPage(ind);
  const updateCategory = (cat: string) => setCategory(cat);
  return (
    <div className="w-fit flex flex-col gap-20 my-10 mx-auto px-[125px]">
      <div className="flex flex-row gap-8">
        <div className="flex flex-col gap-6">
          <div>
            <p className="font-sora font-bold text-[48px]">{category}</p>
            <p>
              <span className="text-grey-100">Category - </span>
              {category}
            </p>
          </div>
          <Filter
            appliedFilters={filters.appliedFilters}
            possibleFilters={filters.possibleFilters}
            filterApplied={filterApplied}
            resetFilter={resetFilter}
            category={category}
            updateCategory={updateCategory}
            toggleColor={toggleColor}
            toggleMaterial={toggleMaterial}
            toggleSize={toggleSize}
            maximum={filters.appliedFilters.pricePerItem.maximum}
            minimum={filters.appliedFilters.pricePerItem.minimum}
            setMaximum={setMaximum}
            setMinimum={setMinimum}
            maximumPercent={maximumPercent}
            minimumPercent={minimumPercent}
            setMaximumInPercent={setMaximumInPercent}
            setMinimumInPercent={setMinimumInPercent}
          />
        </div>
        <div className="w-[886px] flex flex-col gap-10">
          <Filters
            filters={appliedFilters}
            toggleColor={toggleColor}
            toggleMaterial={toggleMaterial}
            toggleSize={toggleSize}
          />
          <div className="grid grid-cols-3 gap-20">
            {filteredProducts.length === 0 ? (
              <div className="col-span-3 w-1/2 mx-auto py-[120px]">
                <img
                  src={"/images/error.png"}
                  className="size-[120px] mx-auto"
                />
                <p className="py-5 font-semibold text-center text-grey-200">
                  Sorry! No Data Found from your filter search! <br /> Try to
                  search something else.
                </p>
              </div>
            ) : (
              <AnimatePresence>
                {filteredProducts.map((p) => (
                  <Product key={p.itemID} {...p} small />
                ))}
              </AnimatePresence>
            )}
          </div>
          <Pagination
            activeIndex={pages}
            totalIndex={5}
            setIndex={updatePage}
          />
        </div>
      </div>
      <DiscountBanner imgURL="/images/promotion3.png" percent="40" />
    </div>
  );
}
