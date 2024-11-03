import Image from "next/image";
import CartWhite from "../svg/cart-white.svg";
import { useTranslations } from "next-intl";

export default function QualityAssureRow({ className }: { className: string }) {
  const t = useTranslations("highlights");
  let texts = [
    {
      heading: t("quality-assure"),
      smallHeading: t("best-quality"),
    },
    {
      heading: t("customer-support"),
      smallHeading: t("we-care-your-exp"),
    },
    {
      heading: t("secure-payment"),
      smallHeading: t("100-secure-payment"),
    },
  ];
  return (
    <div className={`${className} md:shadow-light`}>
      <div className="w-full flex md:flex-row flex-col md:gap-0 gap-4 justify-between xl:px-[50px] ssm:px-0 px-5 xl:py-[70px] md:py-[50px] mx-auto rounded-3xl">
        {texts.map((text) => (
          <div
            key={text.heading}
            className="xl:w-full md:w-fit w-full flex xl:flex-row md:flex-col md:gap-4 gap-6 mx-auto md:px-0 md:py-0 py-4 px-8 rounded-[15px] md:shadow-none shadow-light"
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
