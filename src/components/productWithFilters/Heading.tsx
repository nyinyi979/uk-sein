import Image from "next/image";
import Sort from "./images/sort.svg";
import { useTranslations } from "next-intl";

export default function CateogryHeading({
  category,
  show,
  productCounts,
  searched = false,
}: {
  category: string;
  show: () => void;
  productCounts: number;
  searched?: boolean;
}) {
  const t = useTranslations("category");
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <p className="font-sora font-bold md:text-[48px] text-lg leading-10">
          {category}
        </p>
        <p className="md:leading-8 leading-4">
          <span className="text-grey-100 md:text-base text-sm">
            {searched ? t("results") : t("category")} -{" "}
          </span>
          {searched ? productCounts + " Results" : category}
        </p>
      </div>
      <div className="xl:hidden flex flex-row gap-2.5 ml-auto">
        <button className="md:size-[46px] size-[36px] py-2 md:px-5 px-3 bg-khaki-50 hover:bg-khaki-100 rounded-[10px] duration-300">
          <span className="block w-3 h-3 relative">
            <Image
              src={Sort}
              alt="sort"
              fill
              sizes="100%"
              className="size-auto object-cover"
            />
          </span>
        </button>
        <button
          onClick={show}
          className="w-fit h-fit flex flex-row gap-2 md:py-3 py-2 md:px-[28px] px-5 rounded-xl bg-grey-500 font-bold text-white text-sm text-center hover:bg-grey-300 duration-300"
        >
          <svg
            className="mt-1"
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.9112 0.595629C12.8343 0.417827 12.7068 0.266571 12.5445 0.160672C12.3823 0.0547733     12.1925 -0.00109472 11.9988 1.62526e-05H0.998986C0.805447 0.000397594 0.616178 0.0569339 0.454138 0.162767C0.292098 0.2686 0.164253 0.419181 0.0861095 0.596244C0.00796651 0.773306 -0.0171154 0.96924 0.0139065 1.16028C0.0449283 1.35131 0.130721 1.52924 0.260876 1.67248L0.265876 1.67811L4.49891 6.19801V10.9998C4.49887 11.1808 4.54795 11.3584 4.64091 11.5137C4.73387 11.6689 4.86723 11.7961 5.02677 11.8815C5.18631 11.967 5.36605 12.0075 5.54682 11.9988C5.7276 11.9902 5.90263 11.9326 6.05326 11.8323L8.05321 10.4985C8.19031 10.4072 8.30273 10.2834 8.38047 10.1382C8.45821 9.99298 8.49887 9.8308 8.49883 9.66607V6.19801L12.7325 1.67811L12.7375 1.67248C12.869 1.5299 12.9556 1.35173 12.9865 1.16022C13.0174 0.968713 12.9913 0.772345 12.9112 0.595629ZM7.77009 5.5174C7.5964 5.70151 7.4994 5.9449 7.49885 6.19801V9.66607L5.49889 10.9998V6.19801C5.49947 5.94399 5.40288 5.69937 5.2289 5.51428L0.998986 0.999995H11.9988L7.77009 5.5174Z"
              fill="white"
            />
          </svg>
          <span>{t("filter")}</span>
        </button>
      </div>
    </div>
  );
}
