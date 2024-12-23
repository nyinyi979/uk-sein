import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Toggle({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <div
      className={`flex flex-col align-middle justify-center gap-[18px] p-[18px] rounded-[10px] border-[.5px] ${expanded ? "border-grey-300" : "border-grey-50"} hover:border-grey-300 duration-300`}
    >
      <p
        className="flex flex-row font-semibold cursor-pointer select-none"
        onClick={() => setExpanded(!expanded)}
      >
        {name}
        <span
          className={`ml-auto mt-1.5 ${expanded ? "scale-y-[-1] -translate-y-1.5" : "-translate-y-0"} duration-300`}
        >
          <svg
            width="18"
            height="10"
            viewBox="0 0 18 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.7632 1.42322L9.68281 9.75562C9.60776 9.83309 9.51864 9.89455 9.42055 9.93649C9.32245 9.97842 9.21731 10 9.11112 10C9.00493 10 8.89978 9.97842 8.80169 9.93649C8.70359 9.89455 8.61447 9.83309 8.53943 9.75562L0.45903 1.42322C0.307409 1.26687 0.222229 1.05482 0.222229 0.833703C0.222229 0.612592 0.307409 0.400535 0.45903 0.244186C0.610651 0.0878359 0.816294 0 1.03072 0C1.24514 0 1.45079 0.0878359 1.60241 0.244186L9.11112 7.98811L16.6198 0.244186C16.6949 0.166769 16.784 0.105359 16.8821 0.0634615C16.9802 0.021564 17.0853 0 17.1915 0C17.2977 0 17.4028 0.021564 17.5009 0.0634615C17.599 0.105359 17.6881 0.166769 17.7632 0.244186C17.8383 0.321602 17.8978 0.413509 17.9385 0.514659C17.9791 0.615808 18 0.72422 18 0.833703C18 0.943187 17.9791 1.0516 17.9385 1.15275C17.8978 1.2539 17.8383 1.3458 17.7632 1.42322Z"
              fill="#101010"
            />
          </svg>
        </span>
      </p>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ maxHeight: 0 }}
            animate={{ maxHeight: 500 }}
            // cause lags just a bit when adding the following line
            exit={{ maxHeight: 0 }}
            transition={{
              duration: 0.2,
              type: "just",
            }}
            className="h-fit overflow-y-auto"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
