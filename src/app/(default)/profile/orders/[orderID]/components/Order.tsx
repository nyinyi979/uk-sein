"use client";
import React from "react";
import CustomerDetails from "./CustomerDetails";
import OrderTitle from "./OrderTitle";
import ShippingAddress from "./ShippingAddress";
import OrderBasicInfo from "./OrderBasicInfo";
import ProductTable from "./ProductTable";
import useWindowSize from "@/components/hooks/useWindowSize";
import { motion } from "framer-motion";
import { order } from "@/types/order";

export default function Order({
  order,
  hide = () => {},
}: {
  order: order;
  hide?: () => void;
}) {
  const size = useWindowSize();
  return (
    <motion.div
      className="size-full md:relative fixed top-0 left-0 md:bg-transparent bg-popup-bg md:z-0 z-[12]"
      animate={{ opacity: size[0] < 768 ? [0, 1] : [1, 1] }}
      exit={{ opacity: size[0] < 768 ? 0 : 1 }}
    >
      <motion.div
        animate={{ translateY: size[0] < 768 ? [100, 0] : [0, 0] }}
        exit={{ translateY: size[0] < 768 ? 100 : 0 }}
        className="xl:w-[1192px] md:w-[664px] w-fit h-[442px] md:h-fit overflow-y-auto flex flex-col xl:gap-20 gap-10 md:mt-0 mt-[20%] mx-auto xl:py-20 md:py-10 py-[26px] md:px-0 px-3 bg-white md:rounded-none rounded-[15px]"
      >
        <OrderTitle id={order.id} />
        <div className="flex flex-col md:gap-20 gap-6">
          <div className="flex xl:h-[243px] h-full md:flex-row flex-col gap-8 md:flex-wrap">
            <OrderBasicInfo order={order} hide={hide} />
            <CustomerDetails customer={order.customer} />
            <ShippingAddress order={order} />
          </div>
          <ProductTable order={order} />
        </div>
      </motion.div>
    </motion.div>
  );
}
