import Image from "next/image";
import Portfolio2 from "../images/portfolio-2.png";
import Portfolio3 from "../images/portfolio-3.png";
import Portfolio4 from "../images/portfolio-4.png";
export default function WhatDoWeCare() {
  const arr = [
    {
      id: "wdwc1",
      name: "Customer Focus",
      description:
        "Delivering an exceptional customer experience drives everything we do.",
      img: Portfolio2,
    },
    {
      id: "wdwc2",
      name: "Collaborate Effectively",
      description:
        "We invest in cross-functional global partnerships that maximize impact.",
      img: Portfolio3,
    },
    {
      id: "wdwc3",
      name: "Innovate & Improve",
      description:
        "We are not limited by precedent. We boldly challenge the norm.",
      img: Portfolio4,
    },
  ];
  return (
    <div className="flex flex-col gap-[65px] pb-8">
      <p className="font-sora font-bold text-5xl text-center">
        What Do We Care?
      </p>
      <div className="flex flex-row gap-[28px]">
        {arr.map((a) => (
          <div
            key={a.id}
            className="flex flex-col gap-[30px] pt-6 px-7 pb-10 rounded-3xl bg-white shadow-portfolio"
          >
            <div className="size-[120px] mx-auto rounded-full bg-khaki-50">
              <div className="size-[80px] relative my-[20px] mx-auto">
                <Image
                  src={a.img}
                  alt={a.id}
                  fill
                  sizes="100%"
                  className="w-full h-full bg-cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[14px]">
              <p className="font-sora font-semibold text-2xl text-center">
                {a.name}
              </p>
              <p className="font-normal text-[#202020] leading-5 text-center">
                {a.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
