"use client";
import React from "react";
import OrderTitle from "./orderTitle";
import OrderHeader from "./orderHeader";
import OrderTable from "./orderTable";
import Pagination from "@/app/_components/pagination";
import { order, orderStatus } from "@/app/types/type";

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
    <div className="xl:w-[1190px] md:w-[664px] w-[360px] flex flex-col xl:gap-20 md:gap-10 gap-8 xl:py-20 md:py-10 py-8 xl:px-0 mx-auto">
      <OrderTitle />
      <div className="flex flex-col gap-10 w-fit mx-auto">
        <OrderHeader status={orderStatus} updateStatus={updateOrderStatus} />
        <OrderTable orders={orders} status={orderStatus} />
      </div>
      <div className="flex flex-row xl:px-[125px]">
        <Pagination activeIndex={page} totalIndex={1} setIndex={updatePage} />
      </div>
    </div>
  );
}
