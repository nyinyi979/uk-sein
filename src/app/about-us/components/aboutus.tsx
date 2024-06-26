import DiscountBanner from "@/app/components/discountBanner";
import AboutUsCards from "./aboutUsCards";
import WhatDoWeServe from "./whatDoWeServe";
import FounderCard from "@/app/components/founder";
import SeasonalPromotions from "@/app/components/seasonalPromotions";

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
