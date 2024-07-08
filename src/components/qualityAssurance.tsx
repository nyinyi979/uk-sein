import Image from "next/image";
import CartWhite from "../svg/cart-white.svg";

export default function QualityAssureRow({ className }: { className: string }) {
  let texts = [
    {
      heading: "Quality Assure",
      smallHeading: "Best quality in local",
    },
    {
      heading: "Customer Support",
      smallHeading: "We care your experience",
    },
    {
      heading: "Secure Payment",
      smallHeading: "100% Secure Payment Method",
    },
  ];
  return (
    <div className={`${className} md:shadow-light`}>
      <div className="w-full flex md:flex-row flex-col md:gap-0 gap-4 justify-between xl:px-[50px] px-5 xl:py-[70px] md:py-[50px] mx-auto rounded-3xl">
        {texts.map((text) => (
          <div
            key={text.heading}
            className="w-fit flex xl:flex-row md:flex-col md:gap-4 gap-6 mx-auto md:px-0 md:py-0 py-4 px-8 rounded-[15px] md:shadow-none shadow-light"
          >
            <div className="md:w-[60px] md:h-[56px] size-[46px] md:px-5 md:py-4 pt-[14px] pl-4 bg-khaki-500 rounded-xl">
              <div className="md:size-[22px] size-4 relative">
                <Image
                  src={CartWhite}
                  alt="cartWhite"
                  fill
                  sizes="100%"
                  className="size-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col md:gap-2.5 gap-1.5 font-sora">
              <p className="font-semibold xl:text-lg text-sm">{text.heading}</p>
              <p className="text-gray-400 xl:text-[15px] text-xs">
                {text.smallHeading}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
