import SeasonalPromotions from "@/app/_components/seasonalPromotions";
import HowWeWorks from "./howWeWork";
import OurRecentProjects from "./ourRecentProjects";
import WhatDoWeCare from "./whatDoWeCare";
import FounderCard from "@/app/_components/founder";
import PortfolioCards from "./portfolioCards";

export default function Portfolio() {
  return (
    <div className="xl:w-[1192px] md:w-[668px] w-[340px] flex flex-col xl:gap-20 md:gap-10 gap-8 mx-auto xl:px-0 pb-10">
      <HowWeWorks />
      <WhatDoWeCare />
      <OurRecentProjects />
      <PortfolioCards />
      <SeasonalPromotions />
      <FounderCard />
    </div>
  );
}
