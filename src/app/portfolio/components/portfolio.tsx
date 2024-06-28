import SeasonalPromotions from "@/app/components/seasonalPromotions";
import HowWeWorks from "./howWeWork";
import OurRecentProjects from "./ourRecentProjects";
import WhatDoWeCare from "./whatDoWeCare";
import { PortfolioCard1 } from "./portfolioCards";
import FounderCard from "@/app/components/founder";

export default function Portfolio() {
  return (
    <div className="xl:w-[1192px] flex flex-col gap-20 mx-auto xl:px-0 px-[52px] pb-10">
      <HowWeWorks />
      <WhatDoWeCare />
      <OurRecentProjects />
      <PortfolioCard1 />
      <SeasonalPromotions />
      <FounderCard />
    </div>
  );
}
