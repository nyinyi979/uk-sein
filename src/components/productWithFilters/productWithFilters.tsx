"use client";
import React from "react";
import Product from "@/components/template/product";
import useWindowSize from "@/components/hooks/useWindowSize";
import DiscountBanner from "@/components/banner/discountBanner";
import Pagination from "@/components/template/pagination";
import useFilters from "./useFilter";
import CateogryHeading from "./heading";
import Filter from "./filter";
import Filters from "./filterList";
import NotFoundError from "./notFound";
import { product } from "@/types/type";
import { AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";

export default function ProductWithFilters({
  params,
  searched = false,
}: {
  params: { categoryName: string };
  searched?: boolean;
}) {
  const { categoryName } = params;
  const [category, setCategory] = React.useState(categoryName);
  const [hidden, setHidden] = React.useState(true);
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
  const updateProducts = (products: product[]) => {
    setProducts(products);
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
    updateProducts: updateProducts,
  });
  const router = useRouter();
  const page = Number(useSearchParams().get("p") || 1);
  const totalPages = 10;
  const updatePage = (ind: number) => {
    if (searched) router.push(`/search?=${categoryName}&p=${ind}`);
    else router.push(`/category/${categoryName}?p=${ind}`);
  };
  const updateCategory = (cat: string) => setCategory(cat);

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
    <div className="xl:w-[1190px] md:w-[668px] w-[393px] flex flex-col md:gap-10 gap-5 xl:my-20 my-10 md:px-0 px-5 mx-auto">
      <CateogryHeading
        searched={searched}
        productCounts={products.length}
        category={category}
        show={showFilterDrawer}
      />
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
          <div className="grid md:grid-cols-3 grid-cols-2 xl:gap-10 md:gap-2.5 gap-5">
            {products.length === 0 ? (
              <NotFoundError />
            ) : (
              <>
                {products.map((p) => (
                  <Product key={p.itemID} {...p} small />
                ))}
              </>
            )}
          </div>
          {products.length !== 0 && (
            <Pagination
              activeIndex={page}
              totalIndex={totalPages}
              setIndex={updatePage}
            />
          )}
        </div>
      </div>
      <DiscountBanner imgURL="/images/promotion3.png" percent="40" />
    </div>
  );
}
