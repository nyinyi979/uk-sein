import ProductQuantity from "./quantity";

export default function ProductDetail({
  sizes,
  colors,
  materials,
  activeColor,
  activeMaterial,
  activeSize,
  setActiveColor,
  setActiveMaterial,
  setActiveSize,
  count,
  decrementCounts,
  incrementCounts,
}: {
  sizes: string[];
  colors: string[];
  materials: string[];
  activeSize: string;
  activeColor: string;
  activeMaterial: string;
  setActiveSize: (size: string) => void;
  setActiveColor: (clr: string) => void;
  setActiveMaterial: (mat: string) => void;
  count: number;
  incrementCounts: () => void;
  decrementCounts: () => void;
}) {
  return (
    <div className="flex flex-col xl:gap-[38px] gap-6 xl:pb-8 pb-6">
      <div className="flex flex-col xl:gap-[18px] gap-[14px]">
        <p className="font-sora font-semibold xl:text-base text-sm">Size</p>
        <div className="flex flex-row xl:gap-[23px] gap-[16px]">
          {sizes.map((size) => (
            <div
              key={size}
              onClick={() => setActiveSize(size)}
              className={`w-fit py-4 px-6 rounded-[15px] ${activeSize === size ? "bg-grey-500 text-white" : "border border-grey-200"} xl:text-base text-xs cursor-pointer duration-300`}
            >
              {size}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col xl:gap-[18px] gap-[14px]">
        <p className="font-sora font-semibold xl:text-base text-sm">Color</p>
        <div className="flex flex-row xl:gap-[23px] gap-[16px]">
          {colors.map((clr) => (
            <div
              key={clr}
              onClick={() => setActiveColor(clr)}
              className={`w-fit py-4 px-6 rounded-[15px] ${activeColor === clr ? "bg-grey-500 text-white" : "border border-grey-200"} xl:text-base text-xs cursor-pointer duration-300`}
            >
              {clr}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col xl:gap-[18px] gap-[14px]">
        <p className="font-sora font-semibold xl:text-base text-sm">Material</p>
        <div className="flex flex-row xl:gap-[23px] gap-[16px]">
          {materials.map((mat) => (
            <div
              key={mat}
              onClick={() => setActiveMaterial(mat)}
              className={`w-fit py-4 px-6 rounded-[15px] ${activeMaterial === mat ? "bg-grey-500 text-white" : "border border-grey-200"} xl:text-base text-xs cursor-pointer duration-300`}
            >
              {mat}
            </div>
          ))}
        </div>
      </div>
      <ProductQuantity
        count={count}
        incrementCounts={incrementCounts}
        decrementCounts={decrementCounts}
      />
    </div>
  );
}
