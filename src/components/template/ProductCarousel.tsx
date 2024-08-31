"use client";
import React from "react";
import Variant, { ProductLoading } from "./Variant";
import CarouselButtons from "./CarouselButtons";
import axios from "@/utils/axios";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { variant } from "@/types/type";
import { useTranslations } from "next-intl";
import { showErrorAlert } from "../Alert";

export default function ProductsCarousel({
  similarProduct,
  fetchURL,
}: {
  similarProduct: boolean;
  fetchURL: string;
}) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const incrementIndex = () =>
    activeIndex + 1 <= variants.length - 3 && setActiveIndex(activeIndex + 1);
  const decrementIndex = () =>
    activeIndex - 1 >= 0 && setActiveIndex(activeIndex - 1);

  const [loading, setLoading] = React.useState(true);
  const [variants, setVariants] = React.useState<variant[]>([]);
  React.useEffect(() => {
    axios
      .get("product/top-product/")
      .then((data) => {
        setVariants(data.data);
        setLoading(false);
      })
      .catch(() => {
        showErrorAlert({
          text: "Something went wrong while fetching products!",
        });
      });
  }, []);
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
        {loading
          ? [1, 2, 3, 4].map((val) => (
              <SwiperSlide key={val}>
                <ProductLoading />
              </SwiperSlide>
            ))
          : variants.map((v) => (
              <SwiperSlide key={v.id}>
                <Variant small={false} variation={v} />
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
}
