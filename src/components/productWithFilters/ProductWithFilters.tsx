"use client";
import React from "react";
import useWindowSize from "@/components/hooks/useWindowSize";
import Pagination from "@/components/template/Pagination";
import CateogryHeading from "./Heading";
import Filter from "./Filter";
import FilterList from "./FilterList";
import NotFoundError from "./NotFound";
import axios from "@/utils/axios";
import { ProductLoading } from "@/components/template/Variant";
import { product, variant } from "@/types/type";
import { AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { showErrorAlert } from "../Alert";
import { useCategoryStore } from "@/store/category";
import Product from "../template/Product";
import Link from "next/link";
import Input from "../input/Input";

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
  const router = useRouter();
  const [pLoading, setPLoading] = React.useState(true);
  const [cLoading, setCLoading] = React.useState(true);
  const [filters, setFilters] = React.useState({
    color: "",
    size: "",
    material: "",
    category: decodeURI(categoryName),
    cid: para.get("id") || "",
    page: page,
    query: "",
  });
  const [variations, setVariations] = React.useState<variant[]>([])
  const [searchValue, setSearchValue] = React.useState("");
  const size = useWindowSize();
  // const variations = React.useMemo(() => {
  //   const variations: variant[] = [];
  //   result.results.map((p) => p.variations.map((v) => variations.push(v)));
  //   return variations;
  // }, [filters, result]);
  React.useEffect(()=>{
    const variants: variant[] = [];
    result.results.map((p) => p.variations.map((v) => variants.push(v)));
    setVariations(variants)
  },[result])

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
  React.useEffect(() => {
    setPLoading(true);
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
        setPLoading(false);
      })
      .catch(() => {
        showErrorAlert({ text: "Something went wrong!" });
        setPLoading(false);
      });
  }, [filters]);
  React.useEffect(() => {
    setCLoading(true);
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
        setCLoading(false);
      })
      .catch((err) => {
        showErrorAlert({
          text: "Something went wrong while trying to display categories!",
        });
        setCLoading(false);
      });
  }, []);
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
  return (
    <div className="xl:w-[1190px] md:w-[85%] sm:w-[90%] w-full flex flex-col gap-10 xl:my-20 my-10 md:px-0 px-5 mx-auto">
      <CateogryHeading
        category={decodeURI(categoryName)}
        show={showFilterDrawer}
      />
      <Link
        href={"/products"}
        className="flex gap-3 items-center font-medium group text-khaki-500 hover:text-khaki-700 duration-300"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 25 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.0012 10.5014C25.0012 10.8992 24.8431 11.2807 24.5618 11.562C24.2805 11.8433 23.899 12.0014 23.5012 12.0014H5.12618L11.5662 18.4401C11.848 18.7219 12.0063 19.1041 12.0063 19.5026C12.0063 19.9011 11.848 20.2833 11.5662 20.5651C11.2844 20.8469 10.9022 21.0052 10.5037 21.0052C10.1052 21.0052 9.72297 20.8469 9.44118 20.5651L0.441183 11.5651C0.301343 11.4257 0.190387 11.2602 0.114679 11.0778C0.0389713 10.8955 0 10.7 0 10.5026C0 10.3052 0.0389713 10.1097 0.114679 9.92737C0.190387 9.74505 0.301343 9.57946 0.441183 9.4401L9.44118 0.440102C9.58071 0.300572 9.74636 0.189891 9.92866 0.114378C10.111 0.0388656 10.3064 0 10.5037 0C10.701 0 10.8964 0.0388656 11.0787 0.114378C11.261 0.189891 11.4267 0.300572 11.5662 0.440102C11.7057 0.579631 11.8164 0.745277 11.8919 0.927581C11.9674 1.10988 12.0063 1.30528 12.0063 1.5026C12.0063 1.69993 11.9674 1.89532 11.8919 2.07762C11.8164 2.25993 11.7057 2.42557 11.5662 2.5651L5.12618 9.00135H23.5012C23.899 9.00135 24.2805 9.15939 24.5618 9.44069C24.8431 9.722 25.0012 10.1035 25.0012 10.5014Z"
            className="size-4 fill-[#DE9D62] group-hover:fill-[#9e6f46] duration-300"
          />
        </svg>
        <span className="group-hover:text-khaki-700 duration-300">
          Back to Products
        </span>
      </Link>

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

        <div>
          <div className="relative w-[100%]">
            <Input
              id="search"
              value={searchValue}
              // className="w-full p-3 outline-none rounded-md border border-grey-50 focus:border-grey-200"
              setValue={(value) => {
                setSearchValue(value);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter")
                  setFilters({ ...filters, query: searchValue });
              }}
              placeholder="Enter something to search!"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-grey-400">
              Press Enter
            </span>
          </div>
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
              {pLoading ? (
                [0, 1, 2, 3, 4].map((val) => <ProductLoading key={val} />)
              ) : result.results.length === 0 ? (
                <NotFoundError />
              ) : (
                <>
                  {result.results.map((p) => (
                    <Product key={p.id + p?.created_at} product={p} small />
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
      </div>
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
