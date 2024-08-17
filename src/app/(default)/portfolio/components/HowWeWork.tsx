import Image from "next/image";
import Portfolio1 from "../images/portfolio-1.png";
import { useTranslations } from "next-intl";

export default function HowWeWorks() {
  const t = useTranslations("portfolio");
  return (
    <div className="w-full xl:h-[520px] lg:h-[400px] ssm:h-[300px] h-[220px] relative">
      <div className="xl:w-[532px] md:w-[320px] sm:w-[296px] flex flex-col xl:gap-[18px] xl:mt-[158px] ssm:mt-14 mt-10 xl:ml-[86px] md:ml-20 sm:ml-5 mx-2 text-white">
        <p className="font-sora font-extrabold xl:text-[56px] md:text-[42px] text-[26px]">
          {t("how-we-work")}
        </p>
        <p className="md:font-semibold font-medium xl:text-lg text-xs xl:leading-[22.5px] leading-[14px] text-justify">
          {t("discover-our-elegance")}
        </p>
      </div>
      <div className="size-full absolute top-0 left-0 -z-[1]">
        <Image
          src={Portfolio1}
          alt="How we works"
          fill
          sizes="100%"
          className="size-full object-cover [background-image:linear-gradient(270deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.6) 87.5%)]"
        />
      </div>
    </div>
  );
}
