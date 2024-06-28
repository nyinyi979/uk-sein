import { order, orderStatus } from "@/app/types/type";
import Image from "next/image";
import AyaPay from "../images/ayapay.png";
import Kpay from "../images/kpay.png";
import Wave from "../images/wavepay.png";
import Credit from "../images/credit.png";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
export default function OrderTable({
  orders,
  status,
}: {
  orders: order[];
  status: orderStatus;
}) {
  return (
    <div className="flex flex-col gap-6 mx-auto xl:pt-7 pt-[18px] pb-[50px] px-7 bg-white shadow-orderTable">
      <div className="w-full flex flex-row justify-between font-bold xl:text-base text-xs text-center">
        <p className="xl:w-[100px] w-[60px] xl:text-left">ORDER ID</p>
        <p className="xl:w-[100px] w-[80px]">DATE</p>
        <p className="xl:w-[148px] w-[80px]">PAYMENT</p>
        <p className="xl:w-[200px] w-[100px]">TOTAL</p>
        <p className="xl:w-[90px] w-[60px] xl:text-left">PRODUCTS</p>
        <p className="xl:w-[180px] w-[100px]">STATUS</p>
        <p className="xl:w-[140px] w-[80px]">ACTIONS</p>
      </div>
      <AnimatePresence>
        {orders.map((order) => (
          <EachOrder key={order.orderID} order={order} orderStatus={status} />
        ))}
      </AnimatePresence>
    </div>
  );
}
function EachOrder({
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
  return (
    <>
      {checked && (
        <motion.div
          animate={{ opacity: [0, 1] }}
          exit={{ opacity: [1, 0] }}
          layout
          className="flex flex-row py-6 font-bold xl:text-base text-xs"
        >
          <p className="xl:w-[100px] w-[60px]">#{orderID}</p>
          <p className="xl:w-[100px] w-[80px] text-center">{orderedDate}</p>
          <div className="xl:w-[148px] w-[80px]">
            <div className="xl:size-10 size-6 relative mx-auto">
              <Image
                src={img}
                alt={paymentMethod}
                fill
                sizes="100%"
                className="w-full h-full bg-cover"
              />
            </div>
          </div>
          <p className="xl:w-[200px] w-[100px] text-center">
            {amount.toLocaleString()} MMK
          </p>
          <p className="xl:w-[90px] w-[60px] text-center">({productCount})</p>
          <div className="xl:w-[180px] w-[100px]">
            <p className={`${status}-order mx-auto xl:text-sm text-[8px]`}>
              {status}
            </p>
          </div>
          <div className="xl:w-[140px] w-[80px]">
            <Link href={`/orders/${orderID}`} className="order-btn">
              <span>View Order</span>
              <div className="w-[9px] xl:h-4 h-1.5">
                <svg
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1.77568 0.307796L8.69474 7.26199C8.7915 7.3589 8.86827 7.47405 8.92065 7.60085C8.97303 7.72764 9 7.86358 9 8.00087C9 8.13816 8.97303 8.2741 8.92065 8.40089C8.86827 8.52769 8.7915 8.64284 8.69474 8.73975L1.77568 15.6939C1.5807 15.8899 1.31626 16 1.04053 16C0.76479 16 0.500348 15.8899 0.305374 15.6939C0.1104 15.498 0.000865071 15.2322 0.000865068 14.9551C0.000865065 14.6779 0.1104 14.4121 0.305374 14.2162L6.49015 8L0.30451 1.78382C0.109536 1.58786 0 1.32208 0 1.04494C0 0.767806 0.109536 0.502022 0.30451 0.306058C0.499484 0.110094 0.763926 0 1.03966 0C1.3154 0 1.57984 0.110094 1.77481 0.306058L1.77568 0.307796Z" />
                </svg>
              </div>
            </Link>
          </div>
        </motion.div>
      )}
    </>
  );
}
