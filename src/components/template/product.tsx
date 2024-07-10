import Image from "next/image";
import Link from "next/link";
import WishList from "../actions/wishlist";
import RatingStars from "./rating";
import { product } from "@/types/type";
import AddToCartButton from "./addToCart";
import { useLocale } from "next-intl";

export default function Product({
  itemID,
  category,
  imageURL,
  engName,
  myName,
  rating,
  price,
  whiteListed,
  small,
}: smallLargeProduct) {
  const locale = useLocale();
  return (
    <Link href={`/products/${itemID}`}>
      <div className="w-fit flex flex-col gap-2.5 mx-auto relative rounded-3xl">
        <div
          className={`${small ? "xl:size-[274px] md:size-[209px] w-[160px]" : "xl:w-[376px] xl:h-[350px] md:size-[320px] size-[160px]"} flex align-middle justify-center bg-white-400 rounded-[15px] overflow-hidden ${small ? "py-10" : "py-8"}`}
        >
          <div
            className={`relative ${small ? "xl:w-[231px] xl:h-[206px] md:w-[171px] w-[127px] md:h-[152px] h-[113px]" : "xl:w-[333px] md:w-[263px] w-[127px] xl:h-[296px] md:h-[233px] h-[113px]"} shadow-product`}
          >
            <Image
              src={imageURL}
              alt={engName}
              fill
              sizes="100%"
              className="size-full object-cover"
            />
          </div>
          <span className="absolute top-[18px] left-4 py-2 md:px-2.5 px-[18px] bg-red-50 rounded-[10px] font-semibold text-red-500 text-center xl:text-sm md:text-xs text-[10px]">
            {category}
          </span>
        </div>
        <div className="flex flex-col xl:gap-[14px] md:gap-2.5 gap-2">
          <div className="flex flex-col md:gap-1.5 gap-1">
            <p
              className={`py-1 font-sora font-semibold ${small ? "xl:text-xl md:text-base text-sm" : "xl:text-2xl md:text-xl text-sm"}`}
            >
              {locale === "en" ? engName : myName}
            </p>
            <p
              className={`${small ? "md:text-xs text-[8px]" : "md:text-sm text-[8px]"} text-grey-300`}
            >
              {locale === "en" ? myName : engName}{" "}
              <span className="px-2 text-grey-200">({itemID})</span>
            </p>
          </div>
          <RatingStars count={rating} />
          <p
            className={`font-bold font-sora ${small ? "xl:text-[32px] md:text-2xl text-xl" : "xl:text-[42px] md:text-[32px] text-xl leading-10"}`}
          >
            {price.toLocaleString()} Ks
          </p>
          <div className="flex flex-row gap-[18px]">
            <AddToCartButton small={small} />
            <WishList
              whitelisted={whiteListed}
              productID={itemID}
              small={small}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

interface smallLargeProduct extends product {
  small: boolean;
}
