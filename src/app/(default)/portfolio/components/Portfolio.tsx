import HowWeWorks from "./HowWeWork";
import OurRecentProjects from "./OurRecentProjects";
import WhatDoWeCare from "./WhatDoWeCare";
import FounderCard from "@/components/Founder";
import PortfolioCards from "./PortfolioCards";

export default function Portfolio() {
  return (
    <div className="xl:w-[1192px] md:w-[85%] sm:w-[90%] w-full flex flex-col xl:gap-20 md:gap-10 gap-8 mx-auto pb-10">
      <HowWeWorks />
      <WhatDoWeCare />
      <OurRecentProjects />
      <PortfolioCards />
      {/* <FounderCard /> */}
    </div>
  );
}
