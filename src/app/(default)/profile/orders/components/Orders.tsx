"use client";
import React from "react";
import OrderTitle from "./OrderTitle";
import OrderHeader from "./OrderHeader";
import OrderTable from "./OrderTable";
import axios from "@/utils/axios";
import Pagination from "@/components/template/Pagination";
import { useUserStore } from "@/store/clientData";
import { showErrorAlert } from "@/components/Alert";
import { order, orderStatus } from "@/types/order";

export default function Orders() {
  const { customer, setCustomer } = useUserStore();
  const [loading, setLoading] = React.useState(true);
  const [status, setStatus] = React.useState<orderStatus>("");
  const [result, setResult] = React.useState<results>({
    count: 10,
    current_page: 1,
    next: null,
    previous: null,
    results: [],
    total_pages: 1,
  });
  const updateStatus = (status: orderStatus) => {
    setStatus(status);
  };
  const [page, setPage] = React.useState(1);
  const updatePage = (p: number) => {
    setPage(p);
  };
  React.useEffect(() => {
    if (customer) {
      setLoading(true);
      axios
        .get("order/list/customer/", {
          params: { cid: customer.id, status: status },
        })
        .then((data) => {
          const newData = structuredClone(data.data)
          setResult(newData)
        })
        .catch(() => showErrorAlert({ text: "Something went wrong!" }))
        .finally(() => setLoading(false));
    } else {
      showErrorAlert({ text: "Please login first!" });
      setLoading(false);
    }
  }, [customer, status]);
  return (
    <div className="xl:w-[1192px] md:w-[85%] sm:w-[90%] w-full h-fit mx-auto flex flex-col xl:gap-20 gap-10 xl:mx-auto xl:py-20 py-10">
      <OrderTitle />
      <div className="flex flex-col gap-10 w-full mx-auto">
        <OrderHeader status={status} updateStatus={updateStatus} />
        {loading ? (
          <OrderLoading />
        ) : (
          <OrderTable orders={result.results} status={status} />
        )}
      </div>
      <div className="flex flex-row xl:px-[125px]">
        <Pagination activeIndex={page} totalIndex={1} setIndex={updatePage} />
      </div>
    </div>
  );
}
const OrderLoading = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full h-16 bg-grey-50 animate-pulse"></div>
      <div className="w-full h-16 bg-grey-50 animate-pulse"></div>
      <div className="w-full h-16 bg-grey-50 animate-pulse"></div>
      <div className="w-full h-16 bg-grey-50 animate-pulse"></div>
      <div className="w-full h-16 bg-grey-50 animate-pulse"></div>
    </div>
  );
};
interface results {
  next: null;
  previous: null;
  current_page: number;
  count: number;
  total_pages: number;
  results: order[];
}
