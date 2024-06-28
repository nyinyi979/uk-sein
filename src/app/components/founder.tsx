import Image from "next/image";
import AboutUs8 from "./images/founder.png";

export default function FounderCard() {
  return (
    <div className="flex flex-row justify-between pb-[50px]">
      <p className="xl:w-[355px] w-[169px] font-sora font-bold xl:text-[58px] text-[28px] xl:leading-[58px] leading-[35.28px]">
        WORDS FROM OUR FOUNDER
      </p>
      <div className="xl:w-[330px] w-[200px] xl:h-[400px] h-[260px] relative rounded-3xl overflow-hidden">
        <Image
          src={AboutUs8}
          alt="founder"
          fill
          sizes="100%"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="xl:w-[421px] w-[231px] flex flex-col gap-[42px] text-justify">
        <p className="font-[500] xl:text-xl text-sm xl:leading-[25px] leading-[17.5px]">
          “Discover elegance and comfort with our innovative furniture
          collections. Crafted with care, each piece combines style and
          sustainability to enhance your living space. Visit our stores or shop
          online to experience quality like never before. Transform your home
          with our timeless designs today.”
        </p>
        <p className="font-bold xl:text-[32px] text-2xl">FOUNDER NAME</p>
      </div>
    </div>
  );
}
