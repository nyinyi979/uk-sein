"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import LeftArr from "../../svg/leftArrow.svg";
import RightArr from "../../svg/rightArrow.svg";
import Link from "next/link";
import Image1 from "../images/01.png";
import Image2 from "../images/02.png";
import Image3 from "../images/03.png";
export default function MainProductsCarousel() {
  return (
    <Swiper
      className="w-full h-[520px] relative rounded-b-[32px]"
      pagination={{ clickable: true }}
      navigation={{ nextEl: ".next", prevEl: ".prev" }}
      spaceBetween={30}
      speed={1500}
      autoplay={{ delay: 1500, waitForTransition: true }}
      modules={[Pagination, Navigation, Autoplay]}
    >
      <SwiperSlide>
        <Image
          src={Image1}
          alt="Product"
          fill
          className="w-auto h-auto relative"
        />
        <p className="w-full absolute top-[10%] font-quick font-bold text-[80px] text-center text-white">
          Your Home <br />
          Your Style <br />
          Our Crafts <br />
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={Image2}
          alt="Product"
          fill
          className="w-auto h-auto relative"
        />
        <p className="w-full absolute top-[15%] flex flex-col gap-8 font-quick font-bold text-[80px] text-center text-white">
          Transform Spaces <br />
          with Local Flair
          <Link
            href={"/products"}
            className="w-fit mx-auto py-[18px] px-[28px] rounded-[15px] bg-khaki-500 font-semibold text-white text-base hover:bg-khaki-700 duration-300"
          >
            Shop Now
          </Link>
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={Image3}
          alt="Product"
          fill
          className="w-auto h-auto relative"
        />
        <p className="w-full absolute top-[15%] flex flex-col gap-8 font-quick font-bold text-[80px] text-center text-white">
          Elevate Your Home <br />
          with Local Crafts
          <Link
            href={"/products"}
            className="w-fit mx-auto py-[18px] px-[28px] rounded-[15px] bg-khaki-500 font-semibold text-base text-white hover:bg-khaki-700 duration-300"
          >
            Shop Now
          </Link>
        </p>
      </SwiperSlide>
      <span className="size-[50px] block absolute left-4 top-[45%] p-4 z-10 prev bg-white rounded-full cursor-pointer">
        <Image
          src={LeftArr}
          alt="left arrow"
          width={15}
          height={18}
          className="w-[15px] h-[18px]"
        />
      </span>
      <span className="size-[50px] block absolute right-4 top-[45%] p-4 z-10 next bg-white rounded-full cursor-pointer">
        <Image
          src={RightArr}
          alt="right arrow"
          width={15}
          height={18}
          className="w-[15px] h-[18px]"
        />
      </span>
    </Swiper>
  );
}
