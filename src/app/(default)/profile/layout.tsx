"use client";
import { isAuthenticated } from "@/store/auth";
import { useUserStore } from "@/store/clientData";
import { useRouter } from "next/navigation";
export default function ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userToken = useUserStore((state) => state.userToken);
  const router = useRouter();
  console.log(isAuthenticated(userToken));
  if (!isAuthenticated(userToken)) {
    router.push("/");
  }
  return <>{children}</>;
}
