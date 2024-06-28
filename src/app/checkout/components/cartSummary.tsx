import { productInCart } from "@/app/types/type";
import React from "react";
import CartItem from "./cartItems";
import { motion } from "framer-motion";
import { CartSummaryHeader, CartFooter } from "./cartSummaryComponents";
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
      className="w-full h-full flex align-middle justify-items-center xl:relative fixed top-0 left-0 xl:bg-transparent bg-popup-bg xl:rounded-none rounded-[15px] overflow-hidden shadow-rating"
    >
      <motion.div
        animate={{ scale: [0, 1] }}
        exit={{
          scale: 0,
          translateX: 200,
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
        className="xl:w-[478px] w-[578px] h-fit xl:my-0 my-[30%] mx-auto flex flex-col gap-1.5 pt-2.5 bg-white origin-center"
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
