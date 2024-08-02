import FloorMat from "./productShowCase/floorMat";
import Baskets from "./productShowCase/baskets";
import Chairs from "./productShowCase/chairs";
import Table from "./productShowCase/table";
import Bags from "./productShowCase/bags";
import Pillows from "./productShowCase/pillows";

export default function ProductShowCase() {
  return (
    <div className="flex flex-col w-full mx-auto xl:gap-8 gap-4 ssm:px-0 px-5 font-sora">
      <div className="h-fit grid ssm:grid-cols-2 grid-cols-1 xl:gap-[33px] gap-6">
        <FloorMat />
        <div className="flex flex-col xl:gap-[18px] gap-5">
          <Baskets />
          <Chairs />
        </div>
      </div>
      <div className="xl:h-[290px] md:h-[150px] ssm:h-[200px] flex ssm:flex-row flex-col xl:gap-8 gap-4">
        <Table />
        <Bags />
        <Pillows />
      </div>
    </div>
  );
}
