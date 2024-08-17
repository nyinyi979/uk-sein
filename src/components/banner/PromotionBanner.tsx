import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function PromotionBanner() {
  const t = useTranslations("discount-banner");
  return (
    <div className="ssm:w-full sm:w-[353px] w-full xl:h-[380px] lg:h-[300px] md:h-[250px] ssm:h-[200px] h-[160px] mx-auto relative flex rounded-[15px] xl:py-16 md:py-10 ssm:py-8 py-6 md:px-20 px-8 font-bold text-left overflow-hidden">
      <div className="flex flex-col md:gap-8 gap-4">
        <p className="font-sora xl:text-[56px] md:text-[32px] text-xl xl:leading-[65px] md:leading-10 z-10">
          {t("rainy-season")} <br /> {t("big-promotion")}
        </p>
        <Link
          href={"/products"}
          className="w-fit h-fit md:py-4 py-2 md:px-[28px] px-[18px] rounded-xl bg-khaki-500 xl:bg-khaki-500 md:bg-grey-500 font-semibold md:text-base text-sm text-white md:hover:bg-grey-400 hover:bg-khaki-700 xl:hover:bg-khaki-700 duration-300"
        >
          {t("shop-now")}
        </Link>
      </div>
      <div className="xl:size-[148px] size-[81px] md:block hidden absolute xl:top-[151px] top-[91px] xl:left-[463px] left-[310px]">
        <Image
          src="/images/discount.png"
          alt="discount"
          fill
          sizes="100%"
          className="size-full object-cover"
        />
      </div>
      <Image
        src="/images/promotion2.png"
        alt="promotion image"
        fill
        className="w-auto h-auto absolute top-0 left-0 object-cover z-[-1]"
      />
    </div>
  );
}
