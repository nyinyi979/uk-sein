import OrderDetailCard from "./orderDetailCard";
import Image from "next/image";
import Calendar from "../images/calendar.svg";
import Payment from "../images/calendar.svg";
import Bookmark from "../images/calendar.svg";
import AyaPay from "../../images/ayapay.png";
import Kpay from "../../images/kpay.png";
import Wave from "../../images/wavepay.png";
import Credit from "../../images/credit.png";

export default function OrderBasicInfo({
  orderID,
  orderedDate,
  paymentMethod,
  status,
}: {
  orderID: string;
  orderedDate: string;
  paymentMethod: "AyaPay" | "Kpay" | "Credit" | "WavePay";
  status: "Pending" | "Confirmed" | "Reject";
}) {
  const img =
    paymentMethod == "AyaPay"
      ? AyaPay
      : paymentMethod === "Kpay"
        ? Kpay
        : paymentMethod === "Credit"
          ? Credit
          : Wave;
  return (
    <div className="flex flex-row gap-8">
      <OrderDetailCard heading={`Order ID - # ${orderID}`}>
        <div className="flex flex-col gap-[18px] font-bold xl:text-lg text-sm">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-3">
              <div className="w-[18px] h-5 relative">
                <Image
                  src={Calendar}
                  alt="calendar"
                  fill
                  sizes="100%"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-grey-100">Date Added</p>
            </div>
            <p>{orderedDate}</p>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-3">
              <div className="w-[18px] h-5 relative">
                <Image
                  src={Payment}
                  alt="payment"
                  fill
                  sizes="100%"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-grey-100">Payment Method</p>
            </div>
            <div className="xl:size-8 size-10 relative">
              <Image
                src={img}
                alt="payment method"
                fill
                sizes="100%"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-3">
              <div className="w-[18px] h-5 relative">
                <Image
                  src={Bookmark}
                  alt="bookmark"
                  fill
                  sizes="100%"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-grey-100">Status</p>
            </div>
            <p className={`${status}-order ml-auto`}>{status}</p>
          </div>
        </div>
      </OrderDetailCard>
    </div>
  );
}
