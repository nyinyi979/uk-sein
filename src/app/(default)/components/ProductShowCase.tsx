import FloorMat from "./productShowCase/FloorMat";
import Baskets from "./productShowCase/Baskets";
import Chairs from "./productShowCase/Chairs";
import Table from "./productShowCase/Table";
import Bags from "./productShowCase/Bags";
import Pillows from "./productShowCase/Pillows";

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
