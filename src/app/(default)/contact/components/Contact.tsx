import Image from "next/image";
import JoinOurCommunity from "./JoinOurCommunity";
import Contact1 from "../images/contact1.png";
import Contact2 from "../images/contact2.png";
import Contact3 from "../images/contact3.png";
import Contact4 from "../images/contact4.png";
import { useTranslations } from "next-intl";

export default function Contact() {
  const arr = [Contact1, Contact2, Contact3, Contact4];
  const t = useTranslations("contact");
  return (
    <div className="xl:w-[1192px] md:w-[85%] sm:w-[90%] w-full mx-auto flex flex-col xl:gap-20 gap-10 xl:mx-auto xl:py-20 py-10">
      <div className="flex flex-col xl:gap-32 gap-8 relative">
        <div className="flex flex-col xl:gap-[50px] gap-8">
          <p className="font-sora font-bold xl:text-5xl text-[32px] md:text-left text-center">
            {t("contact-us")}
          </p>
          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 h-fit relative rounded-[15px]">
            {arr.map((a, ind) => (
              <div key={ind} className="flex flex-col gap-[18px]">
                <div className="w-full lg:h-[274px] h-[250px] mx-auto relative rounded-[15px] overflow-hidden">
                  <Image
                    src={a}
                    alt={`contact ${ind}`}
                    fill
                    sizes="100%"
                    className="size-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-[14px] xl:text-lg">
                  <span className="font-bold">
                    Innovate & No.63, {t("address")}
                  </span>
                  <span className="font-medium">09-887822121</span>
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
