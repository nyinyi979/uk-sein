import Link from "next/link";
import Image from "next/image";
import Arrow from "../images/linkArrow.svg";

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
      <p className="font-sora xl:text-5xl md:text-2xl text-lg font-bold">
        Product Categories
      </p>
      <div className="w-full grid md:grid-cols-3 grid-cols-2 md:gap-[33px] gap-4">
        {categories.map((c) => (
          <div
            key={c}
            className="xl:w-[375px] w-fit flex flex-row gap-[16px] md:py-5 md:px-[18px] p-[18px] bg-white-400 rounded-[18px] align-middle justify-center"
          >
            <div className="xl:size-[110px] md:size-[50px] size-10 my-5 relative">
              <Image
                src={"/sampleDiscount.png"}
                alt="img"
                fill
                sizes="100%"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 align-middle justify-center">
              <p className="font-sora md:font-bold font-semibold xl:text-[32px] md:text-xl">
                {c}
              </p>
              <Link
                className="text-khaki-500 flex flex-row gap-2 xl:text-base md:text-xs text-[10px]"
                href={`/category/${c}`}
              >
                <div className="xl:size-[16px] size-2.5 md:block hidden mt-1 relative">
                  <Image
                    src={Arrow}
                    alt="arrow"
                    fill
                    sizes="100%"
                    className="w-full h-full object-cover"
                  />
                </div>
                Explore now
                <div className="size-2 md:hidden mt-1 relative">
                  <Image
                    src={Arrow}
                    alt="arrow"
                    fill
                    sizes="100%"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
