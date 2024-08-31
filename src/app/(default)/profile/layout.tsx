"use client";
import React from "react";
import axios from "@/utils/axios";
import { useUserStore } from "@/store/clientData";

export default function ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { token, setCustomer } = useUserStore((state) => state);
  React.useEffect(() => {
    const cid = JSON.parse(localStorage.getItem("user")!);
    axios.get("customer/user/", { params: { uid: cid.id } }).then((data) => {
      setCustomer(data.data);
    });
  }, []);
  return <>{children}</>;
}
