import React from "react";

export default function ProductQuantity({
  quantity,
  setQuantity,
  number_of_stock,
}: {
  quantity: number;
  setQuantity: (q: number) => void;
  number_of_stock: number;
}) {
  return (
    <div className="flex flex-col xl:gap-[18px] gap-[14px]">
      <p className="font-sora font-semibold xl:text-base text-sm">Quantity</p>
      <div className="h-[64px] flex flex-row gap-4">
        <button
          disabled={quantity === 0}
          onClick={() => setQuantity(quantity - 1)}
          className="sm:w-[68px] w-[20%] h-full p-2.5 rounded-[15px] bg-khaki-50 text-khaki-500 text-xl hover:bg-khaki-500 hover:text-white disabled:text-white disabled:bg-white-700 duration-300"
        >
          -
        </button>
        <p className="xl:w-40 md:w-[141px] sm:w-40 w-[40%] h-full py-4 bg-white-400 font-semibold text-center text-2xl rounded-[15px]">
          {quantity}
        </p>
        <button
          onClick={() => setQuantity(quantity + 1)}
          disabled={number_of_stock === quantity}
          className="sm:w-[68px] w-[20%] h-full p-2.5 rounded-[15px] bg-khaki-50 text-khaki-500 text-xl hover:bg-khaki-500 hover:text-white disabled:text-white disabled:bg-white-700 duration-300"
        >
          +
        </button>
      </div>
    </div>
  );
}
