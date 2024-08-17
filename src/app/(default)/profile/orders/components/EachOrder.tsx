import React from "react";
import Order from "../[orderID]/components/Order";
import Image from "next/image";
import AyaPay from "../images/ayapay.png";
import Kpay from "../images/kpay.png";
import Wave from "../images/wavepay.png";
import Credit from "../images/credit.png";
import useWindowSize from "@/components/hooks/useWindowSize";
import { order, orderStatus } from "@/types/type";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { TableCell, TableRow } from "@/components/Table";

export default function EachOrder({
  order: { amount, orderID, orderedDate, paymentMethod, productCount, status },
  orderStatus,
}: {
  order: order;
  orderStatus: orderStatus;
}) {
  const img =
    paymentMethod == "AyaPay"
      ? AyaPay
      : paymentMethod === "Kpay"
        ? Kpay
        : paymentMethod === "Credit"
          ? Credit
          : Wave;
  const checked = orderStatus === "" || orderStatus === status;
  const size = useWindowSize();
  const router = useRouter();
  const [hidden, setHidden] = React.useState(true);
  const onClick = () =>
    size[0] > 767
      ? router.push(`/profile/orders/${orderID}`)
      : setHidden(false);
  const hide = () => {
    setHidden(true);
    router.replace("/profile/orders");
  };
  React.useEffect(() => {
    if (size[0] > 767) setHidden(true);
  }, [size]);
  const t = useTranslations("orders");
  return (
    <>
      {checked && (
        <TableRow>
          <TableCell>#{orderID}</TableCell>
          <TableCell className="text-center">{orderedDate}</TableCell>
          <TableCell className="ssm:table-cell hidden">
            <div className="xl:size-10 size-6 relative mx-auto">
              <Image
                src={img}
                alt={paymentMethod}
                fill
                sizes="100%"
                className="size-full object-cover"
              />
            </div>
          </TableCell>
          <TableCell className="ssm:table-cell hidden text-center">
            {amount.toLocaleString()} MMK
          </TableCell>
          <TableCell className="md:table-cell hidden text-center">
            ({productCount})
          </TableCell>
          <TableCell className="md:table-cell hidden">
            <p className={`${status}-order ml-auto xl:text-sm text-[8px]`}>
              {status}
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
        // <motion.div
        //   animate={{ opacity: [0, 1] }}
        //   exit={{ opacity: [1, 0] }}
        //   layout
        //   className="flex flex-row md:py-6 py-[18px] font-bold xl:text-base md:text-xs text-sm"
        // >
        //   <p className="xl:w-[100px] md:w-[60px] w-[110px]">#{orderID}</p>
        //   <p className="xl:w-[100px] md:w-[80px] w-[100px] md:text-center">
        //     {orderedDate}
        //   </p>
        //   <div className="xl:w-[148px] w-[80px] md:block hidden">
        //     <div className="xl:size-10 size-6 relative mx-auto">
        //       <Image
        //         src={img}
        //         alt={paymentMethod}
        //         fill
        //         sizes="100%"
        //         className="size-full object-cover"
        //       />
        //     </div>
        //   </div>
        //   <p className="xl:w-[200px] w-[100px] md:block hidden text-center">
        //     {amount.toLocaleString()} MMK
        //   </p>
        //   <p className="xl:w-[90px] w-[60px] md:block hidden text-center">
        //     ({productCount})
        //   </p>
        //   <div className="xl:w-[180px] w-[100px] md:block hidden">
        //     <p className={`${status}-order mx-auto xl:text-sm text-[8px]`}>
        //       {status}
        //     </p>
        //   </div>
        //   <div className="xl:w-[140px] md:w-[80px] w-[110px]">
        //     <button onClick={onClick} className="order-btn">
        //       <span>{t("view-order")}</span>
        //       <svg
        //         viewBox="0 0 9 16"
        //         fill="none"
        //         xmlns="http://www.w3.org/2000/svg"
        //         className="w-[10.68px] xl:h-4 h-1.5 md:mt-0.5 mt-[7px] relative"
        //       >
        //         <path d="M1.77568 0.307796L8.69474 7.26199C8.7915 7.3589 8.86827 7.47405 8.92065 7.60085C8.97303 7.72764 9 7.86358 9 8.00087C9 8.13816 8.97303 8.2741 8.92065 8.40089C8.86827 8.52769 8.7915 8.64284 8.69474 8.73975L1.77568 15.6939C1.5807 15.8899 1.31626 16 1.04053 16C0.76479 16 0.500348 15.8899 0.305374 15.6939C0.1104 15.498 0.000865071 15.2322 0.000865068 14.9551C0.000865065 14.6779 0.1104 14.4121 0.305374 14.2162L6.49015 8L0.30451 1.78382C0.109536 1.58786 0 1.32208 0 1.04494C0 0.767806 0.109536 0.502022 0.30451 0.306058C0.499484 0.110094 0.763926 0 1.03966 0C1.3154 0 1.57984 0.110094 1.77481 0.306058L1.77568 0.307796Z" />
        //       </svg>
        //     </button>
        //   </div>
        // </motion.div>
      )}
      <AnimatePresence>
        {!hidden && <Order hide={hide} params={{ orderID: orderID }} />}
      </AnimatePresence>
    </>
  );
}
