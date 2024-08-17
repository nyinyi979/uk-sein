import OrderDetailCard from "./OrderDetailCard";
import Image from "next/image";
import Calendar from "../images/calendar.svg";
import Payment from "../images/calendar.svg";
import Bookmark from "../images/calendar.svg";
import AyaPay from "../../images/ayapay.png";
import Kpay from "../../images/kpay.png";
import Wave from "../../images/wavepay.png";
import Credit from "../../images/credit.png";
import CloseButton from "./PopUpCloseButton";
import { useTranslations } from "next-intl";

export default function OrderBasicInfo({
  orderID,
  orderedDate,
  paymentMethod,
  status,
  hide,
}: {
  orderID: string;
  orderedDate: string;
  paymentMethod: "AyaPay" | "Kpay" | "Credit" | "WavePay";
  status: "Pending" | "Confirmed" | "Reject";
  hide: () => void;
}) {
  const img =
    paymentMethod == "AyaPay"
      ? AyaPay
      : paymentMethod === "Kpay"
        ? Kpay
        : paymentMethod === "Credit"
          ? Credit
          : Wave;
  const t = useTranslations("orders");
  return (
    <div className="flex flex-row gap-8 h-full">
      <OrderDetailCard
        heading={`Order ID - # ${orderID}`}
        rightEle={<CloseButton hide={hide} />}
      >
        <div className="flex flex-col md:gap-[18px] gap-[14px] font-bold xl:text-lg text-sm">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-3">
              <div className="w-[18px] h-5 md:block hidden relative">
                <Image
                  src={Calendar}
                  alt="calendar"
                  fill
                  sizes="100%"
                  className="size-full object-cover"
                />
              </div>
              <p className="text-grey-100">{t("date-added")}</p>
            </div>
            <p>{orderedDate}</p>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-3">
              <div className="w-[18px] h-5 md:block hidden relative">
                <Image
                  src={Payment}
                  alt="payment"
                  fill
                  sizes="100%"
                  className="size-full object-cover"
                />
              </div>
              <p className="text-grey-100">{t("payment-method")}</p>
            </div>
            <div className="xl:size-8 md:size-10 size-8 relative">
              <Image
                src={img}
                alt="payment method"
                fill
                sizes="100%"
                className="size-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-3">
              <div className="w-[18px] h-5 md:block hidden relative">
                <Image
                  src={Bookmark}
                  alt="bookmark"
                  fill
                  sizes="100%"
                  className="size-full object-cover"
                />
              </div>
              <p className="text-grey-100">{t("status")}</p>
            </div>
            <p className={`${status}-order ml-auto`}>{status}</p>
          </div>
        </div>
      </OrderDetailCard>
    </div>
  );
}
