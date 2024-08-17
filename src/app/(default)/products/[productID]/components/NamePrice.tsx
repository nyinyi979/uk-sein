import RatingStars from "@/components/template/Rating";

export default function ProductNamePrice({
  name,
  mm_name,
  rating,
  itemID,
  price,
}: {
  itemID: string;
  name: string;
  mm_name: string;
  rating: number;
  price: number;
}) {
  return (
    <div className="flex flex-col xl:gap-6 md:gap-4 gap-[18px] pb-12 border-b border-dotted border-grey-100">
      <div className="flex flex-col gap-1.5">
        <p className="font-sora font-semibold xl:text-[38px] text-2xl">
          {name}
        </p>
        <p className="text-grey-300 xl:text-base text-sm">
          {mm_name} <span className="px-2 text-grey-200">({itemID})</span>
        </p>
      </div>
      <RatingStars count={rating} />
      <p className="xl:text-5xl text-[32px] font-bold font-sora">
        {price.toLocaleString()} Ks
      </p>
      <p className="w-fit p-[18px] font-semibold bg-white-700 xl:text-base text-xs text-grey-400">
        🔔 This product will be arrived in 1st June, 2024.
      </p>
    </div>
  );
}
