import Link from "next/link";
import Arrow from "../images/linkArrow.svg";
import Image from "next/image";
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
    <div className="grid grid-cols-3 gap-[38px] flex-wrap">
      {categories.map((c) => (
        <div
          key={c}
          className="flex flex-row gap-[18px] py-5 px-[18px] w-[375px] bg-white-400 rounded-[18px] align-middle justify-center"
        >
          <img src={"/sampleProduct.png"} className="size-[110px] bg-cover" />
          <div className="flex flex-col align-middle justify-center">
            <p className="font-sora text-[32px]">{c}</p>
            <Link
              className="text-khaki-500 flex flex-row gap-2"
              href={`/category/${c}`}
            >
              <Image src={Arrow} alt="arrow" width={16} height={16} />
              Explore now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
