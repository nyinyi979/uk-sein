import UkSeinFooter from "@/components/footer/images/UKSEINFooter.png";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
export default function SearchFooter() {
  const t = useTranslations();
  const links = [
    t("main-pages.HOME"),
    t("main-pages.PRODUCTS"),
    t("main-pages.PORTFOLIO"),
    t("main-pages.ABOUT-US"),
    t("main-pages.CONTACT"),
  ];
  const actualLinks = ["/", "products", "portfolio", "about-us", "contact"];
  return (
    <div className="xl:hidden flex flex-col py-6 bg-white shadow-searchFooter">
      <div className="flex flex-col md:gap-[18px] gap-6">
        <div className="w-[130px] h-[120px] mx-auto relative">
          <Image
            src={UkSeinFooter}
            alt="uksein footer"
            fill
            sizes="100%"
            className="size-auto"
          />
        </div>
        <div className="w-fit mx-auto flex flex-row md:gap-[56px] gap-2.5 flex-wrap justify-center">
          {links.map((link, ind) => (
            <Link
              key={link}
              href={actualLinks[ind]}
              className="hover:text-khaki-500 font-normal font-sora md:text-base text-xs duration-300"
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
