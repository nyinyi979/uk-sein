"use client";
import React from "react";
import Image from "next/image";
import LeftArrowWhite from "../../svg/leftArrowWhite.svg";
import LeftArrowDisabled from "../../svg/leftArrowDisabled.svg";
import RightArrowWhite from "../../svg/rightArrowWhite.svg";
import RightArrowDisabled from "../../svg/rightArrowDisabled.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { product } from "@/app/types/type";
import Product from "../../components/product";

export default function TopProductsCarousel({
  similarProduct,
  fetchURL,
}: {
  similarProduct: boolean;
  fetchURL: string;
}) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const incrementIndex = () =>
    activeIndex + 1 <= products.length - 3 && setActiveIndex(activeIndex + 1);
  const decrementIndex = () =>
    activeIndex - 1 >= 0 && setActiveIndex(activeIndex - 1);
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
      color: "red",
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
  return (
    <div className="relative">
      <div className="flex flex-row py-4 font-sora font-bold text-[32px]">
        {similarProduct ? "Similar Products" : "Top products"}
        <div className="flex flex-row gap-5 ml-auto">
          <button
            onClick={decrementIndex}
            className={`productPrev size-[50px] p-4 rounded-full ${activeIndex == 0 ? "border border-khaki-200" : "bg-khaki-500 border border-khaki-100 hover:bg-khaki-700 duration-300"}`}
          >
            {activeIndex == 0 ? (
              <Image
                src={LeftArrowDisabled}
                alt="left arrow disabled"
                width={15}
                height={18}
                className="w-auto h-auto"
              />
            ) : (
              <Image
                src={LeftArrowWhite}
                alt="left arrow white"
                width={15}
                height={18}
                className="w-auto h-auto"
              />
            )}
          </button>
          <button
            onClick={incrementIndex}
            className={`productNext size-[50px] p-4 rounded-full ${activeIndex == products.length - 3 ? "border border-khaki-200" : "bg-khaki-500 border border-khaki-100 hover:bg-khaki-700 duration-300"}`}
          >
            {activeIndex == products.length - 3 ? (
              <Image
                src={RightArrowDisabled}
                alt="right arrow disabled"
                width={15}
                height={18}
                className="w-auto h-auto"
              />
            ) : (
              <Image
                src={RightArrowWhite}
                alt="right arrow white"
                width={15}
                height={18}
                className="w-auto h-auto"
              />
            )}
          </button>
        </div>
      </div>
      <Swiper
        className="w-full h-[600px] relative rounded-b-[32px]"
        pagination={{ clickable: true }}
        navigation={{ nextEl: ".productNext", prevEl: ".productPrev" }}
        spaceBetween={30}
        slidesPerView={3}
        modules={[Navigation]}
      >
        {products.map((p) => (
          <SwiperSlide key={p.itemID}>
            <Product {...p} small={false} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
