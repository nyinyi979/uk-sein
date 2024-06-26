import KPay from "../images/kpay.png";
import WavePay from "../images/wavepay.png";
import BBK from "../images/bbk.png";
import Credit from "../images/credit.png";
import AyaBank from "../images/ayabank.png";
import { payment } from "@/app/types/type";
import Image from "next/image";
export default function PaymentMethods({
  payment,
  setPayment,
}: {
  payment: payment;
  setPayment: (payment: payment) => void;
}) {
  return (
    <div className="flex flex-row gap-[18px]">
      <button
        onClick={() => setPayment("Kpay")}
        disabled={payment === "Kpay"}
        className="size-20 rounded-[10px] border border-grey-50 disabled:border-grey-500 hover:bg-grey-50 duration-300"
      >
        <div className="size-[50px] mx-auto my-[15px] relative">
          <Image
            src={KPay}
            alt="Kpay"
            fill
            sizes="100%"
            className="w-full h-full bg-cover"
          />
        </div>
      </button>
      <button
        onClick={() => setPayment("WavePay")}
        disabled={payment === "WavePay"}
        className="size-20 rounded-[10px] border border-grey-50 disabled:border-grey-500 hover:bg-grey-50 duration-300"
      >
        <div className="size-[50px] mx-auto my-[15px] relative">
          <Image
            src={WavePay}
            alt="Wave pay"
            fill
            sizes="100%"
            className="w-full h-full bg-cover"
          />
        </div>
      </button>
      <button
        onClick={() => setPayment("Aya")}
        disabled={payment === "Aya"}
        className="size-20 rounded-[10px] border border-grey-50 disabled:border-grey-500 hover:bg-grey-50 duration-300"
      >
        <div className="size-[50px] mx-auto my-[15px] relative">
          <Image
            src={AyaBank}
            alt="Aya"
            fill
            sizes="100%"
            className="w-full h-full bg-cover"
          />
        </div>
      </button>
      <button
        onClick={() => setPayment("Credit")}
        disabled={payment === "Credit"}
        className="size-20 rounded-[10px] border border-grey-50 disabled:border-grey-500 hover:bg-grey-50 duration-300"
      >
        <div className="size-[50px] mx-auto my-[15px] relative">
          <Image
            src={Credit}
            alt="Credit"
            fill
            sizes="100%"
            className="w-full h-full bg-cover"
          />
        </div>
      </button>
      <button
        onClick={() => setPayment("BBK")}
        disabled={payment === "BBK"}
        className="size-20 rounded-[10px] border border-grey-50 disabled:border-grey-500 hover:bg-grey-50 duration-300"
      >
        <div className="size-[50px] mx-auto my-[15px] relative">
          <Image
            src={BBK}
            alt="BBK"
            fill
            sizes="100%"
            className="w-full h-full bg-cover"
          />
        </div>
      </button>
    </div>
  );
}
