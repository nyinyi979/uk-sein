import SeasonalPromotions from "@/app/components/seasonalPromotions";
import HowWeWorks from "./howWeWork";
import OurRecentProjects from "./ourRecentProjects";
import WhatDoWeCare from "./whatDoWeCare";
import { PortfolioCard1 } from "./portfolioCards";
import FounderCard from "@/app/components/founder";

export default function Portfolio() {
  return (
    <div className="px-[125px] pb-10">
      <div className="flex flex-col gap-20">
        <HowWeWorks />
        <WhatDoWeCare />
        <OurRecentProjects />
        <PortfolioCard1 />
        <SeasonalPromotions />
        <FounderCard />
      </div>
    </div>
  );
}
