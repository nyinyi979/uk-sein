import FloorMat from "./productShowCase/floorMat";
import Baskets from "./productShowCase/baskets";
import Chairs from "./productShowCase/chairs";
import Table from "./productShowCase/table";
import Bags from "./productShowCase/bags";
import Pillows from "./productShowCase/pillows";

export default function ProductShowCase() {
  return (
    <div className="flex flex-col xl:gap-[32px] gap-4 font-sora">
      <div className="h-fit grid grid-cols-2 xl:gap-[33px] gap-6">
        <FloorMat />
        <div className="flex flex-col xl:gap-[18px] gap-5">
          <Baskets />
          <Chairs />
        </div>
      </div>
      <div className="xl:h-[290px] flex flex-row xl:gap-[33px] gap-4">
        <Table />
        <Bags />
        <Pillows />
      </div>
    </div>
  );
}
