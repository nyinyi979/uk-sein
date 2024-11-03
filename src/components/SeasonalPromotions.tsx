import Image from "next/image";
import Link from "next/link";
import AboutUs9 from "./images/sesonalPromotion.png";
import { useTranslations } from "next-intl";

export default function SeasonalPromotions() {
  const t = useTranslations();
  return (
    <div className="flex xl:flex-row flex-col xl:justify-between xl:gap-0 gap-6 sm:px-0 px-2">
      <div className="xl:w-[550px] w-full xl:h-[470px] lg:h-[350px] h-[240px] mx-auto relative rounded-[15px] overflow-hidden">
        <Image
          src={AboutUs9}
          alt="about us 9"
          fill
          sizes="100%"
          className="size-full object-cover object-center"
        />
      </div>
      <div className="xl:w-[570px] w-full flex flex-col xl:gap-8 gap-6">
        <p className="font-sora font-bold xl:text-[46px] text-2xl">
          {t("discount-banner.seasonal")}{" "}
          <span className="text-khaki-500">
            {t("discount-banner.promotion")}!
          </span>
        </p>
        <p className="font-medium xl:text-xl text-sm text-justify xl:leading-[25px] leading-[17.5px]">
          {t("discount-banner.transform-your-home")}
          <br /> <br />
          {t("discount-banner.save-up-to-40")}
        </p>
        <Link
          href={"/products"}
          className="w-fit h-[50px] block py-4 px-[28px] rounded-xl text-sm text-center bg-grey-500 md:bg-khaki-500 xl:bg-grey-500 text-white hover:bg-grey-400 md:hover:bg-khaki-700 xl:hover:bg-grey-400 duration-300"
        >
          {t("product.explore-now")}
        </Link>
      </div>
    </div>
  );
}
