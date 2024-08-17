"use client";
import React from "react";
import FirstPage from "./FirstPage";
import CheckoutProgress from "./CheckoutProgress";
import PaymentPage from "./PaymentPage";
import OrderConfirmed from "./Confirmed";
import CartSummary from "./CartSummary";
import CheckoutButtons from "./CheckoutButtons";
import CartHeader from "./CartHeader";
import useWindowSize from "@/components/hooks/useWindowSize";
import { useRouter } from "next/navigation";
import { checkOutData, payment, productInCart, state } from "@/types/type";
import { AnimatePresence } from "framer-motion";
import { useUserStore } from "@/store/clientData";
import { isAuthenticated } from "@/store/auth";

export default function Checkout() {
  const router = useRouter();
  const userToken = useUserStore((store) => store.userToken);
  const [input, setInput] = React.useState<checkOutData>({
    name: "Ko Khant",
    phoneNo: "0964647576",
    email: "kokhant123@gmail.com",
    state: "Yangon",
    township: "Insein (အင်းစိန်)",
    address: "No 27, Myo Mya St",
    payment: "",
    image: null,
    currency: "MMK",
  });
  const setName = (name: string) => {
    setInput({ ...input, name: name });
  };
  const setPhone = (phone: string) => {
    setInput({ ...input, phoneNo: phone });
  };
  const setEmail = (mail: string) => {
    setInput({ ...input, email: mail });
  };
  const setState = (state: state) => {
    setInput({ ...input, state: state });
  };
  const setTownship = (ts: string) => {
    setInput({ ...input, township: ts });
  };
  const setAddress = (add: string) => {
    setInput({ ...input, address: add });
  };
  const setPayment = (payment: payment) => {
    setInput({ ...input, payment: payment });
  };
  const setImage = (img: File) => {
    setInput({ ...input, image: img });
  };
  const setCurrency = (cur: "MMK" | "USD") => {
    setInput({ ...input, currency: cur });
  };
  const [cartItem, setCartItem] = React.useState<productInCart[]>([
    {
      itemID: "1234",
      name: "Sample item",
      images: ["/sampleDiscount.png"],
      price: 360000,
      quantity: 2,
      size: "16x17x18",
    },
    {
      itemID: "1235",
      name: "Sample item",
      images: ["/sampleDiscount.png"],
      price: 180000,
      quantity: 2,
      size: "16x17x18",
    },
  ]);
  const removeItem = (ind: number) => {
    let newCartItems = [...cartItem];
    newCartItems[ind].itemID = "";
    let newItems = newCartItems.filter((x) => x.itemID !== "");
    setCartItem(newItems);
  };
  const [page, setPage] = React.useState<"Shipping" | "Payment" | "Confirmed">(
    "Shipping",
  );
  const [hidden, setHidden] = React.useState(true);
  const size = useWindowSize();
  const openCart = () => {
    setHidden(false);
    if (size[0] < 1440) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  };
  const closeCart = () => {
    setHidden(true);
    if (size[0] <= 1440) {
      document.body.style.overflowY = "auto";
    } else {
      document.body.style.overflowY = "hidden";
    }
  };
  const updatePage = () => {
    if (page === "Shipping") setPage("Payment");
    else if (page === "Payment") setPage("Confirmed");
  };
  const backPage = () => {
    if (page === "Shipping") router.back();
    else if (page === "Payment") setPage("Shipping");
  };
  React.useEffect(() => {
    if (size[0] >= 1440) {
      openCart();
    } else closeCart();
  }, [size]);

  React.useEffect(() => {
    if (!isAuthenticated(userToken)) router.back();
  }, []);
  return (
    <div className="xl:w-[1190px] flex flex-row gap-40 mx-auto py-20 xl:px-0 md:px-[51px] sm:px-0 px-2">
      <div className="md:w-[80%] sm:w-[343px] w-full mx-auto flex flex-col gap-[50px]">
        <CartHeader backPage={backPage} page={page} openCart={openCart} />
        <div className="flex flex-col xl:gap-10 gap-8">
          <CheckoutProgress progress={page} />
          <AnimatePresence>
            {page === "Shipping" && (
              <FirstPage
                name={input.name}
                setName={setName}
                phoneNo={input.phoneNo}
                setPhoneNo={setPhone}
                email={input.email}
                setEmail={setEmail}
                state={input.state}
                setState={setState}
                township={input.township}
                setTownship={setTownship}
                address={input.address}
                setAddress={setAddress}
              />
            )}
            {page === "Payment" && (
              <PaymentPage
                payment={input.payment}
                setPayment={setPayment}
                setFile={setImage}
                currency={input.currency}
                setCurrency={setCurrency}
              />
            )}
            {page === "Confirmed" && <OrderConfirmed />}
          </AnimatePresence>
          <CheckoutButtons page={page} updatePage={updatePage} />
        </div>
      </div>
      <AnimatePresence>
        {!hidden && (
          <CartSummary
            closeCart={closeCart}
            products={cartItem}
            removeItem={removeItem}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
