import Image from "next/image";
import AboutUsCard from "./AboutUsCard";

import PantaNaw from '../images/pantanaw.jpg'
import Yangon from '../images/yangonuksein.jpg'
import Online3 from '../images/fb3.jpg'

import { useTranslations } from "next-intl";

export function AboutUsCard1() {
  const t = useTranslations("about-us");
  return (
    <AboutUsCard
      year="2004"
      title="Pantanaw UK SEIN"
      description={t("card1")}
      link={false}
    >
      <div className="w-full xl:h-[450px] lg:h-[350px] md:h-[240px] h-[150px] relative rounded-[10px]">
        <Image
          src={PantaNaw}
          alt="About us 1"
          fill
          sizes="100%"
          className="size-full rounded-[10px] object-contain"
        />
      </div>
    </AboutUsCard>
  );
}
export function AboutUsCard2() {
  const t = useTranslations("about-us");
  return (
    <AboutUsCard
      year="2019"
      title="UK SEIN Online Shop"
      description={t("card2")}
      link={true}
    >
      <div className="w-[full] xl:h-[450px] lg:h-[350px] md:h-[150px] h-[60px] relative flex flex-row justify-between">
          <Image
            src={Online3}
            alt="About us 3"
            fill
            sizes="100%"
            className="size-full rounded-[10px] object-contain"
          />
      </div>
    </AboutUsCard>
  );
}


export function AboutUsCard3() {
  const t = useTranslations("about-us");
  return (
    <AboutUsCard
      year="2021"
      title="Yangon Shop"
      description={t("card3")}
      link={false}
    >
      <div className="w-[full] xl:h-[450px] lg:h-[350px] md:h-[180px] h-[130px] relative flex flex-row justify-between">
      <div className="w-full xl:h-[450px] lg:h-[350px] md:h-[240px] h-[150px] relative rounded-[10px]">
        <Image
          src={Yangon}
          alt="About us 1"
          fill
          sizes="100%"
          className="size-full rounded-[10px] object-contain"
        />
      </div>
      </div>
    </AboutUsCard>
  );
}