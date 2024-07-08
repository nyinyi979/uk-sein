import Image from "next/image";
import AboutUs8 from "./images/founder.png";

export default function FounderCard() {
  return (
    <div className="flex md:flex-row flex-col md:gap-0 gap-8 justify-between pb-[50px]">
      <p className="xl:w-[355px] md:w-[169px] w-full font-sora font-bold xl:text-[58px] text-[28px] xl:leading-[58px] leading-[35.28px]">
        WORDS FROM OUR FOUNDER
      </p>
      <div className="xl:w-[330px] md:w-[200px] w-full xl:h-[400px] md:h-[260px] h-[400px] relative rounded-3xl overflow-hidden">
        <Image
          src={AboutUs8}
          alt="founder"
          fill
          sizes="100%"
          className="size-full object-cover"
        />
      </div>
      <div className="xl:w-[421px] md:w-[231px] w-full flex flex-col md:gap-[42px] gap-6 text-justify">
        <p className="font-medium xl:text-xl md:text-sm text-base xl:leading-[25px] md:leading-[17.5px] leading-5">
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
