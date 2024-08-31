import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/Table";
import EachOrder from "./EachOrder";
import { useTranslations } from "next-intl";
import { order, orderStatus } from "@/types/order";

export default function OrderTable({
  orders,
  status,
}: {
  orders: order[];
  status: orderStatus;
}) {
  console.log(orders)
  const t = useTranslations("orders");
  return (
    <div className="w-full mx-auto bg-white shadow-orderTable">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{t("order-id")}</TableHead>
            <TableHead className="text-center">{t("date")}</TableHead>
            <TableHead className="ssm:table-cell hidden text-center">
              {t("payment")}
            </TableHead>
            <TableHead className="ssm:table-cell hidden ssm:text-center text-right">
              {t("TOTAL")}
            </TableHead>
            <TableHead className="md:table-cell hidden text-center">
              {t("PRODUCTS")}
            </TableHead>
            <TableHead className="md:table-cell hidden text-right">
              {t("STATUS")}
            </TableHead>
            <TableHead className="text-right">{t("actions")}</TableHead>
          </TableRow>
        </TableHeader>
        {/* <div className="w-full flex flex-row justify-between font-bold xl:text-base text-xs text-center text-grey-200">
        <p className="xl:w-[100px] md:w-[60px] w-[110px] xl:text-left md:text-center text-left">
          {t("order-id")}
        </p>
        <p className="xl:w-[100px] md:w-[80px] w-[100px]"></p>
        <p className="xl:w-[148px] md:block hidden w-[80px]">{t("payment")}</p>
        <p className="xl:w-[200px] md:block hidden w-[100px]">{t("TOTAL")}</p>
        <p className="xl:w-[90px] md:block hidden w-[60px] xl:text-left">
          {t("PRODUCTS")}
        </p>
        <p className="xl:w-[180px] md:block hidden w-[100px]">{t("STATUS")}</p>
        <p className="xl:w-[140px] md:w-[80px] w-[110px]">{t("actions")}</p>
      </div> */}
        <TableBody>
          {orders.map((order) => (
            <EachOrder
              key={order.id + order.created_at}
              order={order}
              orderStatus={status}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
