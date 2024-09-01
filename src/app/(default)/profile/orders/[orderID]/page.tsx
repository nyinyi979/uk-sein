"use client";
import React from "react";
import Order from "./components/Order";
import axios from "@/utils/axios";
import { Initial_Order } from "@/types/order";

export default function ({ params }: { params: { orderID: string } }) {
  const [order, setOrder] = React.useState(Initial_Order);
  React.useEffect(() => {
    axios.get("order/", { params: { id: params.orderID } }).then((data) => {
      setOrder(data.data);
    });
  }, []);
  return <Order order={order} />;
}
