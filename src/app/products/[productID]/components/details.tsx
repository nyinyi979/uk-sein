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
}) {
  return (
    <div className="flex flex-col gap-[38px] pb-8">
      <div className="flex flex-col gap-[18px]">
        <p>Size</p>
        <div className="flex flex-row gap-[23px]">
          {sizes.map((size) => (
            <div
              key={size}
              onClick={() => setActiveSize(size)}
              className={`w-fit py-4 px-6 rounded-[15px] ${activeSize === size ? "bg-grey-500 text-white" : "border border-grey-200"} cursor-pointer duration-300`}
            >
              {size}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[18px]">
        <p>Color</p>
        <div className="flex flex-row gap-[23px]">
          {colors.map((clr) => (
            <div
              key={clr}
              onClick={() => setActiveColor(clr)}
              className={`w-fit py-4 px-6 rounded-[15px] ${activeColor === clr ? "bg-grey-500 text-white" : "border border-grey-200"} cursor-pointer duration-300`}
            >
              {clr}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[18px]">
        <p>Material</p>
        <div className="flex flex-row gap-[23px]">
          {materials.map((mat) => (
            <div
              key={mat}
              onClick={() => setActiveMaterial(mat)}
              className={`w-fit py-4 px-6 rounded-[15px] ${activeMaterial === mat ? "bg-grey-500 text-white" : "border border-grey-200"} cursor-pointer duration-300`}
            >
              {mat}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
