"use client";
import React from "react";
import Image from "next/image";
import CarouselButtons from "./mainCarouselButtons";
import CarouselText from "./carouselText";
import Image1 from "./images/01.png";
import Image2 from "./images/02.png";
import Image3 from "./images/03.png";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function MainProductsCarousel() {
  const [slide, setSlide] = React.useState(0);

  return (
    <Swiper
      className="w-full xl:h-[520px] md:h-[350px] h-[240px] relative mx-auto xl:px-0 md:rounded-b-[32px] rounded-none overflow-hidden"
      pagination={{ clickable: true }}
      navigation={{ nextEl: ".main-next", prevEl: ".main-prev" }}
      spaceBetween={30}
      speed={1600}
      onRealIndexChange={(sw) => setSlide(sw.activeIndex)}
      autoplay={{ delay: 1500, waitForTransition: true }}
      modules={[Pagination, Navigation, Autoplay]}
    >
      <SwiperSlide>
        <Image
          src={Image1}
          alt="Product"
          fill
          sizes="100%"
          className="w-auto h-auto relative z-10"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={Image2}
          alt="Product"
          fill
          sizes="100%"
          className="w-auto h-auto relative z-10"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={Image3}
          alt="Product"
          fill
          sizes="100%"
          className="w-auto h-auto relative"
        />
      </SwiperSlide>
      <CarouselButtons />
      <CarouselText slide={slide} />
    </Swiper>
  );
}
