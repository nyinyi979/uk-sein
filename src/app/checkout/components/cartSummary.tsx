import { productInCart } from "@/app/types/type";
import React from "react";
import CartItem from "./cartItems";

export default function CartSummary({
  products,
  removeItem,
}: {
  products: productInCart[];
  removeItem: (ind: number) => void;
}) {
  const totalPrice = React.useMemo(() => {
    let tot = 0;
    for (let i = 0; i < products.length; i++) {
      tot += products[i].price * products[i].quantity;
    }
    return tot;
  }, [products.length, removeItem]);
  return (
    <div className="flex flex-col w-[478px] h-fit gap-1.5 pt-2.5 bg-white shadow-rating">
      <div className="flex flex-row gap-2.5 py-[16px] px-6">
        <p className="my-2 font-sora font-semibold text-2xl">Cart Summary</p>
        <p className="size-4 rounded-full bg-red-500 my-4 text-white text-[10px] text-center">
          {products.length}
        </p>
      </div>
      <div className="px-2.5 pb-6">
        {products.map((p, ind) => (
          <CartItem product={p} index={ind} removeItem={removeItem} />
        ))}
      </div>
      <div className="flex flex-row pt-[16px] pb-[22px] px-8 font-bold">
        <p className="text-xl">Total</p>
        <p className="ml-auto text-2xl">{totalPrice.toLocaleString()} Ks</p>
      </div>
    </div>
  );
}
