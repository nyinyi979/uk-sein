import CartHeader from "./cartHeader";
import CartItem from "./cartItem";
import React from "react";
import CartFooter from "./cartFooter";
import { productInCart } from "@/app/types/type";
import { AnimatePresence, motion } from "framer-motion";

export default function CartSlider({
  hidden,
  products,
  decrementQuantity,
  incrementQuantity,
  removeItem,
  toggle,
}: {
  hidden: boolean;
  products: productInCart[];
  incrementQuantity: (ind: number) => void;
  decrementQuantity: (ind: number) => void;
  removeItem: (ind: number) => void;
  toggle: () => void;
}) {
  const totalPrice = React.useMemo(() => {
    let tot = 0;
    for (let i = 0; i < products.length; i++) {
      tot += products[i].price * products[i].quantity;
    }
    return tot;
  }, [products.length, incrementQuantity, decrementQuantity, removeItem]);
  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          animate={{ opacity: [0, 1] }}
          exit={{
            opacity: 0,
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
          className="w-full h-full fixed top-0 left-0 bg-popup-bg z-[200] overflow-y-scroll"
        >
          <motion.div
            animate={{ translateX: [200, 0] }}
            exit={{
              opacity: 0,
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
            className="ml-auto w-[580px] flex flex-col bg-white"
          >
            <CartHeader count={products.length} toggle={toggle} />
            <p className="py-[16px] px-[30px] font-semibold text-lg border-b border-grey-50">
              You have ({products.length}) in your cart!
            </p>
            <div className="h-[630px] flex flex-col gap-2.5 px-2.5 py-1.5 overflow-y-auto">
              {products.map((p, ind) => (
                <CartItem
                  key={p.itemID}
                  index={ind}
                  decrementQuantity={decrementQuantity}
                  incrementQuantity={incrementQuantity}
                  removeItem={removeItem}
                  product={p}
                />
              ))}
            </div>
            <CartFooter totalPrice={totalPrice} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
