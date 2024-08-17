import Image from "next/image";
import Portfolio5 from "../images/portfolio-5.jpg";
import Portfolio6 from "../images/portfolio-6.jpg";
import Portfolio7 from "../images/portfolio-7.jpg";
import { useTranslations } from "next-intl";

export default function OurRecentProjects() {
  const t = useTranslations("portfolio");
  const arr = [
    {
      id: "orp1",
      name: "A's Thai Spa",
      description: t("to-expand"),
      img: Portfolio5,
    },
    {
      id: "orp2",
      name: "Dream Floral Service & Event Decoration",
      description: t("to-expand"),
      img: Portfolio6,
    },
    {
      id: "orp3",
      name: "Dior By Heart",
      description: t("to-expand"),
      img: Portfolio7,
    },
  ];
  return (
    <div className="flex flex-col gap-[50px]">
      <p className="font-sora font-bold xl:text-5xl md:text-2xl text-[28px] text-center">
        {t("our-recent-projects")}
      </p>
      <div className="lg:grid w-fit hidden grid-cols-3 gap-5 mx-auto">
        {arr.map((a) => (
          <div key={a.id} className="flex flex-col gap-6">
            <div className="size-[374px] relative rounded-[10px] overflow-hidden">
              <Image
                src={a.img}
                alt={a.name}
                fill
                sizes="100%"
                className="size-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-6">
              <p className="w-[278px] h-[60px] font-sora font-bold text-2xl">
                {a.name}
              </p>
              <p className="font-normal leading-[22.5px] text-justify text-lg">
                {a.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
