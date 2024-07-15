import SearchHeader from "./components/header";
import Header from "@/components/header";
import { Metadata } from "next";
import SearchFooter from "./components/footer";

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
      <SearchFooter/>
    </>
  );
}
