import React from "react";
import { review } from "@/types/type";
import { EachReview, ReviewTitle } from "./ReviewComponents";
import { motion } from "framer-motion";

export default function ReviewPopUp({
  reviews,
  close,
  open,
}: {
  open: boolean;
  close: () => void;
  reviews: review[];
}) {
  React.useEffect(() => {
    if (open) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "scroll";
  }, [open]);
  return (
    <motion.div
      initial={{ opacity: 0, display: "none" }}
      animate={{ opacity: open ? 1 : 0, display: open ? "block" : "none" }}
      onClick={close}
      className="size-full fixed flex align-middle justify-items-center top-0 left-0 bg-popup-bg overscroll-y-contain z-[10000]"
    >
      <motion.div
        initial={{ translateY: -40, opacity: 0, display: "none" }}
        animate={{
          translateY: open ? 0 : 40,
          opacity: open ? 1 : 0,
          display: open ? "block" : "none",
        }}
        onClick={(e) => e.preventDefault()}
        className="xl:w-[1088px] md:w-[680px] sm:w-[330px] w-[93%] h-[70%] mt-[100px] overflow-scroll bg-white flex flex-col md:gap-8 gap-[18px] mx-auto md:p-8 p-6 rounded-[15px]"
      >
        <ReviewTitle>
          <button className="ml-auto" onClick={close}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.6484 21.9504C23.7598 22.0619 23.8483 22.1943 23.9086 22.3399C23.9689 22.4856 24 22.6417 24 22.7994C24 22.9571 23.9689 23.1132 23.9086 23.2588C23.8483 23.4045 23.7598 23.5369 23.6484 23.6484C23.5369 23.7598 23.4045 23.8483 23.2588 23.9086C23.1132 23.9689 22.9571 24 22.7994 24C22.6417 24 22.4856 23.9689 22.3399 23.9086C22.1943 23.8483 22.0619 23.7598 21.9504 23.6484L12 13.6964L2.04955 23.6484C1.8244 23.8735 1.51902 24 1.2006 24C0.882181 24 0.576804 23.8735 0.351648 23.6484C0.126491 23.4232 6.2768e-09 23.1178 0 22.7994C-6.2768e-09 22.481 0.126491 22.1756 0.351648 21.9504L10.3036 12L0.351648 2.04955C0.126491 1.8244 0 1.51902 0 1.2006C0 0.882181 0.126491 0.576804 0.351648 0.351648C0.576804 0.126491 0.882181 0 1.2006 0C1.51902 0 1.8244 0.126491 2.04955 0.351648L12 10.3036L21.9504 0.351648C22.1756 0.126491 22.481 -6.2768e-09 22.7994 0C23.1178 6.2768e-09 23.4232 0.126491 23.6484 0.351648C23.8735 0.576804 24 0.882181 24 1.2006C24 1.51902 23.8735 1.8244 23.6484 2.04955L13.6964 12L23.6484 21.9504Z"
                fill="#101010"
              />
            </svg>
          </button>
        </ReviewTitle>
        <div className="flex flex-col gap-[18px] pt-8 pb-8">
          {reviews.map((rv) => (
            <EachReview key={rv.id} rv={rv} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
