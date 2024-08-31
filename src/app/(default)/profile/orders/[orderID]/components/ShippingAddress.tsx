import { useTranslations } from "next-intl";
import OrderDetailCard from "./OrderDetailCard";
import { addressInOrder } from "@/types/type";
import { order } from "@/types/order";

export default function ShippingAddress({
  order: { order_address },
}: {
  order: order;
}) {
  const t = useTranslations("signup");
  return (
    <OrderDetailCard heading={t("shipping-info")}>
      <div className="flex flex-col md:gap-5 gap-3 font-semibold xl:text-lg md:text-base text-lg">
        <p>{order_address.address}</p>
        <p>{order_address.city}</p>
        <p>{order_address.state}</p>
      </div>
    </OrderDetailCard>
  );
}
