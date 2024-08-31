"use client";
import React from "react";
import WhiteListCateogry from "./ToggleCategory";
import DiscountBanner from "@/components/banner/DiscountBanner";
import Pagination from "@/components/template/Pagination";
import axios from "@/utils/axios";
import Product from "@/components/template/Product";
import { product, variant } from "@/types/type";
import { useUserStore } from "@/store/clientData";
import { showErrorAlert } from "@/components/Alert";

export default function WishList() {
  const { customer, setWishlists } = useUserStore();
  const [wishlist, setWishlist] = React.useState<wishlist[]>([]);
  const [category, setCategory] = React.useState("");
  const [page, setPage] = React.useState(1);
  const possibleCategories = React.useMemo(() => {
    const cat: Set<string> = new Set();
    wishlist.map((w) => {
      w.product.categories.map((c) => cat.add(c));
    });
    return Array.from(cat);
  }, [wishlist]);
  const updateCategory = (cat: string) => {
    setCategory(cat);
  };
  const updatePage = (page: number) => {
    setPage(page);
  };
  React.useEffect(() => {
    axios
      .get("customer/wishlist/", { params: { cid: customer.id } })
      .then((data) => {
        setWishlist(data.data);
        setWishlists(data.data);
      })
      .catch(() => {
        showErrorAlert({ text: "Something went wrong fetching wishlists!" });
      });
  }, []);
  return (
    <div className="xl:w-[1192px] md:w-[85%] sm:w-[90%] w-full h-fit mx-auto flex flex-col xl:gap-20 gap-10 xl:mx-auto xl:py-20 py-10">
      <div className="flex lg:flex-row flex-col xl:gap-8 md:gap-10 gap-8">
        <WhiteListCateogry
          categories={possibleCategories}
          category={category}
          updateCategory={updateCategory}
        />
        <div className="grid ssm:grid-cols-3 grid-cols-2 md:gap-20 gap-5">
          {wishlist.map((p) => (
            <Product product={p.product} small />
          ))}
          <div className="md:col-span-3 col-span-2 ml-auto">
            <Pagination activeIndex={1} totalIndex={1} setIndex={updatePage} />
          </div>
        </div>
      </div>
      <DiscountBanner imgURL="/images/promotion4.png" percent="40" />
    </div>
  );
}

interface wishlist {
  id: number;
  created_at: string;
  product: product;
}
