import Image from "next/image";
import AboutUsCard from "./AboutUsCard";
import AboutUs1 from "../images/about-us-1.png";
import AboutUs2 from "../images/about-us-2.png";
import AboutUs3 from "../images/about-us-3.png";
import AboutUs4 from "../images/about-us-4.png";
import AboutUs5 from "../images/about-us-5.png";
import AboutUs6 from "../images/about-us-6.png";
import AboutUs7 from "../images/about-us-7.png";
import { useTranslations } from "next-intl";

export function AboutUsCard1() {
  const t = useTranslations("about-us");
  return (
    <AboutUsCard
      year="2018"
      title="The Visionary Founder"
      description={t("card1")}
    >
      <div className="w-full xl:h-[450px] lg:h-[350px] md:h-[240px] h-[150px] relative rounded-[10px]">
        <Image
          src={AboutUs1}
          alt="About us 1"
          fill
          sizes="100%"
          className="size-full rounded-[10px] object-cover"
        />
      </div>
    </AboutUsCard>
  );
}
export function AboutUsCard2() {
  const t = useTranslations("about-us");
  return (
    <AboutUsCard
      year="2020"
      title="The Smart Furniture Revolution"
      description={t("card2")}
    >
      <div className="w-[full] xl:h-[450px] lg:h-[350px] md:h-[180px] h-[130px] relative flex flex-row justify-between">
        <div className="w-[49%] h-full relative">
          <Image
            src={AboutUs2}
            alt="About us 2"
            fill
            sizes="100%"
            className="size-full rounded-[10px] object-cover"
          />
        </div>
        <div className="w-[49%] h-full relative">
          <Image
            src={AboutUs3}
            alt="About us 3"
            fill
            sizes="100%"
            className="size-full rounded-[10px] object-cover"
          />
        </div>
      </div>
    </AboutUsCard>
  );
}
export function AboutUsCard3() {
  const t = useTranslations("about-us");
  return (
    <AboutUsCard
      year="2022"
      title="Opening Flagship Stores"
      description={t("card3")}
    >
      <div className="w-[full] xl:h-[450px] lg:h-[350px] md:h-[150px] h-[60px] relative flex flex-row justify-between">
        <div className="w-[32%] h-full relative">
          <Image
            src={AboutUs4}
            alt="About us 2"
            fill
            sizes="100%"
            className="size-full rounded-[10px] object-cover"
          />
        </div>
        <div className="w-[32%] h-full relative">
          <Image
            src={AboutUs5}
            alt="About us 3"
            fill
            sizes="100%"
            className="size-full rounded-[10px] object-cover"
          />
        </div>
        <div className="w-[32%] h-full relative">
          <Image
            src={AboutUs6}
            alt="About us 3"
            fill
            sizes="100%"
            className="size-full rounded-[10px] object-cover"
          />
        </div>
      </div>
    </AboutUsCard>
  );
}
export function AboutUsCard4() {
  const t = useTranslations("about-us");
  return (
    <AboutUsCard
      year="2024"
      title="Building Local Ties"
      description={t("card4")}
    >
      <div className="w-full xl:h-[450px] md:h-[240px] h-[150px] relative rounded-[10px]">
        <Image
          src={AboutUs7}
          alt="About us 1"
          fill
          sizes="100%"
          className="size-full rounded-[10px] object-cover"
        />
      </div>
    </AboutUsCard>
  );
}
