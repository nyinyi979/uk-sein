import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function DiscountBanner({
  imgURL,
  percent,
}: {
  percent: string;
  imgURL: string;
}) {
  const t = useTranslations("discount-banner");
  return (
    <div className="w-full xl:h-[380px] lg:h-[300px] md:h-[250px] ssm:h-[200px] h-[160px] mx-auto relative flex md:py-10 ssm:py-7 py-5 md:px-20 px-10 rounded-[15px] overflow-hidden font-bold text-right">
      <div className="md:w-[423px] flex flex-col xl:gap-10 md:gap-6 gap-4 ml-auto">
        <div className="flex flex-col xl:gap-[18px] gap-2.5">
          <p className="font-bold font-sora xl:text-[56px] md:text-[32px] text-xl xl:leading-[65px] md:leading-10 leading-6">
            Grab your <br />
            {percent}% Discount!
          </p>
          <p className="font-semibold xl:text-base md:text-sm text-[10px]">
            {t("seasonal-time")}
          </p>
        </div>
        <Link
          href={"/products"}
          className="w-fit h-fit md:py-4 py-2 md:px-[28px] px-[18px] ml-auto rounded-xl md:bg-grey-500 bg-khaki-500 font-bold text-white text-sm text-center hover:bg-khaki-700 md:hover:bg-grey-300 duration-300"
        >
          {t("shop-now")}
        </Link>
      </div>
      <div className="size-full absolute top-0 left-0 z-[-1]">
        <Image
          src={imgURL}
          alt="discount image"
          fill
          sizes="100%"
          className="size-full object-cover"
        />
      </div>
    </div>
  );
}
