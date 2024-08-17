import Image from "next/image";
import SmallCard from "./SmallCard";
import TableImage from "./images/table.png";
import { useTranslations } from "next-intl";

export default function Table() {
  const t = useTranslations("product-showcase");
  return (
    <SmallCard
      bgClass="bg-[#F3F3F3]"
      heading={t("table")}
      href="/products"
      linkText={t("get-20-promo")}
      textClass="text-white xl:text-grey-500"
      linkClass="text-white xl:text-grey-500"
      pathClass="fill-white"
      content={t("table-tag")}
    >
      <div className="absolute size-full top-0 right-0">
        <Image
          src={TableImage}
          alt="table"
          fill
          sizes="100%"
          className="size-full object-cover xl:brightness-100 brightness-50"
        />
      </div>
    </SmallCard>
  );
}
