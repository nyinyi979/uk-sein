"use client";
import React from "react";
import FirstPage from "./FirstPage";
import CheckoutProgress from "./CheckoutProgress";
import PaymentPage from "./PaymentPage";
import OrderConfirmed from "./Confirmed";
import CartSummary from "./CartSummary";
import CheckoutButtons from "./CheckoutButtons";
import CartHeader from "./CartHeader";
import axios from "@/utils/axios";
import useWindowSize from "@/components/hooks/useWindowSize";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { useUserStore } from "@/store/clientData";
import { Initial_Order, paymentInOrder } from "@/types/order";
import { showErrorAlert } from "@/components/Alert";

export default function Checkout() {
  const [usd, setUsd] = React.useState(5500);
  const [currency, setCurrency] = React.useState<"MMK" | "USD">("MMK");
  const { token, cartItems, setCartItems, customer, setCustomer } =
    useUserStore((state) => state);
  const [order, setOrder] = React.useState(Initial_Order);
  const [page, setPage] = React.useState<
    "Shipping" | "Payment" | "Confirmed" | "Loading"
  >("Shipping");
  const [hidden, setHidden] = React.useState(true);
  const [image, setImage] = React.useState<File>();
  const [payment, setPayment] = React.useState<paymentInOrder>({
    payment_date: dayjs(new Date()),
    payment_time: dayjs(`${new Date().getHours()}:${new Date().getMinutes()}`),
    screenshot: "",
    rejected_note: "",
    payment_type: "",
    amount: "0",
    status: "",
    order_id: 1,
  });

  const totalPrice = React.useMemo(() => {
    let tot = 0;
    for (let i = 0; i < cartItems.length; i++) {
      tot += Number(cartItems[i].subtotal);
    }
    return tot;
  }, [cartItems.length]);
  const size = useWindowSize();
  const router = useRouter();
  const removeItem = (ind: number) => {
    let newCartItems = [...cartItems];
    newCartItems.splice(ind, 1);
    setCartItems(newCartItems);
  };
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
  const updatePage = async () => {
    const newOrder = { ...order };
    newOrder.products = cartItems;
    newOrder.total = totalPrice;
    newOrder.subtotal = `${totalPrice}`;
    if(currency === "USD") {
      newOrder.total_usd = Number(totalPrice)/usd;
    }
    if (page === "Shipping") {
      if (cartItems.length === 0) {
        showErrorAlert({
          text: "You don't have any product to make an order!",
        });
      } else setPage("Payment");
    } else if (page === "Payment") {
      if (payment.amount === "0" || payment.payment_type === "") {
        showErrorAlert({ text: "Choose your payment type and input amount!" });
        return;
      }
      if (image) {
        setPage("Loading");
        // create order
        // upload image
        // add payment
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        axios.post("order/", { data: newOrder }).then((data) => {
          const newPayment = { ...payment };
          newPayment.order_id = data.data.id;
          if (currency === "USD")
            newPayment.amount = `${Number(newPayment.amount) * usd}`;
          if (image) {
            const formData = new FormData();
            formData.append("image0", image as Blob);
            formData.append("length", "1");

            axios
              .post("file/", formData, {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              })
              .then((response) => {
                newPayment.screenshot = response.data[0].full_url;
                axios.post(`/order/payment/`, {
                  data: newPayment,
                });
                setPage("Confirmed");
                setCartItems([]);
              });
          }
        });
      } else {
        showErrorAlert({ text: "Please upload an image!" });
      }
    }
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
    if (customer) {
      setOrder({
        ...order,
        customer: customer,
        customer_email: customer.email,
        order_address: {
          id: customer.customer_addresses[0].id,
          address: customer.customer_addresses[0].address,
          city: customer.customer_addresses[0].city,
          map: customer.customer_addresses[0].map,
          state: customer.customer_addresses[0].state,
        },
        customer_name: customer.name,
        phone: customer.phone,
      });
    } else {
      const user = JSON.parse(localStorage.getItem("user")!);
      if (user === null) {
        showErrorAlert({ text: "Please login first!" });
      } else {
        axios
          .get("customer/user/", { params: { uid: user.id } })
          .then((data) => {
            setCustomer(data.data);
          });
      }
    }
  }, [token]);
  return (
    <div className="xl:w-[1190px] flex flex-row gap-40 mx-auto py-20 xl:px-0 md:px-[51px] sm:px-0 px-2">
      <div className="md:w-[80%] sm:w-[343px] w-full mx-auto flex flex-col gap-[50px]">
        <CartHeader backPage={backPage} page={page} openCart={openCart} />
        <div className="flex flex-col xl:gap-10 gap-8">
          <CheckoutProgress progress={page} />
          <AnimatePresence>
            {page === "Shipping" && (
              <FirstPage order={order} setOrder={setOrder} />
            )}
            {page === "Payment" && (
              <PaymentPage
                payment={payment}
                setPayment={setPayment}
                totalPrice={totalPrice}
                setImage={(f) => setImage(f)}
                currency={currency}
                setCurrency={setCurrency}
                usd={usd}
              />
            )}
            {page === "Loading" && (
              <div className="flex flex-col  gap-4 py-20 text-center">
                Creating order...Please wait <p className="loader"></p>
              </div>
            )}
            {page === "Confirmed" && <OrderConfirmed />}
          </AnimatePresence>
          <CheckoutButtons page={page} updatePage={updatePage} />
        </div>
      </div>
      <AnimatePresence>
        {!hidden && page !== "Loading" && (
          <CartSummary
            closeCart={closeCart}
            cartItems={cartItems}
            removeItem={removeItem}
            totalPrice={totalPrice}
            usd={usd}
            currency={currency}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
