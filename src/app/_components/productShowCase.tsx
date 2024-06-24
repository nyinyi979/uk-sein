import Image from "next/image";
import FloorMat from "./productShowCase/floorMat";
import Baskets from "./productShowCase/baskets";
import Chairs from "./productShowCase/chairs";
import Table from "./productShowCase/table";
import Bags from "./productShowCase/bags";
import Pillows from "./productShowCase/pillows";

export default function ProductShowCase() {
  return (
    <div className="flex flex-col gap-[32px] font-sora">
      <div className="h-fit grid grid-cols-2 gap-[33px]">
        <FloorMat />
        <div className="flex flex-col gap-[18px]">
          <Baskets />
          <Chairs />
        </div>
      </div>
      <div className="flex flex-row gap-[33px] h-[290px]">
        <Table />
        <Bags />
        <Pillows />
      </div>
    </div>
  );
}
