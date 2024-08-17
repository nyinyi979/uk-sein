"use client";
import React from "react";
import WhiteListCateogry from "./ToggleCategory";
import DiscountBanner from "@/components/banner/DiscountBanner";
import Pagination from "@/components/template/Pagination";
import Product from "@/components/template/Product";
import { product } from "@/types/type";

export default function WishList() {
  const [products, setProducts] = React.useState<product[]>([
    {
      id: "sample id",
      category: "sample",
      images: ["/sampleProduct.png"],
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
      color: "Red",
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
    {
      id: "sample id5",
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
    <div className="xl:w-[1192px] md:w-[85%] sm:w-[90%] w-full h-fit mx-auto flex flex-col xl:gap-20 gap-10 xl:mx-auto xl:py-20 py-10">
      <div className="flex lg:flex-row flex-col xl:gap-8 md:gap-10 gap-8">
        <WhiteListCateogry
          categories={possibleCategories.current}
          category={category}
          updateCategory={updateCategory}
        />
        <div className="grid ssm:grid-cols-3 grid-cols-2 md:gap-20 gap-5">
          {products.map((p) => (
            <Product key={p.id} {...p} small />
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
