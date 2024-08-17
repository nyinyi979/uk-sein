import React from "react";
import CartItem from "./CartItems";
import { motion } from "framer-motion";
import { CartSummaryHeader, CartFooter } from "./CartSummaryComponents";
import { productInCart } from "@/types/type";

export default function CartSummary({
  products,
  removeItem,
  closeCart,
}: {
  products: productInCart[];
  removeItem: (ind: number) => void;
  closeCart: () => void;
}) {
  const totalPrice = React.useMemo(() => {
    let tot = 0;
    for (let i = 0; i < products.length; i++) {
      tot += products[i].price * products[i].quantity;
    }
    return tot;
  }, [products.length, removeItem]);
  return (
    <motion.div
      onClick={closeCart}
      animate={{ opacity: [0, 1] }}
      exit={{
        opacity: 0,
        display: "none",
        transition: {
          stiffness: 19.75,
          mass: 1,
          damping: 6.67,
        },
      }}
      transition={{
        stiffness: 19.75,
        mass: 1,
        damping: 6.67,
      }}
      className="size-full flex align-middle justify-items-center xl:relative fixed top-0 left-0 xl:bg-transparent bg-popup-bg xl:rounded-none shadow-rating xl:z-[1] z-[10]"
    >
      <motion.div
        animate={{ scale: [0, 1] }}
        exit={{
          scale: 0,
          transition: {
            stiffness: 19.75,
            mass: 1,
            damping: 6.67,
          },
        }}
        transition={{
          stiffness: 19.75,
          mass: 1,
          damping: 6.67,
        }}
        onClick={(ev) => ev.stopPropagation()}
        className="xl:w-[478px] md:w-[578px] sm:w-[360px] w-[96%] xl:max-h-max max-h-[500px] overflow-scroll xl:my-0 md:mt-[8%] mt-[20%] mx-auto flex flex-col gap-1.5 pt-2.5 rounded-[15px] bg-white origin-center"
      >
        <CartSummaryHeader closeCart={closeCart} count={products.length} />
        <div className="px-2.5 pb-6">
          {products.map((p, ind) => (
            <CartItem
              key={p.itemID}
              product={p}
              index={ind}
              removeItem={removeItem}
            />
          ))}
        </div>
        <CartFooter totalPrice={totalPrice} />
      </motion.div>
    </motion.div>
  );
}
