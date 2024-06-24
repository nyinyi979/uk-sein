import Image from "next/image";
import AddToCart from "../svg/addToCart.svg";
import Link from "next/link";
import { product } from "@/app/types/type";
import { motion } from "framer-motion";
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
  return (
    <Link href={`/products/${itemID}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.3,
        }}
        className="w-full relative"
      >
        <div
          className={`product-img ${small ? "size-[274px]" : "w-[376px] h-[350px]"} bg-white-400 flex ${small ? "py-10" : "py-8"} align-middle justify-center rounded-3xl`}
        >
          <img
            src={imageURL}
            alt={engName}
            className={`${small ? "w-[231px] h-[206px]" : "w-[333px] h-[296px]"} bg-cover`}
          />
          <span className="absolute top-[18px] left-4 px-2 py-[10px] bg-red-50/30 rounded-[10px] text-red-500 text-center text-sm">
            {category}
          </span>
        </div>
        <p
          className={`py-1 font-sora font-semibold ${small ? "text-xl" : "text-2xl"}`}
        >
          {engName}
        </p>
        <p className={`${small ? "text-xs" : "text-sm"} text-grey-300`}>
          {myName} <span className="px-2 text-grey-200">({itemID})</span>
        </p>
        <Stars count={rating} />
        <p
          className={`my-3 font-bold font-sora ${small ? "text-[32px]" : "text-[42px"}`}
        >
          {price.toLocaleString()} Ks
        </p>
        <div className="flex gap-[18px]">
          <button className="size-[58px] p-4 bg-khaki-500 rounded-xl hover:bg-khaki-700 duration-300">
            <Image src={AddToCart} alt="add to cart" width={22} height={22} />
          </button>
          <WhiteList whitelisted={whiteListed} productID={itemID} />
        </div>
      </motion.div>
    </Link>
  );
}
export function WhiteList({
  productID,
  whitelisted = false,
}: {
  whitelisted?: boolean;
  productID?: string;
}) {
  return (
    <button className={`${whitelisted ? "heart-active" : "heart"}`}>
      <svg
        width="24"
        height="21"
        viewBox="0 0 24 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.3846 1.65385L15.1111 1.72224C14.384 1.90399 13.7201 2.27991 13.1902 2.80981C12.7363 3.2637 12.3943 3.81703 12.1913 4.42598L12.1692 4.4925C12.1067 4.67978 11.849 4.69809 11.7608 4.52152L11.5 4C11.174 3.34795 10.6622 2.80699 10.0293 2.4453L9.53644 2.16368C8.23423 1.41956 6.68688 1.23232 5.24478 1.64435L4.93667 1.73238C4.31598 1.90972 3.72657 2.18229 3.18946 2.54036C2.73765 2.84157 2.37227 3.25547 2.12943 3.74115L2 4L1.68667 4.78332C1.23679 5.90803 1.09017 7.13116 1.26148 8.33034C1.4182 9.42737 1.83621 10.4707 2.48033 11.3725L3.22625 12.4167C3.74055 13.1368 4.33179 13.7986 4.98949 14.3905L6.98713 16.1884C8.32295 17.3907 9.81472 18.4074 11.4221 19.2111L12 19.5L14 18.5L15.5 17.5L17.4956 15.837C18.1642 15.2799 18.7879 14.671 19.361 14.016L20.5414 12.667C21.5 11.5714 22.1842 10.2634 22.5372 8.85105L22.7351 8.05952C22.9098 7.36065 22.9389 6.63331 22.8205 5.92274C22.6137 4.68227 21.9579 3.54827 20.9918 2.74319C20.0347 1.94561 18.8177 1.5 17.5719 1.5H16.6343C16.213 1.5 15.7933 1.55167 15.3846 1.65385Z"
          stroke="#FF1616"
          strokeWidth="1.7"
        />
      </svg>
    </button>
  );
}
export function Stars({ count }: { count: number }) {
  return (
    <div className="flex flex-row gap-[10px]">
      {count > 0 ? (
        <img
          src="/svg/filledStar.svg"
          alt="filled star"
          width={20}
          height={20}
        />
      ) : (
        <img src="/svg/star.svg" alt="star" width={20} height={20} />
      )}
      {count > 1 ? (
        <img
          src="/svg/filledStar.svg"
          alt="filled star"
          width={20}
          height={20}
        />
      ) : (
        <img src="/svg/star.svg" alt="star" width={20} height={20} />
      )}
      {count > 2 ? (
        <img
          src="/svg/filledStar.svg"
          alt="filled star"
          width={20}
          height={20}
        />
      ) : (
        <img src="/svg/star.svg" alt="star" width={20} height={20} />
      )}
      {count > 3 ? (
        <img
          src="/svg/filledStar.svg"
          alt="filled star"
          width={20}
          height={20}
        />
      ) : (
        <img src="/svg/star.svg" alt="star" width={20} height={20} />
      )}
      {count > 4 ? (
        <img
          src="/svg/filledStar.svg"
          alt="filled star"
          width={20}
          height={20}
        />
      ) : (
        <img src="/svg/star.svg" alt="star" width={20} height={20} />
      )}
    </div>
  );
}
interface smallLargeProduct extends product {
  small: boolean;
}
