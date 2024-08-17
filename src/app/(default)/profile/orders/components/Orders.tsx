"use client";
import React from "react";
import OrderTitle from "./OrderTitle";
import OrderHeader from "./OrderHeader";
import OrderTable from "./OrderTable";
import Pagination from "@/components/template/Pagination";
import { order, orderStatus } from "@/types/type";

export default function Orders() {
  const [orderStatus, setOrderStatus] = React.useState<orderStatus>("");
  const updateOrderStatus = (status: orderStatus) => {
    setOrderStatus(status);
  };
  const [page, setPage] = React.useState(1);
  const updatePage = (p: number) => {
    setPage(p);
  };
  const [orders, setOrders] = React.useState<order[]>([
    {
      orderID: "1234",
      orderedDate: "1/23/2014",
      amount: 12345567,
      paymentMethod: "AyaPay",
      productCount: 4,
      status: "Confirmed",
    },
    {
      orderID: "1235",
      orderedDate: "1/23/2014",
      amount: 12345567,
      paymentMethod: "Kpay",
      productCount: 4,
      status: "Reject",
    },
    {
      orderID: "1236",
      orderedDate: "1/23/2014",
      amount: 12345567,
      paymentMethod: "Credit",
      productCount: 4,
      status: "Pending",
    },
    {
      orderID: "1238",
      orderedDate: "1/23/2014",
      amount: 12345567,
      paymentMethod: "WavePay",
      productCount: 4,
      status: "Confirmed",
    },
    {
      orderID: "1239",
      orderedDate: "1/23/2014",
      amount: 12345567,
      paymentMethod: "AyaPay",
      productCount: 4,
      status: "Confirmed",
    },
  ]);
  return (
    <div className="xl:w-[1192px] md:w-[85%] sm:w-[90%] w-full h-fit mx-auto flex flex-col xl:gap-20 gap-10 xl:mx-auto xl:py-20 py-10">
      <OrderTitle />
      <div className="flex flex-col gap-10 w-full mx-auto">
        <OrderHeader status={orderStatus} updateStatus={updateOrderStatus} />
        <OrderTable orders={orders} status={orderStatus} />
      </div>
      <div className="flex flex-row xl:px-[125px]">
        <Pagination activeIndex={page} totalIndex={1} setIndex={updatePage} />
      </div>
    </div>
  );
}
