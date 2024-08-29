import React from "react";
import CartItem from "./CartItems";
import { motion } from "framer-motion";
import { CartSummaryHeader, CartFooter } from "./CartSummaryComponents";
import { cartItem } from "@/store/clientData";

export default function CartSummary({
  cartItems,
  removeItem,
  closeCart,
}: {
  cartItems: cartItem[];
  removeItem: (ind: number) => void;
  closeCart: () => void;
}) {
  const totalPrice = React.useMemo(() => {
    let tot = 0;
    for (let i = 0; i < cartItems.length; i++) {
      tot += cartItems[i].subtotal;
    }
    return tot;
  }, [cartItems.length]);
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
        <CartSummaryHeader closeCart={closeCart} count={cartItems.length} />
        <div className="px-2.5 pb-6">
          {cartItems.map((c, ind) => (
            <CartItem
              key={c.variation_product + ind + c.name}
              cartItem={c}
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
