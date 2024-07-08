import EachCategory from "./eachCategory";

export default function Categories() {
  const categories = [
    "Baskets",
    "Chairs",
    "Table",
    "Mat",
    "Tray",
    "Holder",
    "Stand",
    "Bags",
    "Plants",
    "Vase",
    "Mirror",
    "Coaster",
    "Lamp",
    "Bed",
    "Cushion",
  ];
  return (
    <div className="flex flex-col xl:gap-[50px] md:gap-8 gap-6">
      <p className="font-sora font-bold xl:text-5xl md:text-2xl text-lg">
        Product Categories
      </p>
      <div className="w-full grid md:grid-cols-3 grid-cols-2 xl:gap-[33px] md:gap-[18px] gap-4">
        {categories.map((c) => (
          <EachCategory key={c} category={c} />
        ))}
      </div>
    </div>
  );
}
