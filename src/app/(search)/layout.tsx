import SearchHeader from "./components/header";
import Header from "@/components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search",
  description: "Search any products you want!",
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header searchSide />
      <SearchHeader />
      <div className="py-5">{children}</div>
    </>
  );
}
