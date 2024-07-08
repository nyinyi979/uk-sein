import {
  AboutUsCard1,
  AboutUsCard2,
  AboutUsCard3,
  AboutUsCard4,
} from "./aboutUsCards_";

export default function AboutUsCards() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2.5 font-sora">
        <p className="font-normal xl:text-2xl text-grey-400">
          Story of UK SEIN
        </p>
        <p className="font-bold xl:text-5xl text-2xl text-grey-500">
          OVER THE YEARS
        </p>
      </div>
      <div className="flex flex-col gap-0">
        <AboutUsCard1 />
        <AboutUsCard2 />
        <AboutUsCard3 />
        <AboutUsCard4 />
      </div>
    </div>
  );
}
