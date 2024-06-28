"use client";
import React from "react";
import CustomerDetails from "./customerDetails";
import OrderTitle from "./orderTitle";
import ShippingAddress from "./shippingAddress";
import { orderDetails } from "@/app/types/type";
import OrderBasicInfo from "./orderBasicInfo";
import ProductTable from "./productTable";

export default function Order({ params }: { params: { orderID: string } }) {
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
      state: "Yangon (ရန်ကုန်တိုင်း)",
      township: "South Dagon",
    },
    amount: 680000,
    productCount: 2,
    products: [
      {
        productID: "sample",
        category: "Table",
        engName: "sample eng name",
        imgURL: "/sampleDiscount.png",
        myName: "sample mm name",
        price: 340000,
        quantity: 2,
      },
    ],
    status: "Confirmed",
  });
  return (
    <div className="xl:w-[1192px] w-[664px] flex flex-col xl:gap-20 gap-10 mx-auto xl:py-20 py-10">
      <OrderTitle orderID={params.orderID} />
      <div className="flex flex-col gap-20">
        <div className="flex flex-row gap-8 flex-wrap">
          <OrderBasicInfo {...orderDetail} />
          <CustomerDetails {...orderDetail.customer} />
          <ShippingAddress {...orderDetail.address} />
        </div>
        <ProductTable
          products={orderDetail.products}
          totalPrice={orderDetail.amount}
        />
      </div>
    </div>
  );
}
