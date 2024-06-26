"use client";
import React from "react";
import Image from "next/image";
import LeftArrowWhite from "../../svg/leftArrowWhite.svg";
import LeftArrowDisabled from "../../svg/leftArrowDisabled.svg";
import RightArrowWhite from "../../svg/rightArrowWhite.svg";
import RightArrowDisabled from "../../svg/rightArrowDisabled.svg";
import ClientWord from "./clientWord";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { clientWord } from "@/app/types/type";

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
      <div className="flex flex-row py-4 font-sora font-bold text-[32px]">
        Our Clients' Words
        <div className="flex flex-row gap-5 ml-auto">
          <button
            onClick={decrementIndex}
            className={`reviewPrev size-[50px] rounded-full p-4 ${activeIndex == 0 ? "border border-khaki-200" : "bg-khaki-500 border border-khaki-100 hover:bg-khaki-700 cursor-pointer duration-300"}`}
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
            className={`reviewNext size-[50px] p-4 rounded-full ${activeIndex + 1 >= clientWords.length ? "bg-white border border-khaki-200" : "border border-khaki-100 bg-khaki-500 hover:bg-khaki-700 cursor-pointer duration-300"}`}
          >
            {activeIndex + 1 >= clientWords.length ? (
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
        className="w-full fit relative rounded-b-[32px]"
        pagination={{ clickable: true }}
        navigation={{ nextEl: ".reviewNext", prevEl: ".reviewPrev" }}
        spaceBetween={30}
        slidesPerView={1}
        onScroll={(swiper) => setActiveIndex(swiper.activeIndex)}
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
