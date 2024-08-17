import { useTranslations } from "next-intl";
import OrderDetailCard from "./OrderDetailCard";
import { addressInOrder } from "@/types/type";

export default function ShippingAddress({
  address,
  state,
  township,
}: addressInOrder) {
  const t = useTranslations("signup");
  return (
    <OrderDetailCard heading={t("shipping-info")}>
      <div className="flex flex-col md:gap-5 gap-3 font-semibold xl:text-lg md:text-base text-lg">
        <p>{address}</p>
        <p>{township}</p>
        <p>{state}</p>
      </div>
    </OrderDetailCard>
  );
}
