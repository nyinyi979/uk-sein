"use client";

import { showErrorAlert } from "@/components/Alert";
import { useUserStore } from "@/store/clientData";
import React from "react";
import axios from "@/utils/axios";

export default function ({ children }: { children: React.ReactNode }) {
  const { setPayments } = useUserStore();
  React.useEffect(() => {
    axios
      .get("payment-method/search/?query=")
      .then((data) => {
        setPayments(data.data);
      })
      .catch(() => {
        showErrorAlert({ text: "Something went wrong!" });
      });
  }, []);
  return <>{children}</>;
}
