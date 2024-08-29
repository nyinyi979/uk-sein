import Link from "next/link";
import Image from "next/image";
import Arrow from "../images/linkArrow.svg";
import { useTranslations } from "next-intl";
import { MEDIA_URL } from "@/utils/axios";

export default function EachCategory({ category }: { category: category }) {
  const t = useTranslations("product");
  return (
    <div className="xl:w-[375px] sm:w-full w-fit mx-auto h-fit flex flex-row gap-4 md:py-5 md:px-[18px] p-[18px] bg-white-400 rounded-[18px] align-middle justify-center">
      <div className="xl:size-[110px] lg:size-20 md:size-[50px] size-10 my-5 rounded-md overflow-hidden relative">
        <img
          src={MEDIA_URL + category.image}
          alt="img"
          className="size-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-2 align-middle justify-center">
        <p className="font-sora md:font-bold font-semibold xl:text-[32px] md:text-xl">
          {category.name}
        </p>
        <Link
          className="text-khaki-500 flex flex-row gap-2 xl:text-base md:text-xs text-[10px]"
          href={`/category/${category.name}`}
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
export interface category {
  id: string;
  name: string;
  image: string;
}
export const CategoryLoading = () => {
  return (
    <>
      <div className="xl:w-[375px] w-[98%] mx-auto xl:h-[150px] h-[70px] flex flex-row gap-4 md:py-5 md:px-[18px] p-[18px] bg-white-400 rounded-[18px] align-middle justify-center animate-pulse" />
      <div className="xl:w-[375px] w-[98%] mx-auto xl:h-[150px] h-[70px] flex flex-row gap-4 md:py-5 md:px-[18px] p-[18px] bg-white-400 rounded-[18px] align-middle justify-center animate-pulse" />
      <div className="xl:w-[375px] w-[98%] mx-auto xl:h-[150px] h-[70px] flex flex-row gap-4 md:py-5 md:px-[18px] p-[18px] bg-white-400 rounded-[18px] align-middle justify-center animate-pulse" />
      <div className="xl:w-[375px] w-[98%] mx-auto xl:h-[150px] h-[70px] flex flex-row gap-4 md:py-5 md:px-[18px] p-[18px] bg-white-400 rounded-[18px] align-middle justify-center animate-pulse" />
      <div className="xl:w-[375px] w-[98%] mx-auto xl:h-[150px] h-[70px] flex flex-row gap-4 md:py-5 md:px-[18px] p-[18px] bg-white-400 rounded-[18px] align-middle justify-center animate-pulse" />
      <div className="xl:w-[375px] w-[98%] mx-auto xl:h-[150px] h-[70px] flex flex-row gap-4 md:py-5 md:px-[18px] p-[18px] bg-white-400 rounded-[18px] align-middle justify-center animate-pulse" />
    </>
  );
};
