import { useTranslations } from "next-intl";
import {
  AboutUsCard1,
  AboutUsCard2,
  AboutUsCard3,
  AboutUsCard4,
} from "./AboutUsCards_";

export default function AboutUsCards() {
  const t = useTranslations("about-us");
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2.5 font-sora">
        <p className="font-normal xl:text-2xl text-grey-400">{t("story")}</p>
        <p className="font-bold xl:text-5xl text-2xl text-grey-500">
          {t("over-the-year")}
        </p>
      </div>
      <div className="flex flex-col gap-0">
        <AboutUsCard1 />
        <AboutUsCard2 />
        <AboutUsCard3 />
        <AboutUsCard4 />
      </div>
    </div>
  );
}
