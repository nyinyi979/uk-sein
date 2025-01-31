import Image from "next/image";
import AddToCartSvg from "@/svg/addToCart.svg";
import { variant } from "@/types/type";
import AddToCart, { init_product } from "../AddToCart";
import { useUserStore } from "@/store/clientData";
import React from "react";

export default function ProductAddToCart({
  variation,
  wishlisted,
  small,
}: {
  wishlisted: boolean;
  variation: variant;
  small: boolean;
}) {
  const addCartItems = useUserStore((state) => state.addCartItems);
  const [disabled, setDisabled] = React.useState(false);
  return (
    <div className="md:h-[58px] h-[48px] flex flex-row gap-[18px]">
      <button
        onClick={(ev) => {
          ev.stopPropagation();
          AddToCart({
            product: init_product,
            quantity: 1,
            variation: variation,
            addCartItems: addCartItems,
          });
          setDisabled(true);
          setTimeout(()=>{
            setDisabled(false)
          },2000)
        }}
        disabled={disabled}
        className={`${small ? "xl:size-[58px] size-[48px]" : "md:size-[58px] size-[48px]"} p-4 bg-khaki-500 disabled:bg-khaki-200 rounded-xl hover:bg-khaki-700 duration-300`}
      >
        <Image src={AddToCartSvg} alt="add to cart" width={22} height={22} />
      </button>
      {/* <Wishlist whitelisted={wishlisted} id={variation.id} /> */}
    </div>
  );
}
