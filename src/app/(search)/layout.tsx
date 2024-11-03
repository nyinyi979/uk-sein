import SearchHeader from "./components/Header";
import Header from "@/components/Header";
import { Metadata } from "next";
import SearchFooter from "./components/Footer";

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
      {children}
      <SearchFooter />
    </>
  );
}
