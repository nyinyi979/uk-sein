import DiscountBanner from "@/app/_components/discountBanner";
import AboutUsCards from "./aboutUsCards";
import FounderCard from "./founder";
import SeasonalPromotions from "./seasonalPromotions";
import WhatDoWeServe from "./whatDoWeServe";

export default function AboutUS() {
  return (
    <div className="px-[125px] py-20 w-fit mx-auto">
      <div className="flex flex-col gap-20">
        <AboutUsCards />
        <FounderCard />
        <WhatDoWeServe />
        <SeasonalPromotions />
        <DiscountBanner imgURL="/images/promotion3.png" percent="40" />
      </div>
    </div>
  );
}
