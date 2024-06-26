"use client";
import React from "react";
import Filter from "./filter";
import Product from "@/app/components/product";
import DiscountBanner from "@/app/components/discountBanner";
import Filters from "./filterList";
import useFilters from "./useFilter";
import Pagination from "@/app/components/pagination";
import NotFoundError from "./notFound";
import CateogryHeading from "./heading";
import { product } from "@/app/types/type";
import { AnimatePresence } from "framer-motion";
import useWindowSize from "@/app/components/useWindowSize";

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
    toggleColor,
    toggleMaterial,
    toggleSize,
    maximumPercent,
    minimumPercent,
    setMaximum,
    setMinimum,
    setMaximumInPercent,
    setMinimumInPercent,
    filterJustApplied,
    filterJustAppliedOff,
  } = useFilters({
    products: products,
    updateFilteredProducts: updateFilteredProducts,
  });
  const [pages, setPage] = React.useState(1);
  const updatePage = (ind: number) => setPage(ind);
  const updateCategory = (cat: string) => setCategory(cat);
  const [hidden, setHidden] = React.useState(true);
  const size = useWindowSize();
  const showFilterDrawer = () => {
    setHidden(false);
    if (size[0] < 1440) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  };
  const hideFilterDrawer = () => {
    setHidden(true);
    if (size[0] <= 1440) {
      document.body.style.overflowY = "auto";
    } else {
      document.body.style.overflowY = "hidden";
    }
  };
  React.useEffect(() => {
    if (size[0] >= 1440) {
      showFilterDrawer();
    } else {
      hideFilterDrawer();
    }
  }, [size]);
  return (
    <div className="xl:w-[1190px] w-fit flex flex-col gap-10 xl:my-20 my-10 mx-auto xl:px-0 px-[52px]">
      <CateogryHeading category={category} show={showFilterDrawer} />
      <div className="flex xl:flex-row flex-col xl:gap-20 gap-10">
        <AnimatePresence>
          {!hidden && (
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
              hidden={hidden}
              hide={hideFilterDrawer}
              show={showFilterDrawer}
              filterJustApplied={filterJustApplied}
              filterJustAppliedOff={filterJustAppliedOff}
            />
          )}
        </AnimatePresence>
        <div className="xl:w-[886px] w-full flex flex-col gap-10">
          <Filters
            filters={appliedFilters}
            toggleColor={toggleColor}
            toggleMaterial={toggleMaterial}
            toggleSize={toggleSize}
          />
          <div className="grid grid-cols-3 xl:gap-10 gap-2.5">
            {filteredProducts.length === 0 ? (
              <NotFoundError />
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
