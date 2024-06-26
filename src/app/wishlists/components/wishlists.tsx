"use client";
import CategoryFilter from "@/app/_components/categoryFilter";
import DiscountBanner from "@/app/components/discountBanner";
import Pagination from "@/app/components/pagination";
import Product from "@/app/components/product";
import Toggle from "@/app/components/toggle";
import { product } from "@/app/types/type";
import { AnimatePresence } from "framer-motion";
import React from "react";

export default function WishList() {
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
    <div className="flex flex-col gap-20 px-[125px] py-20">
      <div className="flex flex-row gap-8">
        <div className="w-[274px]">
          <Toggle name="Category">
            <CategoryFilter
              categories={possibleCategories.current}
              category={category}
              updateCategory={updateCategory}
            />
          </Toggle>
        </div>
        <div className="grid grid-cols-3 gap-20">
          <AnimatePresence>
            {products.map((p) => (
              <Product {...p} small />
            ))}
          </AnimatePresence>
          <div className="col-span-3 ml-auto">
            <Pagination activeIndex={1} totalIndex={1} setIndex={updatePage} />
          </div>
        </div>
      </div>
      <DiscountBanner imgURL="/images/promotion4.png" percent="40" />
    </div>
  );
}
