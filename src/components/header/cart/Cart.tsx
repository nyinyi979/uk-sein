import CartHeader from "./CartHeader";
import CartItem from "./CartItem";
import React from "react";
import CartFooter from "./CartFooter";
import useWindowSize from "@/components/hooks/useWindowSize";
import { productInCart } from "@/types/type";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";

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
  const [animationValue, setAnimationValue] = React.useState({
    intro: {
      translateX: [200, 0],
      translateY: [0, 0],
    },
    outro: {
      translateX: 200,
      translateY: 0,
    },
  });
  const size = useWindowSize();
  React.useEffect(() => {
    if (size[0] < 768) {
      setAnimationValue({
        intro: {
          translateX: [0, 0],
          translateY: [200, 0],
        },
        outro: {
          translateX: 0,
          translateY: 200,
        },
      });
    } else {
      setAnimationValue({
        intro: {
          translateX: [200, 0],
          translateY: [0, 0],
        },
        outro: {
          translateX: 200,
          translateY: 0,
        },
      });
    }
  }, [size]);
  const t = useTranslations("cart");
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
          className="size-full fixed top-0 left-0 bg-popup-bg overflow-y-auto z-[11]"
          onClick={toggle}
        >
          <motion.div
            animate={animationValue.intro}
            exit={animationValue.outro}
            transition={{
              stiffness: 19.75,
              mass: 1,
              damping: 6.67,
            }}
            className="ml-auto xl:w-[580px] md:w-[500px] w-full xl:h-[1024px] md:h-[1194px] h-full flex flex-col bg-white origin-center overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <CartHeader count={products.length} toggle={toggle} />
            <p className="py-4 px-[30px] font-semibold text-lg border-b border-grey-50">
              {t("you-have")} ({products.length}) {t("in-your-cart!")}
            </p>
            <div className="w-fit h-[630px] mx-auto flex flex-col gap-2.5 px-2.5 py-1.5 overflow-y-auto overflow-x-hidden">
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
            <CartFooter totalPrice={totalPrice} toggle={toggle} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
