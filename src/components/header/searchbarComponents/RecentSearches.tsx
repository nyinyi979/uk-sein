import Link from "next/link";
import { variant } from "@/types/type";
import { MEDIA_URL } from "@/utils/axios";

export default function RecentSearches({
  recentSearches,
}: {
  recentSearches: variant[];
}) {
  return (
    <div className="flex flex-row flex-wrap md:gap-8 gap-2">
      {recentSearches.map((rs, index) => (
        <Link
          href={`/products/${rs.product}`}
          key={rs.name + rs.code + index}
          className="flex flex-col gap-2.5 md:w-fit w-[160px]"
        >
          <div className="md:size-[150px] w-40 h-[150px] rounded-[15px] overflow-hidden">
            <div className="md:w-[120px] md:h-[106px] w-[127px] h-[113px] relative mx-auto mt-5">
              <img
                src={MEDIA_URL + rs.images[0] ? rs.images[0].image : ""}
                alt={rs.name}
                className="size-full object-cover shadow-product"
              />
            </div>
          </div>
          <p className="font-medium font-sora text-sm">{rs.name}</p>
        </Link>
      ))}
    </div>
  );
}
