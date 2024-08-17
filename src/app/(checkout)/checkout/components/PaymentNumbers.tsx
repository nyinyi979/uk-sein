import Image from "next/image";
import QR from "../images/qr.png";
import mm from "../images/mm.png";
import usd from "../images/usd.png";
import { payment } from "@/types/type";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function PaymentNumbers({
  currency,
  payment,
  setCurrency,
}: {
  payment: payment;
  currency: "MMK" | "USD";
  setCurrency: (cur: "MMK" | "USD") => void;
}) {
  const t = useTranslations("checkout");
  return (
    <div className="flex flex-col md:gap-6 gap-[18px] pb-7">
      <div className="flex flex-col md:gap-4 gap-3">
        <div className="flex flex-row gap-3">
          <p className="font-semibold text-grey-400">
            {t("payment-number")} :{" "}
          </p>
          <p className="font-bold">0887822121</p>
        </div>
        <div className="flex flex-row gap-3">
          <p className="font-semibold text-grey-400">{t("owner-name")} : </p>
          <p className="font-bold">Ko Khant</p>
        </div>
      </div>
      <AnimatePresence>
        {payment === "Credit" && (
          <motion.div
            animate={{ opacity: [0, 1] }}
            exit={{ opacity: 0 }}
            layout
            className="flex flex-col gap-[18px] md:py-[18px] py-3"
          >
            <p className="font-sora font-semibold text-xl">Choose currency :</p>
            <div className="flex flex-row gap-6">
              <button
                onClick={() => setCurrency("MMK")}
                disabled={currency === "MMK"}
                className="flex flex-row gap-2.5 py-[18px] md:px-8 px-6 rounded-[15px] border border-grey-100 disabled:border-grey-500 duration-300"
              >
                <div className="size-7 relative">
                  <Image
                    src={mm}
                    alt="MM"
                    fill
                    sizes="100%"
                    className="size-full object-cover"
                  />
                </div>
                <p className="font-semibold text-lg text-grey-400">MMK</p>
              </button>
              <button
                onClick={() => setCurrency("USD")}
                disabled={currency === "USD"}
                className="flex flex-row gap-2.5 py-[18px] md:px-8 px-6 rounded-[15px] border border-grey-100 disabled:border-grey-500 duration-300"
              >
                <div className="size-7 relative">
                  <Image
                    src={usd}
                    alt="uds"
                    fill
                    sizes="100%"
                    className="size-full object-cover"
                  />
                </div>
                <p className="font-semibold text-lg text-grey-400">USD</p>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="md:size-[120px] size-[100px] relative">
        <Image
          src={QR}
          alt="qr"
          fill
          sizes="100%"
          className="size-full object-cover"
        />
      </div>
      <p className="w-fit py-3 md:p-[18px] px-2 rounded-[10px] bg-red-50 font-semibold xl:text-base md:text-sm text-xs text-red-500">
        *{t("drop-the-ss")}
      </p>
    </div>
  );
}
