import DiscountBanner from "@/app/components/discountBanner";
import AboutUsCards from "./aboutUsCards";
import WhatDoWeServe from "./whatDoWeServe";
import FounderCard from "@/app/components/founder";
import SeasonalPromotions from "@/app/components/seasonalPromotions";

export default function AboutUS() {
  return (
      <div className="xl:w-[1192px] flex flex-col xl:gap-20 gap-10 mx-auto xl:px-0 px-[52px] xl:py-20 py-10">
        <AboutUsCards />
        <FounderCard />
        <WhatDoWeServe />
        <SeasonalPromotions />
        <DiscountBanner imgURL="/images/promotion3.png" percent="40" />
      </div>
  );
}
