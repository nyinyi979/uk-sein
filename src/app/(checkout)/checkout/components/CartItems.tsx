import Image from "next/image";
import { productInCart } from "@/types/type";

export default function CartItem({
  product: { name, images, itemID, price, quantity, color, material, size },
  index,
  removeItem,
}: {
  product: productInCart;
  index: number;
  removeItem: (ind: number) => void;
}) {
  return (
    <div className="w-full flex flex-row gap-4 xl:py-7 py-6 px-[18px] border-b border-dotted border-grey-50">
      <div className="md:size-[100px] size-[72px] bg-white-400">
        <div className="xl:w-[71px] w-[51px] xl:h-[65px] h-[47px] relative mx-auto my-[21.5px]">
          <Image
            src={images[0]}
            alt={name}
            sizes="100%"
            fill
            className="size-full object-cover shadow-product"
          />
        </div>
      </div>
      <div className="xl:w-[284px] w-[406px] flex flex-col xl:gap-[18px] gap-2.5 xl:py-0 py-1">
        <div className="flex flex-row">
          <div className="flex flex-col xl:gap-1.5 gap-1">
            <p className="font-sora font-semibold xl:text-base text-sm">
              {name}
            </p>
            <div className="flex flex-row gap-1.5 xl:text-[10px] text-[8px]">
              <p className="text-grey-200">({itemID})</p>
              {material && <p className="text-grey-200">({material})</p>}
              {size && <p className="text-grey-200">({size})</p>}
              {color && <p className="text-grey-200">({color})</p>}
            </div>
          </div>
          <p className="ml-auto font-bold text-khaki-500 xl:text-lg text-base">
            ({quantity}x)
          </p>
        </div>
        <div className="flex flex-row">
          <p className="font-sora font-bold xl:text-2xl text-xl">
            {(quantity * price).toLocaleString()} Ks
          </p>
          <button
            onClick={() => removeItem(index)}
            className="cart-btn ml-auto md:px-2.5 px-2"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6145 2.76923H13.1529V2.07692C13.1529 1.52609 12.9341 0.997815 12.5446 0.608317C12.1551 0.218818 11.6269 0 11.076 0H6.92218C6.37134 0 5.84307 0.218818 5.45357 0.608317C5.06407 0.997815 4.84525 1.52609 4.84525 2.07692V2.76923H1.38371C1.2001 2.76923 1.02401 2.84217 0.894179 2.972C0.764346 3.10184 0.691406 3.27793 0.691406 3.46154C0.691406 3.64515 0.764346 3.82124 0.894179 3.95107C1.02401 4.08091 1.2001 4.15385 1.38371 4.15385H2.07602V16.6154C2.07602 16.9826 2.2219 17.3348 2.48157 17.5945C2.74123 17.8541 3.09341 18 3.46064 18H14.5376C14.9048 18 15.257 17.8541 15.5166 17.5945C15.7763 17.3348 15.9222 16.9826 15.9222 16.6154V4.15385H16.6145C16.7981 4.15385 16.9742 4.08091 17.104 3.95107C17.2339 3.82124 17.3068 3.64515 17.3068 3.46154C17.3068 3.27793 17.2339 3.10184 17.104 2.972C16.9742 2.84217 16.7981 2.76923 16.6145 2.76923ZM6.22987 2.07692C6.22987 1.89331 6.30281 1.71722 6.43264 1.58739C6.56247 1.45755 6.73856 1.38462 6.92218 1.38462H11.076C11.2596 1.38462 11.4357 1.45755 11.5656 1.58739C11.6954 1.71722 11.7683 1.89331 11.7683 2.07692V2.76923H6.22987V2.07692ZM14.5376 16.6154H3.46064V4.15385H14.5376V16.6154ZM7.61448 7.61539V13.1538C7.61448 13.3375 7.54154 13.5135 7.41171 13.6434C7.28188 13.7732 7.10579 13.8462 6.92218 13.8462C6.73856 13.8462 6.56247 13.7732 6.43264 13.6434C6.30281 13.5135 6.22987 13.3375 6.22987 13.1538V7.61539C6.22987 7.43177 6.30281 7.25568 6.43264 7.12585C6.56247 6.99602 6.73856 6.92308 6.92218 6.92308C7.10579 6.92308 7.28188 6.99602 7.41171 7.12585C7.54154 7.25568 7.61448 7.43177 7.61448 7.61539ZM11.7683 7.61539V13.1538C11.7683 13.3375 11.6954 13.5135 11.5656 13.6434C11.4357 13.7732 11.2596 13.8462 11.076 13.8462C10.8924 13.8462 10.7163 13.7732 10.5865 13.6434C10.4567 13.5135 10.3837 13.3375 10.3837 13.1538V7.61539C10.3837 7.43177 10.4567 7.25568 10.5865 7.12585C10.7163 6.99602 10.8924 6.92308 11.076 6.92308C11.2596 6.92308 11.4357 6.99602 11.5656 7.12585C11.6954 7.25568 11.7683 7.43177 11.7683 7.61539Z"
                fill="#FF1616"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
