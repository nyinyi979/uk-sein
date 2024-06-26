import Image from "next/image";
import Map from "../images/map.png";
import JoinOurCommunity from "./joinOurCommunity";
export default function Contact() {
  return (
    <div className="px-[125px] pb-32">
      <div className="flex flex-col gap-32 relative">
        <div className="flex flex-col gap-[50px]">
          <p className="font-sora font-bold text-5xl">Visit Our Shop</p>
          <div className="h-[660px] relative">
            <Image
              src={Map}
              alt="map"
              fill
              sizes="100%"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <JoinOurCommunity />
      </div>
    </div>
  );
}
