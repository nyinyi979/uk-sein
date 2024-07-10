import Image from "next/image";
import Portfolio2 from "../images/portfolio-2.png";
import Portfolio3 from "../images/portfolio-3.png";
import Portfolio4 from "../images/portfolio-4.png";
import { useTranslations } from "next-intl";

export default function WhatDoWeCare() {
  const t = useTranslations("portfolio");
  const arr = [
    {
      id: "wdwc1",
      name: t("what-do-we-care1.name"),
      description: t("what-do-we-care1.description"),
      img: Portfolio2,
    },
    {
      id: "wdwc2",
      name: t("what-do-we-care2.name"),
      description: t("what-do-we-care2.description"),
      img: Portfolio3,
    },
    {
      id: "wdwc3",
      name: t("what-do-we-care2.name"),
      description: t("what-do-we-care2.description"),
      img: Portfolio4,
    },
  ];
  return (
    <div className="flex flex-col xl:gap-[65px] gap-8 pb-8">
      <p className="font-sora font-bold xl:text-5xl text-2xl text-center">
        {t("what-do-we-care")}
      </p>
      <div className="flex md:flex-row flex-col xl:gap-7 gap-8">
        {arr.map((a) => (
          <div
            key={a.id}
            className="flex flex-col xl:gap-[30px] gap-[18px] py-6 px-7 rounded-3xl bg-white shadow-portfolio"
          >
            <div className="xl:size-[120px] size-20 mx-auto rounded-full bg-khaki-50">
              <div className="xl:size-20 size-[50px] relative my-5 mx-auto">
                <Image
                  src={a.img}
                  alt={a.id}
                  fill
                  sizes="100%"
                  className="size-full object-cover"
                />
              </div>
            </div>
            <div className="w-full flex flex-col xl:gap-[14px] gap-1.5">
              <p className="font-sora font-semibold xl:text-2xl text-xl text-center">
                {a.name}
              </p>
              <p className="font-normal text-[#202020] text-center xl:text-base text-xs xl:leading-5 leading-[17.5px]">
                {a.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
