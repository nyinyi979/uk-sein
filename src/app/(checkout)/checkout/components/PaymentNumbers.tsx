import { useTranslations } from "next-intl";
import { payment_search } from "@/types/payment";
import { MEDIA_URL } from "@/utils/axios";
import React from "react";

export default function PaymentNumbers({
  payment,
}: {
  payment: payment_search;
}) {
  const t = useTranslations("checkout");
  
  return (
    <div className="flex flex-col md:gap-6 gap-[18px] pb-7">
      <div className="flex flex-col md:gap-4 gap-3">
        <div className="flex flex-row gap-3">
          <p className="font-semibold text-grey-400">
            {t("payment-number")} :{" "}
          </p>
          <p className="font-bold">{payment.payment_number}</p>
        </div>
        <div className="flex flex-row gap-3">
          <p className="font-semibold text-grey-400">{t("owner-name")} : </p>
          <p className="font-bold">{payment.owner_name}</p>
        </div>
      </div>
      {!payment.is_visa&&<div className="md:size-[120px] size-[100px] relative">
        {payment.qr_code.map((qr, index) => (
          <img
            key={qr + index}
            src={MEDIA_URL + qr}
            alt={qr}
            className="size-full object-cover"
          />
        ))}
      </div>}
      <p className="w-fit py-3 md:p-[18px] px-2 rounded-[10px] bg-red-50 font-semibold xl:text-base md:text-sm text-xs text-red-500">
        *{t("drop-the-ss")}
      </p>
    </div>
  );
}
