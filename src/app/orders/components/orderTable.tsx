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
    <table cellPadding={24} className="bg-white shadow-orderTable">
      <thead className="border-b border-white-700">
        <tr>
          <td className="w-[148px] font-bold text-grey-200 text-left">
            ORDER ID
          </td>
          <td className="w-[148px] font-bold text-grey-200 text-center">
            DATE
          </td>
          <td className="w-[148px] font-bold text-grey-200 text-left">
            PAYMENT
          </td>
          <td className="w-[180px] font-bold text-grey-200 text-center">
            TOTAL
          </td>
          <td className="w-[70px] font-bold text-grey-200 text-right">
            PRODUCTS
          </td>
          <td className="w-[140px] font-bold text-grey-200 text-right">
            STATUS
          </td>
          <td className="w-[140px] font-bold text-grey-200 text-right">
            ACTIONS
          </td>
        </tr>
      </thead>
      <tbody>
        <AnimatePresence>
          {orders.map((order) => (
            <EachOrder key={order.orderID} order={order} orderStatus={status} />
          ))}
        </AnimatePresence>
      </tbody>
      <tfoot></tfoot>
    </table>
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
        <motion.tr
          animate={{ opacity: [0, 1] }}
          exit={{ opacity: [1, 0] }}
          layout
        >
          <td>#{orderID}</td>
          <td>{orderedDate}</td>
          <td>
            <div className="size-10 relative mx-3">
              <Image
                src={img}
                alt={paymentMethod}
                fill
                sizes="100%"
                className="w-full h-full bg-cover"
              />
            </div>
          </td>
          <td>{amount.toLocaleString()} MMK</td>
          <td className="text-center">({productCount})</td>
          <td>
            <p className={`${status}-order`}>{status}</p>
          </td>
          <td>
            <Link href={`/orders/${orderID}`} className="order-btn">
              <span>View Order</span>
              <svg
                width="9"
                height="16"
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.77568 0.307796L8.69474 7.26199C8.7915 7.3589 8.86827 7.47405 8.92065 7.60085C8.97303 7.72764 9 7.86358 9 8.00087C9 8.13816 8.97303 8.2741 8.92065 8.40089C8.86827 8.52769 8.7915 8.64284 8.69474 8.73975L1.77568 15.6939C1.5807 15.8899 1.31626 16 1.04053 16C0.76479 16 0.500348 15.8899 0.305374 15.6939C0.1104 15.498 0.000865071 15.2322 0.000865068 14.9551C0.000865065 14.6779 0.1104 14.4121 0.305374 14.2162L6.49015 8L0.30451 1.78382C0.109536 1.58786 0 1.32208 0 1.04494C0 0.767806 0.109536 0.502022 0.30451 0.306058C0.499484 0.110094 0.763926 0 1.03966 0C1.3154 0 1.57984 0.110094 1.77481 0.306058L1.77568 0.307796Z" />
              </svg>
            </Link>
          </td>
        </motion.tr>
      )}
    </>
  );
}
