import Image from "next/image";
import AboutUs8 from "./images/founder.png";
import { useTranslations } from "next-intl";

export default function FounderCard() {
  const t = useTranslations("founder");
  return (
    <div className="flex md:flex-row flex-col md:gap-0 gap-8 justify-between pb-[50px] sm:px-0 px-2">
      <p className="xl:w-[355px] lg:w-[200px] md:w-[169px] w-full font-sora font-bold xl:text-[58px] lg:text-[40px] text-[28px] xl:leading-[58px] lg:leading-10 leading-[35.28px]">
        {t("words-from-our-founder")}
      </p>
      <div className="xl:w-[330px] lg:w-[250px] md:w-[200px] w-full xl:h-[400px] lg:h-[350px] md:h-[260px] h-[400px] relative rounded-3xl overflow-hidden">
        <Image
          src={AboutUs8}
          alt="founder"
          fill
          sizes="100%"
          className="size-full object-cover object-top"
        />
      </div>
      <div className="xl:w-[421px] lg:w-[330px] md:w-[231px] w-full flex flex-col md:gap-[42px] gap-6 text-justify">
        <p className="font-medium xl:text-xl lg:text-base md:text-sm text-base xl:leading-[25px] lg:leading=5 md:leading-[17.5px] leading-5">
          {t("founder-details")}
        </p>
        <p className="font-bold xl:text-[32px] text-2xl">{t("founder-name")}</p>
      </div>
    </div>
  );
}
