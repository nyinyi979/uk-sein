import PaymentNumbers from "./PaymentNumbers";
import PaymentImageUpload from "./PaymentImageUpload";
import PaymentMethods from "./Payment";
import axios from "@/utils/axios";
import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { paymentInOrder } from "@/types/order";
import { payment_search } from "@/types/payment";
import { showErrorAlert } from "@/components/Alert";
import Input from "@/components/input/Input";

export default function PaymentPage({
  totalPrice,
  payment,
  setPayment,
  setImage,
}: {
  totalPrice: number;
  payment: paymentInOrder;
  setPayment: Dispatch<SetStateAction<paymentInOrder>>;
  setImage: (f: File) => void;
}) {
  const [payments, setPayments] = React.useState<payment_search[]>([]);
  const [selectedPayment, setSelectedPayment] = React.useState<null | number>(
    null,
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
          <PaymentNumbers payment={payments[selectedPayment]} />
        )}
        <Input
          id="amount"
          setValue={(val) => {
            if (Number(val) > totalPrice) {
              setPayment({ ...payment, amount: `${totalPrice}` });
            } else {
              setPayment({ ...payment, amount: val });
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
