import Image from "next/image";
import Portfolio1 from "../images/portfolio-1.png";
export default function HowWeWorks() {
  return (
    <div className="w-full h-[520px] relative">
      <div className="w-[532px] flex flex-col gap-[18px] mt-[158px] ml-[86px] text-white">
        <p className="font-sora font-extrabold text-[56px]">How We Work</p>
        <p className="font-semibold text-lg leading-[22.5px] text-justify">
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
          className="w-full h-full bg-cover"
          style={{
            backgroundImage:
              "background: linear-gradient(270deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.6) 87.5%);",
          }}
        />
      </div>
    </div>
  );
}
