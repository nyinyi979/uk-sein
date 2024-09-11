"use client";
import React from "react";
import Image from "next/image";
import CarouselButtons from "./MainCarouselButtons";
import CarouselText from "./CarouselText";
import Image1 from "./images/01.jpg";
import Image2 from "./images/02.jpg";
import Image3 from "./images/03.jpg";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function MainProductsCarousel() {
  const [slide, setSlide] = React.useState(0);

  return (
    <Swiper
      className="w-full xl:h-[520px] lg:h-[400px] md:h-[350px] h-[240px] relative mx-auto md:rounded-b-[32px] rounded-none overflow-hidden"
      pagination={{ clickable: true }}
      navigation={{ nextEl: ".main-next", prevEl: ".main-prev" }}
      spaceBetween={30}
      speed={1600}
      style={{ zIndex: 1 }}
      onRealIndexChange={(sw) => setSlide(sw.activeIndex)}
      autoplay={{ delay: 1500, waitForTransition: true }}
      modules={[Pagination, Navigation, Autoplay]}
    >
      <SwiperSlide className="z-[1]">
        <Image
          src={Image1}
          alt="Product"
          fill
          sizes="100%"
          className="w-full h-full object-cover relative z-[2]"
        />
      </SwiperSlide>
      <SwiperSlide className="z-[1]">
        <Image
          src={Image2}
          alt="Product"
          fill
          sizes="100%"
          className="w-full h-full object-cover relative z-[2]"
        />
      </SwiperSlide>
      <SwiperSlide className="z-[1]">
        <Image
          src={Image3}
          alt="Product"
          fill
          sizes="100%"
          className="w-full h-full object-cover relative z-[2]"
        />
      </SwiperSlide>
      <CarouselButtons />
      <CarouselText slide={slide} />
    </Swiper>
  );
}
