import Image from "next/image";
import AboutUs8 from "../images/about-us-8.png";

export default function FounderCard() {
  return (
    <div className="flex flex-row justify-between pb-[50px]">
      <p className="w-[355px] font-sora font-bold text-[58px] leading-[58px]">
        WORDS FROM OUR FOUNDER
      </p>
      <Image
        src={AboutUs8}
        alt="founder"
        width={330}
        height={400}
        className="w-[330] h-[400] object-cover"
      />
      <div className="w-[421px] flex flex-col gap-[42px] text-justify">
        <p className="font-[500] text-xl leading-[25px]">
          “Discover elegance and comfort with our innovative furniture
          collections. Crafted with care, each piece combines style and
          sustainability to enhance your living space. Visit our stores or shop
          online to experience quality like never before. Transform your home
          with our timeless designs today.”
        </p>
        <p className="font-bold text-[32px]">FOUNDER NAME</p>
      </div>
    </div>
  );
}
