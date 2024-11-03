import OrderDetailCard from "./OrderDetailCard";
import Image from "next/image";
import Calendar from "../images/calendar.svg";
import Bookmark from "../images/calendar.svg";
import CloseButton from "./PopUpCloseButton";
import Payment from "../images/payment.svg";
import moment from "moment";
import { useTranslations } from "next-intl";
import { order } from "@/types/order";
import { MEDIA_URL } from "@/utils/axios";
import { useUserStore } from "@/store/clientData";

export default function OrderBasicInfo({
  order,
  hide,
}: {
  order: order;
  hide: () => void;
}) {
  const payments = useUserStore((store) => store.payments);
  const index = payments.findIndex(
    (p) => p.payment_name === order.payments[0]?.payment_type || "",
  );
  const t = useTranslations("orders");
  return (
    <div className="flex flex-row gap-8 h-full">
      <OrderDetailCard
        heading={`Order ID - # ${order.id}`}
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
            <p>{moment(order.created_at).format("DD/MM/YYYY")}</p>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-3">
              <div className="w-[18px] h-5 md:block hidden relative">
                <Image
                  src={Payment}
                  fill
                  sizes="100%"
                  alt="payment"
                  className="size-full object-cover"
                />
              </div>
              <p className="text-grey-100">{t("payment-method")}</p>
            </div>
            <div className="xl:size-8 md:size-10 size-8 relative">
              {index !== -1 && (
                <img
                  src={MEDIA_URL + payments[index].image}
                  alt="payment method"
                  className="size-full object-cover"
                />
              )}
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
            <p className={`${order.status}-order ml-auto`}>{order.status}</p>
          </div>
        </div>
      </OrderDetailCard>
    </div>
  );
}
