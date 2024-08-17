"use client";
import React from "react";
import Product from "./Product";
import CarouselButtons from "./CarouselButtons";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { product } from "@/types/type";
import { useTranslations } from "next-intl";

export default function ProductsCarousel({
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
  // fetch(fetchURL).then((val) => {

  // });
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
  ]);
  const t = useTranslations("product");
  return (
    <div className="relative md:px-0 px-5">
      <div className="flex flex-row relative py-4 font-sora font-bold xl:text-[32px] sm:text-2xl text-xl">
        {similarProduct ? t("similar-product") : t("top-product")}
        <CarouselButtons
          decrementIndex={decrementIndex}
          incrementIndex={incrementIndex}
          classname="product"
        />
      </div>
      <Swiper
        className="w-full mx-auto h-fit relative"
        pagination={{ clickable: true }}
        navigation={{ nextEl: ".product-next", prevEl: ".product-prev" }}
        breakpoints={{
          1200: { slidesPerView: 3, spaceBetween: 30 },
          560: { slidesPerView: 2, spaceBetween: 30 },
          393: { slidesPerView: 2, spaceBetween: 40 },
          0: { slidesPerView: 1, spaceBetween: 20 },
        }}
        onRealIndexChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        modules={[Navigation]}
      >
        {products.map((p) => (
          <SwiperSlide key={p.id}>
            <Product {...p} small={false} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
