"use client";

import { orderStatus } from "@/app/types/type";
import React from "react";

export default function OrderHeader({
  status,
  updateStatus,
}: {
  status: orderStatus;
  updateStatus: (status: orderStatus) => void;
}) {
  const status_arr = React.useRef<orderStatus[]>([
    "",
    "Confirmed",
    "Pending",
    "Reject",
  ]);
  const status_txts = React.useRef([
    "All Orders",
    "In-Progress Orders",
    "Rejected Orders",
    "Successful Orders",
  ]);
  return (
    <div className="mx-auto font-bold xl:text-base text-sm">
      {status_arr.current.map((s, i) => (
        <button
          key={s}
          disabled={status === s}
          onClick={() => updateStatus(s)}
          className="xl:py-5 py-4 xl:px-[72px] px-[20px] disabled:border-b-[1.5px] disabled:border-khaki-500 disabled:text-khaki-500 hover:bg-khaki-50 duration-300"
        >
          {status_txts.current[i]}
        </button>
      ))}
    </div>
  );
}
