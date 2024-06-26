import { payment } from "@/app/types/type";
import PaymentMethods from "./payment";
import PaymentNumbers from "./paymentNumbers";
import PaymentImageUpload from "./paymentImageUpload";
import { motion } from "framer-motion";
export default function PaymentPage({
  payment,
  setPayment,
  setFile,
  currency,
  setCurrency,
}: {
  payment: payment;
  setPayment: (payment: payment) => void;
  setFile: (file: File) => void;
  currency: "MMK" | "USD";
  setCurrency: (cur: "MMK" | "USD") => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layout
      className="flex flex-col gap-[50px] pt-[18px]"
    >
      <div className="flex flex-col gap-6">
        <p className="font-sora font-semibold text-2xl">Payment Method</p>
        <PaymentMethods payment={payment} setPayment={setPayment} />
        <PaymentNumbers
          currency={currency}
          payment={payment}
          setCurrency={setCurrency}
        />
        <PaymentImageUpload setFile={setFile} />
      </div>
    </motion.div>
  );
}
