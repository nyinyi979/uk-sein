"use client";
import Header from "@/components/Header";
import CheckoutFooter from "./component/Footer";
import React from "react";
import axios from "@/utils/axios";
import { useUserStore } from "@/store/clientData";
import { showErrorAlert } from "@/components/Alert";
import { useRouter } from "next/navigation";

export default function ({ children }: { children?: React.ReactNode }) {
  const { token } = useUserStore((store) => store);
  const router = useRouter();
  React.useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    if (token === null) {
      showErrorAlert({ text: "Please login first!" });
      router.push("/login");
    }
    // axios.post("product/review/",{data:{product: "12", customer: 10, review: "This is a very wonderful product(just testing).",number_of_stars: "4"}})
  }, []);
  return (
    <>
      <Header />
      {children}
      <CheckoutFooter />
    </>
  );
}
