import DiscountBanner from "@/components/banner/DiscountBanner";
import FounderCard from "@/components/Founder";
import SeasonalPromotions from "@/components/SeasonalPromotions";
import PromotionBanner from "@/components/banner/PromotionBanner";
import AboutUsCards from "./AboutUsCards";
import WhatDoWeServe from "./WhatDoWeServe";

export default function AboutUS() {
  return (
    <div className="xl:w-[1192px] md:w-[85%] sm:w-[90%] w-full flex flex-col xl:gap-20 md:gap-10 gap-8 mx-auto pb-10">
      <AboutUsCards />
      {/* <FounderCard /> */}
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
