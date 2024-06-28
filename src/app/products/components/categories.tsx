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
    <div className="flex flex-col gap-8 xl:gap-[50px]">
      <p className="font-sora xl:text-5xl text-2xl font-bold">
        Product Categories
      </p>
      <div className="w-full grid grid-cols-3 gap-[33px]">
        {categories.map((c) => (
          <div
            key={c}
            className="xl:w-[375px] w-fit flex flex-row gap-[16px] py-5 px-[18px] bg-white-400 rounded-[18px] align-middle justify-center"
          >
            <div className="xl:size-[110px] size-[50px] my-5 relative">
              <Image
                src={"/sampleDiscount.png"}
                alt="img"
                fill
                sizes="100%"
                className="w-full h-full bg-cover"
              />
            </div>
            <div className="flex flex-col gap-2 align-middle justify-center">
              <p className="font-sora font-bold xl:text-[32px] text-xl">{c}</p>
              <Link
                className="text-khaki-500 flex flex-row gap-2 xl:text-base text-xs"
                href={`/category/${c}`}
              >
                <div className="xl:size-[16px] size-2.5 mt-1 relative">
                  <Image
                    src={Arrow}
                    alt="arrow"
                    fill
                    sizes="100%"
                    className="w-full h-full object-cover"
                  />
                </div>
                Explore now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
