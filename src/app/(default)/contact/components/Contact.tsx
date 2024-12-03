'use client'
import Image from "next/image";
import JoinOurCommunity from "./JoinOurCommunity";
import Dagon from "../images/dagon.jpg";
import NordDagon from "../images/norddagon.jpg";
import Online from "../images/online.jpg";
import PandaNaw from "../images/pandanaw.jpg";
import { useTranslations } from "next-intl";

export default function Contact() {
  const arr = [
    {
      image: Dagon,
      title:
        "No 63(B), Bo Yar Nyunt Rd, Yaw Min Gyi Ward, Dagon Township, Yangon.",
      number: "09 771 778 064/ 09 768 610 146/ 09 777 891 177",
    },
    {
      image: PandaNaw,
      title: "Yangon – Pathein, Highway, Pantanaw Township",
      number: "09 791 797 411/ 09 794 543 869/ 09 790 195 753",
    },
    {
      image: NordDagon,
      title: "No (522), 44 Ward, Bayint Naung Rd, North Dagon Township, Yangon",
      number: "09 774 102 067/ 09 790 195 753/ 09 799 233 021",
    },
    {
      image: Online,
      list: [
        {
          name: "ယူကေစိန် ,UK SEIN, Myanmar Local Crafts",
          link: "https://www.facebook.com/ukseinmmlocalcrafts?mibextid=ZbWKwL",
        },
        {
          name: "UK SEIN Furniture",
          link: "https://www.facebook.com/ukseinfurniture?mibextid=ZbWKwL",
        },
        {
          name: "ယူကေစိန်-မြောက်ဒဂုံ , UKSEIN-NorthDagon",
          link: "https://www.facebook.com/profile.php?id=61554102028691&mibextid=ZbWKwL ",
        },
      ],
    },
  ];
  const t = useTranslations("contact");
  return (
    <div className="xl:w-[1192px] md:w-[85%] sm:w-[90%] w-full mx-auto flex flex-col xl:gap-20 gap-10 xl:mx-auto xl:py-20 py-10">
      <div className="flex flex-col xl:gap-32 gap-8 relative">
        <div className="flex flex-col xl:gap-[50px] gap-8">
          <p className="font-sora font-bold xl:text-5xl text-[32px] md:text-left text-center">
            {t("contact-us")}
          </p>
          <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 h-fit relative rounded-[15px]">
            {arr.map((a, ind) => (
              <div key={ind} className="flex flex-col gap-[18px]">
                <div className="w-full lg:h-[274px] h-[250px] mx-auto relative rounded-[15px] overflow-hidden">
                  <Image
                    src={a.image}
                    alt={`contact ${ind}`}
                    fill
                    sizes="100%"
                    className="size-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-[14px] xl:text-lg">
                  <span className="font-bold">{a.title}</span>
                  <span className="font-medium">{a.number}</span>
                  <div className="">
                    {a.list && (
                      <ul>
                        {a.list?.map((data, index) => {
                          return (
                            <li
                              className=" cursor-pointer mb-2 font-bold"
                              onClick={() => {
                                window.open(data.link, "_blank");
                              }}
                              key={index}
                            >
                              {data.name}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <JoinOurCommunity />
      </div>
    </div>
  );
}
