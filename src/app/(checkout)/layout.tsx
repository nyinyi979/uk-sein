import Header from "@/components/Header";
import CheckoutFooter from "./component/Footer";

export default function ({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <CheckoutFooter />
    </>
  );
}
