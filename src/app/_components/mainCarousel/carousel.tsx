"use client";
import React from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import Image1 from "./images/01.png";
import Image2 from "./images/02.png";
import Image3 from "./images/03.png";
import CarouselButtons from "./carouselButtons";
import CarouselText from "./carouselText";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
export default function MainProductsCarousel() {
  const [slide, setSlide] = React.useState(0);

  return (
    <Swiper
      className="w-full h-[520px] relative rounded-b-[32px]"
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
          className="w-auto h-auto relative z-10"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={Image2}
          alt="Product"
          fill
          className="w-auto h-auto relative z-10"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={Image3}
          alt="Product"
          fill
          className="w-auto h-auto relative"
        />
      </SwiperSlide>
      <CarouselButtons />
      <CarouselText slide={slide} />
    </Swiper>
  );
}
