import React from "react";

export default function ProductQuantity() {
  const [count, setCount] = React.useState(0);
  const incrementCounts = () => setCount(count + 1);
  const decrementCounts = () => setCount(count - 1);
  return (
    <div>
      <div className="flex flex-col gap-[18px]">
        <div className="h-[64px] flex flex-row gap-4">
          <button
            disabled={count === 0}
            onClick={decrementCounts}
            className="w-[68px] h-full p-2.5 rounded-[15px] bg-khaki-50 text-khaki-500 hover:bg-khaki-500 hover:text-white disabled:text-white disabled:bg-white-700 duration-300"
          >
            -
          </button>
          <p className="w-40 h-full py-4 bg-white-400 font-semibold text-center text-2xl rounded-[15px]">
            {count}
          </p>
          <button
            onClick={incrementCounts}
            className="w-[68px] h-full p-2.5 rounded-[15px] bg-khaki-50 text-khaki-500 hover:bg-khaki-500 hover:text-white disabled:text-white disabled:bg-white-700 duration-300"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
