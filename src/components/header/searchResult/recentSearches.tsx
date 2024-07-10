import Image from "next/image";
import Link from "next/link";

export default function RecentSearches({
  recentSearches,
}: {
  recentSearches: string[];
}) {
  return (
    <div className="flex flex-row gap-8 overflow-x-scroll">
      {recentSearches.map((rs) => (
        <Link
          href={`/category/${rs}`}
          key={rs}
          className="flex flex-col gap-2.5"
        >
          <div className="xl:size-[150px] overflow-hidden">
            <div className="xl:w-[120px] xl:h-[106px] relative mx-auto mt-5">
              <Image
                src={"/sampleDiscount.png"}
                alt="sample"
                sizes="100%"
                fill
                className="size-full object-cover shadow-product"
              />
            </div>
          </div>
          <p className="font-medium font-sora text-sm">{rs}</p>
        </Link>
      ))}
    </div>
  );
}
