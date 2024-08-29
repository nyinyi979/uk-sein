"use client";
import React from "react";
import useWindowSize from "@/components/hooks/useWindowSize";
import DiscountBanner from "@/components/banner/DiscountBanner";
import Pagination from "@/components/template/Pagination";
import CateogryHeading from "./Heading";
import Filter from "./Filter";
import FilterList from "./FilterList";
import NotFoundError from "./NotFound";
import axios from "@/utils/axios";
import Variant, { ProductLoading } from "@/components/template/Product";
import { variant } from "@/types/type";
import { AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { showErrorAlert } from "../Alert";

export default function ProductWithFilters({
  params,
  searched = false,
}: {
  params: { categoryName: string };
  searched?: boolean;
}) {
  const { categoryName } = params;
  const [hidden, setHidden] = React.useState(true);
  const [variations, setVariations] = React.useState<variant[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [filters, setFilters] = React.useState({
    color: "",
    size: "",
    material: "",
    category: categoryName,
    maximum: 0,
    minimum: 0,
  });
  React.useEffect(() => {
    setLoading(true);
    axios
      .get(
        `product/list/client/?color=${filters.color}&size=${filters.size}&material=${filters.material}&category=${filters.category}`,
      )
      .then((data) => {
        console.log(data);
        setVariations(data.data);
        setLoading(false);
      })
      .catch(() => {
        showErrorAlert({ text: "Something went wrong!" });
        setLoading(false);
      });
  }, [filters]);

  const router = useRouter();
  const page = Number(useSearchParams().get("p") || 1);
  const totalPages = 10;
  const updatePage = (ind: number) => {
    if (searched) router.push(`/search?query=${categoryName}&p=${ind}`);
    else router.push(`/category/${categoryName}?p=${ind}`);
  };

  const toggleColor = (color: string) => {
    if (filters.color === color) {
      setFilters({ ...filters, color: "" });
    } else {
      setFilters({ ...filters, color });
    }
  };
  const toggleMaterial = (material: string) => {
    if (filters.material === material) {
      setFilters({ ...filters, material: "" });
    } else {
      setFilters({ ...filters, material });
    }
  };
  const toggleSize = (size: string) => {
    if (filters.size === size) {
      setFilters({ ...filters, size: "" });
    } else {
      setFilters({ ...filters, size });
    }
  };
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
        count={variations.length}
        category={filters.category}
        show={showFilterDrawer}
      />
      <div className="flex lg:flex-row flex-col xl:gap-20 gap-10">
        <AnimatePresence>
          {!hidden && (
            <Filter
              filters={filters}
              hide={hideFilterDrawer}
              variations={variations}
              setFilters={setFilters}
              toggleColor={toggleColor}
              toggleMaterial={toggleMaterial}
              toggleSize={toggleSize}
            />
          )}
        </AnimatePresence>
        <div className="lg:w-[886px] w-full flex flex-col gap-10">
          <AnimatePresence>
            <FilterList
              filters={filters}
              toggleColor={toggleColor}
              toggleMaterial={toggleMaterial}
              toggleSize={toggleSize}
            />
          </AnimatePresence>
          <div className="grid ssm:grid-cols-3 sm:grid-cols-2 xl:gap-10 md:gap-2.5 gap-5">
            {loading ? (
              [0, 1, 2, 3, 4].map((val) => <ProductLoading key={val} />)
            ) : variations.length === 0 ? (
              <NotFoundError />
            ) : (
              <>
                {variations.map((v) => (
                  <Variant key={v.id + v.gift} variation={v} small />
                ))}
              </>
            )}
          </div>
          {variations.length !== 0 && (
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
