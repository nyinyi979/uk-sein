"use client";
import React from "react";
import Image from "next/image";
import CartImage from "./images/cart.svg";
import CartSlider from "./cart/Cart";
import { useUserStore } from "@/store/clientData";

export default function Cart({
  hidden,
  toggle,
}: {
  hidden: boolean;
  toggle: () => void;
}) {
  React.useEffect(() => {
    if (!hidden) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "auto";
  }, [hidden]);
  const cartItems = useUserStore((state) => state.cartItems);
  return (
    <div className="relative">
      <button
        onClick={toggle}
        className="w-fit xl:h-[50px] md:h-[46px] flex flex-row gap-3 align-middle justify-items-center md:py-3 md:px-4 p-2 bg-white-400 md:rounded-xl rounded-full hover:bg-grey-50 duration-300"
      >
        <span className="size-[22px] block relative">
          <Image
            src={CartImage}
            alt="cart"
            fill
            sizes="100%"
            className="size-auto"
          />
        </span>
        {cartItems.length > 0 && (
          <p className="md:relative absolute top-0 md:right-0 -right-2 size-4 rounded-full mt-1 bg-red-500 text-white text-[10px] text-center">
            {cartItems.length}
          </p>
        )}
      </button>
      <CartSlider hidden={hidden} toggle={toggle} />
    </div>
  );
}
