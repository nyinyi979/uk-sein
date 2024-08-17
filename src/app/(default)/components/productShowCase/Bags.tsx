import BagsImage from "./images/bags.png";
import Image from "next/image";
import SmallCard from "./SmallCard";
import { useTranslations } from "next-intl";

export default function Bags() {
  const t = useTranslations("product-showcase");
  return (
    <SmallCard
      bgClass="bg-khaki-200"
      heading={t("bags")}
      href="/products"
      linkText={t("get-20-promo")}
      pathClass="fill-grey-500"
      content={t("bags-tag")}
    >
      <div className="xl:w-[255px] xl:h-[290px] w-[142px] h-[164px] absolute top-0 right-0">
        <Image
          src={BagsImage}
          alt="bags"
          fill
          sizes="100%"
          className="size-full object-cover"
        />
      </div>
    </SmallCard>
  );
}
