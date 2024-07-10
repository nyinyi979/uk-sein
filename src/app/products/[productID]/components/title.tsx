import Image from "next/image";
import BackArr from "@/svg/backArrow.svg";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function ProductTitle({ category }: { category: string }) {
  const router = useRouter();
  const t = useTranslations();
  return (
    <div className="flex flex-col gap-2.5 md:my-[50px] my-8">
      <button
        onClick={() => router.back()}
        className="flex flex-row gap-2.5 mr-auto md:text-base text-sm text-khaki-500 hover:text-khaki-700"
      >
        <div className="md:w-[25px] md:h-[21px] w-[19px] h-4 relative">
          <Image
            src={BackArr}
            alt="back arrow"
            fill
            sizes="100%"
            className="size-full mt-0.5"
          />{" "}
        </div>
        {t("back-to.back-to-products")}
      </button>
      <p className="font-semibold">
        <span>{t("product.categories")} - </span> {category}
      </p>
    </div>
  );
}
