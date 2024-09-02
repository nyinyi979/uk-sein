import PaymentNumbers from "./PaymentNumbers";
import PaymentImageUpload from "./PaymentImageUpload";
import PaymentMethods from "./Payment";
import axios from "@/utils/axios";
import Input from "@/components/input/Input";
import USD from "../images/usd.png";
import MM from "../images/mm.png";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { paymentInOrder } from "@/types/order";
import { payment_search } from "@/types/payment";
import { showErrorAlert } from "@/components/Alert";

export default function PaymentPage({
  totalPrice,
  payment,
  setPayment,
  setImage,
  currency,
  setCurrency,
  usd
}: {
  totalPrice: number;
  payment: paymentInOrder;
  setPayment: Dispatch<SetStateAction<paymentInOrder>>;
  setImage: (f: File) => void;
  currency: "MMK"|"USD",
  setCurrency: Dispatch<SetStateAction<"MMK"|"USD">>,
  usd: number;
}) {
  const [payments, setPayments] = React.useState<payment_search[]>([]);
  console.log(payments)
  const [selectedPayment, setSelectedPayment] = React.useState<null | number>(
    null
  );
  const updateSelectedPayment = (p: number) => {
    setSelectedPayment(p);
    setPayment({
      ...payment,
      payment_type: payments[selectedPayment || 0].payment_name,
    });
  };
  React.useEffect(() => {
    axios
      .get("payment-method/search/?query=")
      .then((data) => {
        setPayments(data.data);
      })
      .catch(() => {
        showErrorAlert({ text: "Something went wrong!" });
      });
  }, []);
  const t = useTranslations("checkout");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layout
      className="flex flex-col gap-[50px] pt-[18px]"
    >
      <div className="flex flex-col md:gap-6 gap-[18px]">
        <p className="font-sora font-semibold md:text-2xl text-xl">
          {t("payment-method")}
        </p>
        <PaymentMethods
          payments={payments}
          selectedPayment={selectedPayment}
          updateSelectedPayment={updateSelectedPayment}
        />
        {selectedPayment !== null && (
          <>
            <PaymentNumbers payment={payments[selectedPayment]} />
            {payments[selectedPayment].is_visa && (
              <div className="flex flex-col gap-[18px] py-[18px]">
                <p className="font-sora font-semibold text-xl">
                  Choose Currency :{" "}
                </p>
                <div className="flex gap-6">
                  <button
                    disabled={currency === "MMK"}
                    onClick={() => setCurrency("MMK")}
                    className="flex gap-2.5 py-[18px] px-8 rounded-[15px] border border-grey-100 disabled:border-grey-300 duartion-300"
                  >
                    <Image
                      src={MM}
                      alt="mmk"
                      width={28}
                      height={28}
                      className="rounded-full"
                    />
                    MMK
                  </button>
                  <button
                    disabled={currency === "USD"}
                    onClick={() => setCurrency("USD")}
                    className="flex gap-2.5 py-[18px] px-8 rounded-[15px] border border-grey-100 disabled:border-grey-300 duartion-300"
                  >
                    <Image
                      src={USD}
                      alt="usd"
                      width={28}
                      height={28}
                      className="rounded-full"
                    />
                    USD
                  </button>
                </div>
              </div>
            )}
          </>
        )}
        <Input
          id="amount"
          setValue={(val) => {
            const amount = currency === "USD" ? Number(val) * usd : Number(val);
            const tot = currency === "USD" ? (Number(totalPrice) / usd).toFixed(2) : totalPrice;
  
            if (amount > Number(totalPrice)) {
              setPayment({ ...payment, amount: `${tot}` });
            } else {
              setPayment({ ...payment, amount: `${currency === "USD" ? val : amount}` });
            }
          }}
          value={payment.amount}
          label="Amount"
          type="number"
          placeholder="Amount"
          required
        />
        <PaymentImageUpload setFile={(f) => setImage(f)} />
      </div>
    </motion.div>
  );
}
