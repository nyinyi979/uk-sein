import PaymentMethods from "./Payment";
import PaymentNumbers from "./PaymentNumbers";
import PaymentImageUpload from "./PaymentImageUpload";
import { motion } from "framer-motion";
import { payment } from "@/types/type";
import { useTranslations } from "next-intl";

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
        <PaymentMethods payment={payment} setPayment={setPayment} />
        {payment !== "" && (
          <PaymentNumbers
            currency={currency}
            payment={payment}
            setCurrency={setCurrency}
          />
        )}
        <PaymentImageUpload setFile={setFile} />
      </div>
    </motion.div>
  );
}
