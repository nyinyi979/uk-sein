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
import Variant, { ProductLoading } from "@/components/template/Variant";
import { product, variant } from "@/types/type";
import { AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { showErrorAlert } from "../Alert";
import { useCategoryStore } from "@/store/category";
import Product from "../template/Product";
const filter = {
  query: "",
  order_by: "-",
  status: "",
  page_size: 12,
};

export default function ProductWithFilters({
  params,
}: {
  params: { categoryName: string };
}) {
  const { categories, setCategories } = useCategoryStore();
  const { categoryName } = params;
  const para = useSearchParams();
  const [hidden, setHidden] = React.useState(true);
  const [result, setResult] = React.useState<result>({
    count: 10,
    current_page: 1,
    next: null,
    previous: null,
    results: [],
    total_pages: 1,
  });
  const page = Number(para.get("p") || 1);
  const [loading, setLoading] = React.useState(true);
  const [filters, setFilters] = React.useState({
    color: "",
    size: "",
    material: "",
    category: decodeURI(categoryName),
    cid: para.get("id") || "",
    page: page,
  });
  const variations = React.useMemo(()=>{
    const variations:variant[] = [];
    result.results.map((p)=>
      p.variations.map((v)=>variations.push(v))
    )
    return variations;
  },[filters])
  React.useEffect(() => {
    setLoading(true);
    axios
      .get(`product/list/client/`, {
        params: {
          ...filter,
          ...filters,
          page: page,
          category: filters.category.replaceAll(" ", ""),
        },
      })
      .then((data) => {
        setResult(data.data);
        setLoading(false);
      })
      .catch(() => {
        showErrorAlert({ text: "Something went wrong!" });
        setLoading(false);
      });
    const catFilter = {
      page: 1,
      query: "",
      page_size: 5,
      order_by: "-created_at",
    };
    const url = `category/list/all/?query=${catFilter.query}&page_size=${catFilter.page_size}&order_by=${catFilter.order_by}&page=${catFilter.page}`;
    axios
      .get(url)
      .then((data) => {
        setCategories(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        showErrorAlert({
          text: "Something went wrong while trying to display categories!",
        });
      });
  }, [filters, para.get("p")]);
  const router = useRouter();
  const updatePage = (ind: number) => {
    router.push(`/category/${categoryName}?p=${ind}&id=${para.get("id")}`);
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
        category={decodeURI(categoryName)}
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
              categoryName={categoryName}
              categories={categories}
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
            ) : result.results.length === 0 ? (
              <NotFoundError />
            ) : (
              <>
                {result.results.map((p) => (
                  <Product key={p.id+p?.created_at} product={p} small />
                ))}
              </>
            )}
          </div>
          {result.results.length !== 0 && (
            <Pagination
              activeIndex={page}
              totalIndex={result.total_pages}
              setIndex={updatePage}
            />
          )}
        </div>
      </div>
      <DiscountBanner imgURL="/images/promotion3.png" percent="40" />
    </div>
  );
}

interface result {
  next: null;
  previous: null;
  current_page: number;
  count: number;
  total_pages: number;
  results: product[];
}
