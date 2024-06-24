import { Stars } from "@/app/_components/product";

export default function ProductRatings({
  rating,
  ratings,
}: {
  rating: number;
  ratings: { 1: number; 2: number; 3: number; 4: number; 5: number };
}) {
  const ratingCount =
    ratings[1] + ratings[2] + ratings[3] + ratings[4] + ratings[5];
  return (
    <div className="">
      <div className="w-full flex py-[42px] px-[72px] justify-between bg-white shadow-rating">
        <div className="text-center">
          <p className="font-sora font-bold text-[70px]">{rating}</p>
          <div className="flex flex-col gap-[18px]">
            <Stars count={rating} />
            Total ({ratingCount}) rating{ratingCount >= 1 && "s"}
          </div>
        </div>
        <div className="flex flex-col gap-4 p-[10px]">
          <Rating number={5} ratingCount={ratingCount} ratings={ratings[5]} />
          <Rating number={4} ratingCount={ratingCount} ratings={ratings[4]} />
          <Rating number={3} ratingCount={ratingCount} ratings={ratings[3]} />
          <Rating number={2} ratingCount={ratingCount} ratings={ratings[2]} />
          <Rating number={1} ratingCount={ratingCount} ratings={ratings[1]} />
        </div>
      </div>
    </div>
  );
}
function Rating({
  ratingCount,
  ratings,
  number,
}: {
  ratings: number;
  ratingCount: number;
  number: number;
}) {
  return (
    <div className="flex flex-row justify-between w-[530px] align-middle">
      <div className="flex flex-row gap-1">
        <img
          src="/svg/filledStar.svg"
          alt="filled star"
          width={20}
          height={20}
        />
        {number}
      </div>
      <div className="w-[380px] h-2 relative my-2 bg-khaki-50 rounded-lg z-0">
        <div
          style={{ width: `${(ratings / ratingCount) * 100}%` }}
          className="h-full absolute left-0 top-0 bg-khaki-500 rounded-lg z-10"
        ></div>
      </div>
      <div>
        {ratings} rating{ratings >= 1 && "s"}
      </div>
    </div>
  );
}
