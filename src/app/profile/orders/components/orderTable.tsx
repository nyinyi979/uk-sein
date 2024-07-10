import EachOrder from "./eachOrder";
import { order, orderStatus } from "@/types/type";
import { AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

export default function OrderTable({
  orders,
  status,
}: {
  orders: order[];
  status: orderStatus;
}) {
  const t = useTranslations("orders");
  return (
    <div className="flex flex-col md:gap-6 gap-[18px] mx-auto xl:pt-7 pt-[18px] pb-[50px] px-7 bg-white shadow-orderTable">
      <div className="w-full flex flex-row justify-between font-bold xl:text-base text-xs text-center text-grey-200">
        <p className="xl:w-[100px] md:w-[60px] w-[110px] xl:text-left md:text-center text-left">
          {t("order-id")}
        </p>
        <p className="xl:w-[100px] md:w-[80px] w-[100px]">{t("date")}</p>
        <p className="xl:w-[148px] md:block hidden w-[80px]">{t("payment")}</p>
        <p className="xl:w-[200px] md:block hidden w-[100px]">{t("TOTAL")}</p>
        <p className="xl:w-[90px] md:block hidden w-[60px] xl:text-left">
          {t("PRODUCTS")}
        </p>
        <p className="xl:w-[180px] md:block hidden w-[100px]">{t("STATUS")}</p>
        <p className="xl:w-[140px] md:w-[80px] w-[110px]">{t("actions")}</p>
      </div>
      <AnimatePresence>
        {orders.map((order) => (
          <EachOrder key={order.orderID} order={order} orderStatus={status} />
        ))}
      </AnimatePresence>
    </div>
  );
}
