"use client";
import React from "react";
import Product from "@/components/template/Product";
import useWindowSize from "@/components/hooks/useWindowSize";
import DiscountBanner from "@/components/banner/DiscountBanner";
import Pagination from "@/components/template/Pagination";
import useFilters from "./UseFilter";
import CateogryHeading from "./Heading";
import Filter from "./Filter";
import Filters from "./FilterList";
import NotFoundError from "./NotFound";
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
      id: "sample id",
      category: "sample",
      images: ["/sampleDiscount.png"],
      name: "sample",
      mm_name: "မြန်မာ",
      rating: 4,
      color: "red",
      material: "aluminium",
      size: "17 x 18",
      price: 250000,
      whiteListed: false,
    },
    {
      id: "sample id2",
      category: "sample",
      images: ["/sampleDiscount.png"],
      name: "sample",
      mm_name: "မြန်မာ",
      rating: 4,
      color: "red",
      material: "aluminium",
      size: "17 x 18",
      price: 250000,
      whiteListed: false,
    },
    {
      id: "sample id3",
      category: "sample",
      images: ["/sampleDiscount.png"],
      name: "sample",
      mm_name: "မြန်မာ",
      rating: 4,
      color: "red",
      material: "aluminium",
      size: "17 x 18",
      price: 250000,
      whiteListed: false,
    },
    {
      id: "sample id4",
      category: "sample",
      images: ["/sampleDiscount.png"],
      name: "sample",
      mm_name: "မြန်မာ",
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
    if (searched) router.push(`/search?query=${categoryName}&p=${ind}`);
    else router.push(`/category/${categoryName}?p=${ind}`);
  };
  const updateCategory = (cat: string) => setCategory(cat);

  const size = useWindowSize();
  const showFilterDrawer = () => {
    setHidden(false);
    if (size[0] < 1200) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  };
  const hideFilterDrawer = () => {
    setHidden(true);
    if (size[0] <= 1200) {
      document.body.style.overflowY = "auto";
    } else {
      document.body.style.overflowY = "hidden";
    }
  };
  React.useEffect(() => {
    if (size[0] >= 1200) {
      showFilterDrawer();
    } else {
      hideFilterDrawer();
    }
  }, [size]);
  return (
    <div className="xl:w-[1190px] md:w-[85%] sm:w-[90%] w-full flex flex-col gap-10 xl:my-20 my-10 md:px-0 px-5 mx-auto">
      <CateogryHeading
        searched={searched}
        productCounts={products.length}
        category={category}
        show={showFilterDrawer}
      />
      <div className="flex lg:flex-row flex-col xl:gap-20 gap-10">
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
        <div className="lg:w-[886px] w-full flex flex-col gap-10">
          <AnimatePresence>
            {filterApplied && (
              <Filters
                filters={appliedFilters}
                toggleColor={toggleColor}
                toggleMaterial={toggleMaterial}
                toggleSize={toggleSize}
              />
            )}
          </AnimatePresence>
          <div className="grid ssm:grid-cols-3 sm:grid-cols-2 xl:gap-10 md:gap-2.5 gap-5">
            {products.length === 0 ? (
              <NotFoundError />
            ) : (
              <>
                {products.map((p) => (
                  <Product key={p.id} {...p} small />
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
