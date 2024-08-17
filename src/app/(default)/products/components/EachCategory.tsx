import Link from "next/link";
import Image from "next/image";
import Arrow from "../images/linkArrow.svg";
import { useTranslations } from "next-intl";

export default function EachCategory({ category }: { category: string }) {
  const t = useTranslations("product");
  return (
    <div className="xl:w-[375px] sm:w-full w-fit mx-auto h-fit flex flex-row gap-4 md:py-5 md:px-[18px] p-[18px] bg-white-400 rounded-[18px] align-middle justify-center">
      <div className="xl:size-[110px] lg:size-20 md:size-[50px] size-10 my-5 rounded-md overflow-hidden relative">
        <Image
          src={"/sampleDiscount.png"}
          alt="img"
          fill
          sizes="100%"
          className="size-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 align-middle justify-center">
        <p className="font-sora md:font-bold font-semibold xl:text-[32px] md:text-xl">
          {category}
        </p>
        <Link
          className="text-khaki-500 flex flex-row gap-2 xl:text-base md:text-xs text-[10px]"
          href={`/category/${category}`}
        >
          <div className="xl:size-4 size-2.5 md:block hidden mt-1 relative">
            <Image
              src={Arrow}
              alt="arrow"
              fill
              sizes="100%"
              className="size-full object-cover"
            />
          </div>
          {t("explore-now")}
          <div className="size-2 md:hidden mt-1 relative">
            <Image
              src={Arrow}
              alt="arrow"
              fill
              sizes="100%"
              className="size-full object-cover"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
