import { useLocale, useTranslations } from "next-intl";
import { order } from "@/types/order";
import Gift from "../images/gift.svg";
import Image from "next/image";

export default function GiftList({ order }: { order: order }) {
  const t = useTranslations("orders");
  return (
    <div className="flex flex-col md:py-6 px-[28px] md:bg-white md:shadow-dropdown">
      <p className="py-2 font-sora font-semibold text-2xl">Gift</p>
      <div className="md:py-5 py-4">
        {order.gift_list.map((data, index) => {
          return (
            <div className="flex items-center justify-start mb-4" key={index}>
              <div className="w-[20px]">
                <Image
                  src={Gift}
                  alt="bookmark"
                  className="size-full object-cover"
                />
              </div>
              <p className="ml-4 font-semibold">{data}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
