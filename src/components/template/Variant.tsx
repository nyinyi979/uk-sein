import React from "react";
import Link from "next/link";
import RatingStars from "./Rating";
import ProductAddToCart from "./AddToCart";
import { review, variant } from "@/types/type";
import { useLocale } from "next-intl";
import { MEDIA_URL } from "@/utils/axios";
import useRatings from "./useRatings";
import { useReviewStore } from "@/store/review";

export default function Variant({ small, variation }: smallLargeProduct) {
  const locale = useLocale();
  const {
    product,
    images,
    name,
    categories,
    mm_name,
    id,
    regular_price,
    discount,
  } = variation;
  const { getReviews, reviewsData } = useReviewStore();
  const [reviews, setReviews] = React.useState<review[]>(
    reviewsData[product] || [],
  );
  React.useEffect(() => {
    getReviews(product).then((val) => {
      setReviews(val);
    });
  }, []);
  const { rating, ratings } = useRatings({ reviews });

  return (
    <div className="flex flex-col gap-2.5">
      <Link href={`/products/${product}`}>
        <div className="w-fit flex flex-col gap-2.5 mx-auto relative rounded-3xl">
          <div
            className={`flex items-center ${small ? "xl:size-[274px] md:size-[209px] sm:w-[160px] w-full h-fit" : "xl:w-[376px] xl:h-[350px] md:size-[320px] ssm:size-[200px] sm:size-[160px] w-full h-fit"} flex align-middle justify-center bg-white-400 rounded-[15px] overflow-hidden ${small ? "sm:py-10 py-5" : "sm:py-8 py-4"}`}
          >
            <div
              className={`relative ${small ? "xl:w-[231px] xl:h-[206px] md:w-[171px] w-[127px] md:h-[152px] h-[113px]" : "xl:w-[333px] md:w-[263px] ssm:size-[160px] w-[127px] xl:h-[296px] md:h-[233px] ssm:h-[150px] h-[113px]"} shadow-product`}
            >
              <img
                src={MEDIA_URL + images[0]?.image}
                alt={name}
                className="size-full object-cover"
              />
            </div>
            <span className="absolute top-[18px] left-4 py-2 md:px-2.5 px-[18px] bg-red-50 rounded-[10px] font-semibold text-red-500 text-center xl:text-sm md:text-xs text-[10px]">
              {categories[0]}
            </span>
          </div>
          <div className="flex flex-col xl:gap-[14px] md:gap-2.5 gap-2">
            <div className="flex flex-col md:gap-1.5 gap-1">
              <p
                className={`py-1 font-sora font-semibold ${small ? "xl:text-xl md:text-base text-sm" : "xl:text-2xl md:text-xl text-sm"}`}
              >
                {locale === "en" ? name : mm_name}
              </p>
              <p
                className={`${small ? "md:text-xs text-[8px]" : "md:text-sm text-[8px]"} text-grey-300`}
              >
                {locale === "en" ? mm_name : name}{" "}
                {/* <span className="px-2 text-grey-200">({id})</span> */}
              </p>
            </div>
            <RatingStars count={rating} />
            <p
              className={`font-bold font-sora ${small ? "xl:text-[32px] md:text-2xl text-xl" : "xl:text-[42px] md:text-[32px] text-xl leading-10"}`}
            >
              {(Number(regular_price) - Number(discount)).toLocaleString()} Ks
            </p>
          </div>
        </div>
      </Link>
      <div className="flex flex-row gap-[18px]">
        <ProductAddToCart small={small} variation={variation} wishlisted />
      </div>
    </div>
  );
}
export function ProductLoading() {
  return (
    <div className="w-full h-[300px] bg-gray-100 rounded-md animate-pulse" />
  );
}
interface smallLargeProduct {
  variation: variant;
  small: boolean;
}
