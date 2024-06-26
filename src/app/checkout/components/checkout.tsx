"use client";
import { checkOutData, payment, productInCart, state } from "@/app/types/type";
import React from "react";
import FirstPage from "./firstPage";
import CheckoutProgress from "./checkoutProgress";
import PaymentPage from "./paymentPage";
import { AnimatePresence } from "framer-motion";
import OrderConfirmed from "./confirmed";
import CartSummary from "./cartSummary";

export default function Checkout() {
  const [input, setInput] = React.useState<checkOutData>({
    name: "Ko Khant",
    phoneNo: "0964647576",
    email: "kokhant123@gmail.com",
    state: "Yangon (ရန်ကုန်တိုင်း)",
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
      engName: "Sample item",
      imgURL: "/sampleDiscount.png",
      price: 360000,
      quantity: 2,
      size: "16x17x18",
    },
    {
      itemID: "1235",
      engName: "Sample item",
      imgURL: "/sampleDiscount.png",
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
  const updatePage = () => {
    if (page === "Shipping") setPage("Payment");
    else if (page === "Payment") setPage("Confirmed");
  };
  return (
    <div className="w-[1190px] flex flex-row gap-40 mx-auto py-20">
      <div className="w-[580px] flex flex-col gap-10">
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
        {page === "Shipping" && (
          <button
            onClick={updatePage}
            className="button font-bold ml-auto bg-khaki-500 text-white hover:bg-khaki-700 duration-300"
          >
            Continue
          </button>
        )}
        {page === "Payment" && (
          <button
            onClick={updatePage}
            className="button font-bold ml-auto bg-khaki-500 text-white hover:bg-khaki-700 duration-300"
          >
            Continue
          </button>
        )}
      </div>
      <CartSummary products={cartItem} removeItem={removeItem} />
    </div>
  );
}
