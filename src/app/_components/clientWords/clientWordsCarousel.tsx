"use client";
import React from "react";
import ClientWord from "./clientWord";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { clientWord } from "@/app/types/type";
import CarouselButtons from "@/app/components/carouselButtons";

export default function ClientWorkdsCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const incrementIndex = () =>
    activeIndex + 1 <= clientWords.length && setActiveIndex(activeIndex + 1);
  const decrementIndex = () =>
    activeIndex - 1 >= 0 && setActiveIndex(activeIndex - 1);
  const [clientWords, setClientWords] = React.useState<clientWord[]>([
    {
      wordID: "word1",
      boughtMessage: `I recently purchased a dining set from [Furniture Brand], and I couldn't be happier with my experience. The craftsmanship is top-notch, and every piece exudes quality and attention to detail. The design beautifully blends modern elegance with a cozy, homely feel, perfectly complementing my decor. The customer service was exceptional, guiding me through every step from selection to delivery. `,
      recommendMessage: `I highly recommend [Furniture Brand] to anyone looking for stylish, well-made furniture that truly transforms a space 💜`,
      profileURL: "/images/discount.png",
      clientName: "Sample name",
      clientRole: "sample role",
    },
    {
      wordID: "word2",
      boughtMessage: `I recently purchased a dining set from [Furniture Brand], and I couldn't be happier with my experience. The craftsmanship is top-notch, and every piece exudes quality and attention to detail. The design beautifully blends modern elegance with a cozy, homely feel, perfectly complementing my decor. The customer service was exceptional, guiding me through every step from selection to delivery. `,
      recommendMessage: `I highly recommend [Furniture Brand] to anyone looking for stylish, well-made furniture that truly transforms a space 💜`,
      profileURL: "/images/discount.png",
      clientName: "Sample name",
      clientRole: "sample role",
    },
    {
      wordID: "word3",
      boughtMessage: `I recently purchased a dining set from [Furniture Brand], and I couldn't be happier with my experience. The craftsmanship is top-notch, and every piece exudes quality and attention to detail. The design beautifully blends modern elegance with a cozy, homely feel, perfectly complementing my decor. The customer service was exceptional, guiding me through every step from selection to delivery. `,
      recommendMessage: `I highly recommend [Furniture Brand] to anyone looking for stylish, well-made furniture that truly transforms a space 💜`,
      profileURL: "/images/discount.png",
      clientName: "Sample name",
      clientRole: "sample role",
    },
  ]);
  return (
    <div className="relative">
      <div className="flex flex-row py-4 font-sora font-bold xl:text-[32px] text-2xl">
        Our Clients' Words
        <CarouselButtons
          classname="review"
          decrementIndex={decrementIndex}
          incrementIndex={incrementIndex}
        />
      </div>
      <Swiper
        className="w-full fit relative rounded-b-[32px]"
        pagination={{ clickable: true }}
        navigation={{ nextEl: ".review-next", prevEl: ".review-prev" }}
        spaceBetween={30}
        slidesPerView={1}
        onRealIndexChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        modules={[Navigation]}
      >
        {clientWords.map((c) => (
          <SwiperSlide key={c.wordID}>
            <ClientWord {...c} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
