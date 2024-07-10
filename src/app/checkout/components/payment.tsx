import Image from "next/image";
import KPay from "../images/kpay.png";
import WavePay from "../images/wavepay.png";
import BBK from "../images/bbk.png";
import Credit from "../images/credit.png";
import AyaBank from "../images/ayabank.png";
import { payment } from "@/types/type";

export default function PaymentMethods({
  payment,
  setPayment,
}: {
  payment: payment;
  setPayment: (payment: payment) => void;
}) {
  const btnClass =
    "md:size-20 size-[50px] md:rounded-[10px] rounded-[5px] border border-grey-50 disabled:border-grey-500 hover:bg-grey-50 duration-300";
  return (
    <div className="flex flex-row gap-[18px]">
      <button
        onClick={() => setPayment("Kpay")}
        disabled={payment === "Kpay"}
        className={btnClass}
      >
        <div className="md:size-[50px] size-7 mx-auto md:my-[15px] relative">
          <Image
            src={KPay}
            alt="Kpay"
            fill
            sizes="100%"
            className="size-full object-cover"
          />
        </div>
      </button>
      <button
        onClick={() => setPayment("WavePay")}
        disabled={payment === "WavePay"}
        className={btnClass}
      >
        <div className="md:size-[50px] size-7 mx-auto md:my-[15px] relative">
          <Image
            src={WavePay}
            alt="Wave pay"
            fill
            sizes="100%"
            className="size-full object-cover"
          />
        </div>
      </button>
      <button
        onClick={() => setPayment("Aya")}
        disabled={payment === "Aya"}
        className={btnClass}
      >
        <div className="md:size-[50px] size-7 mx-auto md:my-[15px] relative">
          <Image
            src={AyaBank}
            alt="Aya"
            fill
            sizes="100%"
            className="size-full object-cover"
          />
        </div>
      </button>
      <button
        onClick={() => setPayment("Credit")}
        disabled={payment === "Credit"}
        className={btnClass}
      >
        <div className="md:size-[50px] size-7 mx-auto md:my-[15px] relative">
          <Image
            src={Credit}
            alt="Credit"
            fill
            sizes="100%"
            className="size-full object-cover"
          />
        </div>
      </button>
      <button
        onClick={() => setPayment("BBK")}
        disabled={payment === "BBK"}
        className={btnClass}
      >
        <div className="md:size-[50px] size-7 mx-auto md:my-[15px] relative">
          <Image
            src={BBK}
            alt="BBK"
            fill
            sizes="100%"
            className="size-full object-cover"
          />
        </div>
      </button>
    </div>
  );
}
