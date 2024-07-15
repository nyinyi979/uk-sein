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
          href={`/products/${rs}`}
          key={rs}
          className="flex flex-col gap-2.5"
        >
          <div className="md:size-[150px] size-40 overflow-hidden">
            <div className="md:w-[120px] md:h-[106px] w-[127px] h-[113px] relative mx-auto mt-5">
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
