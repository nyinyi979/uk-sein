"use client";
import React from "react";
import axios from "@/utils/axios";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/clientData";

export default function ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { token } = useUserStore((state) => state);
  const router = useRouter();
  if (!token) {
    router.push("/login");
  } else {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  return <>{children}</>;
}
