"use client";
import React from "react";
import CustomerDetails from "./CustomerDetails";
import OrderTitle from "./OrderTitle";
import ShippingAddress from "./ShippingAddress";
import OrderBasicInfo from "./OrderBasicInfo";
import ProductTable from "./ProductTable";
import useWindowSize from "@/components/hooks/useWindowSize";
import { orderDetails } from "@/types/type";
import { motion } from "framer-motion";

export default function Order({
  params,
  hide = () => {},
}: {
  params: { orderID: string };
  hide?: () => void;
}) {
  const [orderDetail, setOrderDetail] = React.useState<orderDetails>({
    orderID: "1234",
    orderedDate: "25 June 2024",
    paymentMethod: "AyaPay",
    customer: {
      name: "Mg Kyaw",
      email: "mgkyaw@gmail.com",
      phoneNo: "093423423",
    },
    address: {
      address: "No 34, Myo Ma Road",
      state: "Yangon",
      township: "South Dagon",
    },
    amount: 680000,
    productCount: 2,
    products: [
      {
        id: "sample",
        category: "Table",
        name: "sample eng name",
        images: ["/sampleDiscount.png"],
        mm_name: "sample mm name",
        price: 340000,
        quantity: 2,
        color: "Red",
        material: "Aluminium",
      },
    ],
    status: "Confirmed",
  });
  const size = useWindowSize();
  React.useEffect(() => {}, [size]);
  return (
    <motion.div
      className="size-full md:relative fixed top-0 left-0 md:bg-transparent bg-popup-bg md:z-0 z-[10]"
      animate={{ opacity: size[0] < 768 ? [0, 1] : [1, 1] }}
      exit={{ opacity: size[0] < 768 ? 0 : 1 }}
    >
      <motion.div
        animate={{ translateY: size[0] < 768 ? [100, 0] : [0, 0] }}
        exit={{ translateY: size[0] < 768 ? 100 : 0 }}
        className="xl:w-[1192px] md:w-[664px] w-fit h-[442px] md:h-fit overflow-y-auto flex flex-col xl:gap-20 gap-10 md:mt-0 mt-[20%] mx-auto xl:py-20 md:py-10 py-[26px] md:px-0 px-3 bg-white md:rounded-none rounded-[15px]"
      >
        <OrderTitle orderID={params.orderID} />
        <div className="flex flex-col md:gap-20 gap-6">
          <div className="flex xl:h-[243px] h-full md:flex-row flex-col gap-8 md:flex-wrap">
            <OrderBasicInfo {...orderDetail} hide={hide} />
            <CustomerDetails {...orderDetail.customer} />
            <ShippingAddress {...orderDetail.address} />
          </div>
          <ProductTable
            products={orderDetail.products}
            totalPrice={orderDetail.amount}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
