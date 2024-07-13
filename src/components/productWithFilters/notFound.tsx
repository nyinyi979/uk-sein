import { useTranslations } from "next-intl";
import Image from "next/image";

export default function NotFoundError() {
  const t = useTranslations("category");
  return (
    <div className="col-span-3 md:w-1/2 mx-auto py-[120px]">
      <div className="size-[120px] mx-auto relative">
        <Image
          src={"/images/error.png"}
          alt="error"
          fill
          sizes="100%"
          className="size-full object-cover"
        />
      </div>
      <p className="py-5 font-semibold text-center text-grey-200">
        {t("sorry-no-data-found")} <br /> {t("try-to-search")}
      </p>
    </div>
  );
}
