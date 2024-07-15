import DiscountBanner from "@/components/banner/discountBanner";
import FounderCard from "@/components/founder";
import SeasonalPromotions from "@/components/seasonalPromotions";
import PromotionBanner from "@/components/banner/promotionBanner";
import AboutUsCards from "./aboutUsCards";
import WhatDoWeServe from "./whatDoWeServe";

export default function AboutUS() {
  return (
    <div className="xl:w-[1192px] md:w-[668px] sm:w-[340px] w-full flex flex-col xl:gap-20 gap-10 mx-auto xl:py-20 md:py-10 py-8 sm:px-0 px-2">
      <AboutUsCards />
      <FounderCard />
      <WhatDoWeServe />
      <SeasonalPromotions />
      <div className="md:block hidden">
        <DiscountBanner imgURL="/images/promotion3.png" percent="40" />
      </div>
      <div className="md:hidden">
        <PromotionBanner />
      </div>
    </div>
  );
}
