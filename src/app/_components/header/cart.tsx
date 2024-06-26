"use client";
import React from "react";
import Image from "next/image";
import CartImage from "./images/cart.svg";
import { productInCart } from "@/app/types/type";
import CartSlider from "./cart/cart";

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
  const [cartItem, setCartItem] = React.useState<productInCart[]>([
    {
      itemID: "1234",
      engName: "Sample item",
      imgURL: "/sampleDiscount.png",
      price: 360000,
      quantity: 2,
      size: "16x17x18",
    },
    {
      itemID: "1235",
      engName: "Sample item",
      imgURL: "/sampleDiscount.png",
      price: 180000,
      quantity: 2,
      size: "16x17x18",
    },
  ]);
  const incrementQuantity = (ind: number) => {
    let newCartItems = [...cartItem];
    newCartItems[ind].quantity++;
    setCartItem(newCartItems);
  };
  const decrementQuantity = (ind: number) => {
    let newCartItems = [...cartItem];
    newCartItems[ind].quantity--;
    setCartItem(newCartItems);
  };
  const removeItem = (ind: number) => {
    let newCartItems = [...cartItem];
    newCartItems[ind].itemID = "";
    let newItems = newCartItems.filter((x) => x.itemID !== "");
    setCartItem(newItems);
  };
  return (
    <div className="relative">
      <button
        onClick={toggle}
        className="w-fit xl:h-[50px] h-[46px] flex flex-row gap-3 align-middle justify-items-center py-3 px-4 bg-white-400 rounded-xl hover:bg-grey-50 duration-300"
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
        <p className="size-4 rounded-full mt-1 bg-red-500 text-white text-[10px] text-center">
          {cartItem.length}
        </p>
      </button>
      <CartSlider
        hidden={hidden}
        toggle={toggle}
        decrementQuantity={decrementQuantity}
        incrementQuantity={incrementQuantity}
        products={cartItem}
        removeItem={removeItem}
      />
    </div>
  );
}
