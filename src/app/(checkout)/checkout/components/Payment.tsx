import { payment_search } from "@/types/payment";
import { MEDIA_URL } from "@/utils/axios";
import Visa from "../images/credit.png";
import Image from "next/image";

export default function PaymentMethods({
  selectedPayment,
  updateSelectedPayment,
  payments,
}: {
  selectedPayment: number | null;
  payments: payment_search[];
  updateSelectedPayment: (payment: number) => void;
}) {
  const btnClass =
    "md:size-20 size-[50px] md:rounded-[10px] rounded-[5px] border border-grey-50 disabled:border-grey-500 hover:bg-grey-50 duration-300";
  return (
    <div className="flex flex-row gap-[18px]">
      {payments.map((payment, index) => (
        <button
          key={payment.created_at + index}
          onClick={() => updateSelectedPayment(index)}
          disabled={index === selectedPayment}
          className={btnClass}
        >
          <div className="md:size-[50px] size-7 mx-auto md:my-[15px] relative">
              <img
                src={MEDIA_URL + payment.image}
                alt={payment.payment_name}
                className="size-full object-cover"
              />
          </div>
        </button>
      ))}
    </div>
  );
}
