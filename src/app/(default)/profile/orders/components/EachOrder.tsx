import React from "react";
import Order from "../[orderID]/components/Order";
import useWindowSize from "@/components/hooks/useWindowSize";
import moment from "moment";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { TableCell, TableRow } from "@/components/Table";
import { order, orderStatus } from "@/types/order";
import { payment_search } from "@/types/payment";
import { MEDIA_URL } from "@/utils/axios";

export default function EachOrder({
  order,
  orderStatus,
  payments,
}: {
  order: order;
  orderStatus: orderStatus;
  payments: payment_search[];
}) {
  const index = payments.findIndex(
    (p) => p.payment_name === order.payments[0]?.payment_type || "",
  );
  const count = React.useMemo(() => {
    let c = 0;
    order.products.map((p) => {
      c += Number(p.quantity);
    });
    return c;
  }, []);
  const size = useWindowSize();
  const router = useRouter();
  const [hidden, setHidden] = React.useState(true);
  const onClick = () =>
    size[0] > 767
      ? router.push(`/profile/orders/${order.id}`)
      : setHidden(false);
  const hide = () => {
    setHidden(true);
    router.replace("/profile/orders");
  };
  const t = useTranslations("orders");
  return (
    <>
        <TableRow>
          <TableCell>#{order.id}</TableCell>
          <TableCell className="text-center">
            {moment(order.created_at).format("DD/MM/YYYY")}
          </TableCell>
          <TableCell className="ssm:table-cell hidden">
            <div className="size-10 mx-auto relative">
              {index !== -1 && (
                <img
                  src={MEDIA_URL + payments[index].image}
                  alt="payment"
                  className="size-full object-cover"
                />
              )}
            </div>
          </TableCell>
          <TableCell className="ssm:table-cell hidden text-center">
            {order.total.toLocaleString()} MMK
          </TableCell>
          <TableCell className="md:table-cell hidden text-center">
            ({count})
          </TableCell>
          <TableCell className="md:table-cell hidden">
            <p
              className={`${order.status}-order ml-auto xl:text-sm text-[8px]`}
            >
              {order.status}
            </p>
          </TableCell>
          <TableCell>
            <button onClick={onClick} className="order-btn">
              <span>{t("view-order")}</span>
              <svg
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[10.68px] xl:h-4 h-1.5 md:mt-0.5 mt-[7px] relative"
              >
                <path d="M1.77568 0.307796L8.69474 7.26199C8.7915 7.3589 8.86827 7.47405 8.92065 7.60085C8.97303 7.72764 9 7.86358 9 8.00087C9 8.13816 8.97303 8.2741 8.92065 8.40089C8.86827 8.52769 8.7915 8.64284 8.69474 8.73975L1.77568 15.6939C1.5807 15.8899 1.31626 16 1.04053 16C0.76479 16 0.500348 15.8899 0.305374 15.6939C0.1104 15.498 0.000865071 15.2322 0.000865068 14.9551C0.000865065 14.6779 0.1104 14.4121 0.305374 14.2162L6.49015 8L0.30451 1.78382C0.109536 1.58786 0 1.32208 0 1.04494C0 0.767806 0.109536 0.502022 0.30451 0.306058C0.499484 0.110094 0.763926 0 1.03966 0C1.3154 0 1.57984 0.110094 1.77481 0.306058L1.77568 0.307796Z" />
              </svg>
            </button>
          </TableCell>
        </TableRow>
  
      <AnimatePresence>
        {!hidden && <Order hide={hide} order={order} />}
      </AnimatePresence>
    </>
  );
}
