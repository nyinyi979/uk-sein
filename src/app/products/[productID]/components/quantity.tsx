import React from "react";

export default function ProductQuantity({
  count,
  decrementCounts,
  incrementCounts,
}: {
  count: number;
  incrementCounts: () => void;
  decrementCounts: () => void;
}) {
  return (
    <div className="flex flex-col xl:gap-[18px] gap-[14px]">
      <p className="font-sora font-semibold xl:text-base text-sm">Quantity</p>
      <div className="h-[64px] flex flex-row gap-4">
        <button
          disabled={count === 0}
          onClick={decrementCounts}
          className="w-[68px] h-full p-2.5 rounded-[15px] bg-khaki-50 text-khaki-500 text-xl hover:bg-khaki-500 hover:text-white disabled:text-white disabled:bg-white-700 duration-300"
        >
          -
        </button>
        <p className="xl:w-40 w-[141px] h-full py-4 bg-white-400 font-semibold text-center text-2xl rounded-[15px]">
          {count}
        </p>
        <button
          onClick={incrementCounts}
          className="w-[68px] h-full p-2.5 rounded-[15px] bg-khaki-50 text-khaki-500 text-xl hover:bg-khaki-500 hover:text-white disabled:text-white disabled:bg-white-700 duration-300"
        >
          +
        </button>
      </div>
    </div>
  );
}
