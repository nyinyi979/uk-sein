"use client";
import React from "react";
import axios from "@/utils/axios";
import { useUserStore } from "@/store/clientData";
import { showErrorAlert } from "@/components/Alert";
import { useRouter } from "next/navigation";

export default function ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { token, setCustomer } = useUserStore((state) => state);
  const router = useRouter();
  React.useEffect(() => {
    if (!token) {
      showErrorAlert({ text: "You have to login first!" });
      router.push("/");
      return;
    } else {
      const user = JSON.parse(localStorage.getItem("user")!);
      axios.get("customer/user/", { params: { uid: user.id } }).then((data) => {
        setCustomer(data.data);
      });
    }
  }, [token]);
  return <>{children}</>;
}
