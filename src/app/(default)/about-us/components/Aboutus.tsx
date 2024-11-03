import FounderCard from "@/components/Founder";
import AboutUsCards from "./AboutUsCards";
import WhatDoWeServe from "./WhatDoWeServe";

export default function AboutUS() {
  return (
    <div className="xl:w-[1192px] md:w-[85%] sm:w-[90%] w-full flex flex-col xl:gap-20 md:gap-10 gap-8 mx-auto pb-10">
      <AboutUsCards />
      {/* <FounderCard /> */}
      <WhatDoWeServe />
      <div className="md:block hidden">
      </div>
      <div className="md:hidden">
      </div>
    </div>
  );
}
