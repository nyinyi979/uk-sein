"use client";
import React from "react";
import useWindowSize from "@/components/hooks/useWindowSize";
import { orderStatus } from "@/types/type";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function OrderHeader({
  status,
  updateStatus,
}: {
  status: orderStatus;
  updateStatus: (status: orderStatus) => void;
}) {
  const t = useTranslations("orders");
  const status_arr = React.useRef<orderStatus[]>([
    "",
    "Confirmed",
    "Pending",
    "Reject",
  ]);
  const status_txts = [
    t("all-orders"),
    t("in-progress-orders"),
    t("rejected-orders"),
    t("successful-orders"),
  ];
  const [hidden, setHidden] = React.useState(true);
  const size = useWindowSize();

  React.useEffect(() => {
    if (size[0] > 767) setHidden(false);
    else setHidden(true);
  }, [size]);

  const changeStatus = (status: orderStatus) => {
    updateStatus(status);
    if (size[0] > 767) setHidden(false);
    else setHidden(true);
  };
  const txt =
    status_txts[status_arr.current.findIndex((val) => val === status)];
  return (
    <div className="w-full md:flex relative md:mx-auto md:font-bold font-semibold xl:text-base text-sm">
      <button
        onClick={() => setHidden(!hidden)}
        className="flex flex-row md:hidden gap-4 py-[14px] px-[18px] rounded-lg bg-white-700 font-semibold text-sm hover:bg-grey-50 duration-300"
      >
        <span>{txt}</span>
        <svg
          viewBox="0 0 18 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[14px] h-2 mt-1.5"
        >
          <path
            d="M17.7632 1.42322L9.68281 9.75562C9.60776 9.83309 9.51864 9.89455 9.42055 9.93649C9.32245 9.97842 9.21731 10 9.11112 10C9.00493 10 8.89978 9.97842 8.80169 9.93649C8.70359 9.89455 8.61447 9.83309 8.53943 9.75562L0.45903 1.42322C0.307409 1.26687 0.222229 1.05482 0.222229 0.833703C0.222229 0.612592 0.307409 0.400535 0.45903 0.244186C0.610651 0.0878359 0.816294 0 1.03072 0C1.24514 0 1.45079 0.0878359 1.60241 0.244186L9.11112 7.98811L16.6198 0.244186C16.6949 0.166769 16.784 0.105359 16.8821 0.0634615C16.9802 0.021564 17.0853 0 17.1915 0C17.2977 0 17.4028 0.021564 17.5009 0.0634615C17.599 0.105359 17.6881 0.166769 17.7632 0.244186C17.8383 0.321602 17.8978 0.413509 17.9385 0.514659C17.9791 0.615808 18 0.72422 18 0.833703C18 0.943187 17.9791 1.0516 17.9385 1.15275C17.8978 1.2539 17.8383 1.3458 17.7632 1.42322Z"
            fill="#101010"
          />
        </svg>
      </button>
      <AnimatePresence>
        {!hidden && (
          <motion.div
            animate={{ translateY: [20, 0], opacity: [0, 1] }}
            exit={{
              translateY: 20,
              opacity: 0,
              transition: {
                stiffness: 19.75,
                mass: 1,
                damping: 6.67,
              },
            }}
            transition={{
              stiffness: 19.75,
              mass: 1,
              damping: 6.67,
            }}
            className="w-[180px] md:w-full md:relative absolute left-0 md:mt-0 mt-[10%] flex md:grid md:grid-cols-4 flex-col mx-auto bg-white md:rounded-none rounded-xl overflow-hidden md:z-[1] z-[20]"
          >
            {status_arr.current.map((s, i) => (
              <button
                key={s}
                disabled={status === s}
                onClick={() => changeStatus(s)}
                className="w-full xl:py-5 md:py-4 xl:px-[72px] md:px-[10px] p-[18px] md:text-center text-left md:disabled:border-b-[1.5px] md:enabled:border-b-[1px] md:enabled:border-grey-100 md:disabled:border-khaki-500 md:disabled:text-khaki-500 disabled:bg-grey-50 md:hover:bg-khaki-50 hover:bg-grey-50 duration-300"
              >
                {status_txts[i]}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
