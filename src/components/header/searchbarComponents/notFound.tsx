import Image from "next/image";
import Search from "./images/searchResult.png";
import { useTranslations } from "next-intl";

export default function SearchNotFound() {
  const t = useTranslations("search-bar");
  return (
    <div className="flex flex-col gap-4">
      <div className="size-[60px] relative mx-auto">
        <Image
          src={Search}
          alt="search not found"
          sizes="100%"
          fill
          className="size-full"
        />
      </div>
      <p className="font-medium text-center text-sm text-grey-200">
        {t("no-recent")}
      </p>
    </div>
  );
}
