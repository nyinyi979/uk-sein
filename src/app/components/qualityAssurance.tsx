import Image from "next/image";
import CartWhite from "../svg/cart-white.svg";
export default function QualityAssureRow() {
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
    <div>
      <div className="flex flex-row justify-between xl:px-[50px] px-6 xl:py-[70px] py-[50px] rounded-3xl shadow-light">
        {texts.map((text) => (
          <div
            key={text.heading}
            className="w-full flex xl:flex-row flex-col gap-4 mx-auto"
          >
            <div className="w-[60px] h-[56px] px-5 py-4 bg-khaki-500 rounded-xl">
              <Image src={CartWhite} alt="cartWhite" width={22} height={22} />
            </div>
            <div className="font-sora">
              <p className="font-semibold text-lg">{text.heading}</p>
              <p className="text-gray-400 text-[15px]">{text.smallHeading}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
