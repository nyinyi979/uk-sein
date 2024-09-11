import Image from "next/image";
import SmallCard from "./SmallCard";
import PillowImage from "./images/pillows.jpg";
import { useTranslations } from "next-intl";

export default function Pillows() {
  const t = useTranslations("product-showcase");
  return (
    <SmallCard
      bgClass="bg-white-700"
      heading={t("pillows")}
      href="/products"
      linkText={t("EXPLORE-NOW")}
      linkClass="text-khaki-500"
      pathClass="fill-khaki-500"
      content={t("pillows-tag")}
    >
      <div className="size-full absolute top-0 xl:right-0 -right-32">
        <Image
          src={PillowImage}
          alt="pillows"
          fill
          sizes="100%"
          className="size-full object-cover"
        />
      </div>
    </SmallCard>
  );
}
