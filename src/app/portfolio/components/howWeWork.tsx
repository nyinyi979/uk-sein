import Image from "next/image";
import Portfolio1 from "../images/portfolio-1.png";

export default function HowWeWorks() {
  return (
    <div className="w-full xl:h-[520px] md:h-[300px] h-[220px] relative">
      <div className="xl:w-[532px] md:w-[320px] w-[296px] flex flex-col xl:gap-[18px] xl:mt-[158px] mt-14 xl:ml-[86px] md:ml-20 ml-5 text-white">
        <p className="font-sora font-extrabold xl:text-[56px] md:text-[42px] text-[26px]">
          How We Work
        </p>
        <p className="md:font-semibold font-medium xl:text-lg text-xs xl:leading-[22.5px] leading-[14px] text-justify">
          Discover elegance and comfort with our innovative furniture
          collections. Crafted with care, each piece combines style and
          sustainability to enhance your living space. Visit our stores or shop
          online to experience quality like never before. Transform your home
          with our timeless designs today.
        </p>
      </div>
      <div className="w-full h-full absolute top-0 left-0 -z-[1]">
        <Image
          src={Portfolio1}
          alt="How we works"
          fill
          sizes="100%"
          className="w-full h-full object-cover"
          style={{
            backgroundImage:
              "background: linear-gradient(270deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.6) 87.5%);",
          }}
        />
      </div>
    </div>
  );
}
