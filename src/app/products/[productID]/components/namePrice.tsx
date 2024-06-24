import { Stars } from "@/app/_components/product";

export default function ProductNamePrice({
  engName,
  myName,
  rating,
  itemID,
  price,
}: {
  itemID: string;
  engName: string;
  myName: string;
  rating: number;
  price: number;
}) {
  return (
    <div className="flex flex-col gap-[24px] pb-12 border-b border-dotted border-grey-100">
      <div className="flex flex-col gap-1.5">
        <p className="font-sora font-semibold text-[38px]">{engName}</p>
        <p className="text-grey-300">
          {myName} <span className="px-2 text-grey-200">({itemID})</span>
        </p>
      </div>
      <Stars count={rating} />
      <p className="text-[48px] font-bold font-sora">
        {price.toLocaleString()} Ks
      </p>
      <p className="w-fit p-[18px] font-semibold text-grey-400 bg-white-700">
        🔔 This product will be arrived in 1st June, 2024.
      </p>
    </div>
  );
}
