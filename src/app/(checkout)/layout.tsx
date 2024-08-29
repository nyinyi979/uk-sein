"use client";
import Header from "@/components/Header";
import CheckoutFooter from "./component/Footer";
import React from "react";
import { useUserStore } from "@/store/clientData";
import { showErrorAlert } from "@/components/Alert";
import { useRouter } from "next/navigation";

export default function ({ children }: { children?: React.ReactNode }) {
  const { token } = useUserStore((store) => store);
  const router = useRouter();
  React.useEffect(() => {
    if (token === null) {
      showErrorAlert({ text: "Please login first!" });
      router.push("/login");
    }
  }, []);
  return (
    <>
      <Header />
      {children}
      <CheckoutFooter />
    </>
  );
}
