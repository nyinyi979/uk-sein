"use client";
import React from "react";
import WhiteListCateogry from "./toggleCategory";
import DiscountBanner from "@/components/discountBanner";
import Pagination from "@/components/pagination";
import Product from "@/components/product";
import { product } from "@/app/types/type";
import { AnimatePresence } from "framer-motion";

export default function WishList() {
  const [products, setProducts] = React.useState<product[]>([
    {
      itemID: "sample id",
      category: "sample",
      imageURL: "/sampleProduct.png",
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
  const [category, setCategory] = React.useState("");
  const [page, setPage] = React.useState(1);
  const possibleCategories = React.useRef([
    {
      name: "Baskets",
      img_url: "/sampleDiscount.png",
    },
    {
      name: "Mat",
      img_url: "/sampleDiscount.png",
    },
  ]);
  const updateCategory = (cat: string) => {
    setCategory(cat);
  };
  const updatePage = (page: number) => {
    setPage(page);
  };
  return (
    <div className="xl:w-[1192px] md:w-[664px] w-[340px] flex flex-col xl:gap-20 gap-10 mx-auto xl:py-20 md:py-10 py-8">
      <div className="flex xl:flex-row flex-col xl:gap-8 md:gap-10 gap-8">
        <WhiteListCateogry
          categories={possibleCategories.current}
          category={category}
          updateCategory={updateCategory}
        />
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-20 gap-5">
          <AnimatePresence>
            {products.map((p) => (
              <Product key={p.itemID} {...p} small />
            ))}
          </AnimatePresence>
          <div className="md:col-span-3 col-span-2 ml-auto">
            <Pagination activeIndex={1} totalIndex={1} setIndex={updatePage} />
          </div>
        </div>
      </div>
      <DiscountBanner imgURL="/images/promotion4.png" percent="40" />
    </div>
  );
}
