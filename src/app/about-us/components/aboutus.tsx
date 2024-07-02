import DiscountBanner from "@/app/_components/discountBanner";
import FounderCard from "@/app/_components/founder";
import SeasonalPromotions from "@/app/_components/seasonalPromotions";
import PromotionBanner from "@/app/_components/promotionBanner";
import AboutUsCards from "./aboutUsCards";
import WhatDoWeServe from "./whatDoWeServe";

export default function AboutUS() {
  return (
    <div className="xl:w-[1192px] md:w-[668px] w-[340px] flex flex-col xl:gap-20 gap-10 mx-auto xl:py-20 md:py-10 py-8">
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
