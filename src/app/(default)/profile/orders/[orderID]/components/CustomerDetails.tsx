import Image from "next/image";
import Profile from "../images/calendar.svg";
import Email from "../images/calendar.svg";
import Phone from "../images/calendar.svg";
import OrderDetailCard from "./OrderDetailCard";
import { useTranslations } from "next-intl";
import { customer } from "@/types/order";

export default function CustomerDetails({
  customer: { avatar, email, name, phone },
}: {
  customer: customer;
}) {
  const t = useTranslations("input");
  return (
    <OrderDetailCard heading="Customer Details">
      <div className="flex flex-col md:gap-[18px] gap-4 font-bold xl:text-lg text-sm">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-3">
            <div className="w-[18px] h-5 md:block hidden relative">
              <Image
                src={Profile}
                alt="profile"
                fill
                sizes="100%"
                className="size-full object-cover"
              />
            </div>
            <p className="text-grey-100">{t("name")}</p>
          </div>
          <p>{name}</p>
        </div>
        {email !== "" && (
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-3">
              <div className="w-[18px] h-5 md:block hidden relative">
                <Image
                  src={Email}
                  alt="profile"
                  fill
                  sizes="100%"
                  className="size-full object-cover"
                />
              </div>
              <p className="text-grey-100">{t("email")}</p>
            </div>
            <p>{email}</p>
          </div>
        )}
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-3">
            <div className="w-[18px] h-5 md:block hidden relative">
              <Image
                src={Phone}
                alt="phone no"
                fill
                sizes="100%"
                className="size-full object-cover"
              />
            </div>
            <p className="text-grey-100">{t("phone")}</p>
          </div>
          <p>{phone}</p>
        </div>
      </div>
    </OrderDetailCard>
  );
}
