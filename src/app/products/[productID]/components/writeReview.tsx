import React from "react";

export default function WriteReview() {
  const [count, setCount] = React.useState(0);
  const updateCount = (c: number) => setCount(c);
  const [review, setReview] = React.useState("");
  return (
    <div className="flex flex-col gap-6">
      <p className="font-semibold font-sora text-2xl">Write Your Review</p>
      <Stars count={count} updateCount={updateCount} />
      <div className="flex flex-col gap-6">
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          name="review"
          id="review"
          placeholder="Write your thoughts..."
          className="w-full h-[150px] py-[28px] px-[32px] bg-white-400 rounded-[15px] resize-none"
        />
        <button
          className={`ml-auto py-[18px] px-8 ${review == "" ? "bg-grey-50" : "bg-khaki-500"} rounded-[15px] font-semibold text-lg text-white duration-300`}
        >
          Write Review
        </button>
      </div>
    </div>
  );
}
export function Stars({
  count,
  updateCount,
}: {
  count: number;
  updateCount: (c: number) => void;
}) {
  const arr = [0, 1, 2, 3, 4];
  return (
    <div className="flex flex-row gap-[10px] my-3">
      {arr.map((c) =>
        count > c ? (
          <img
            src="/svg/filledStar.svg"
            alt="filled star"
            width={20}
            height={20}
            key={c}
            onClick={() => updateCount(c)}
          />
        ) : (
          <img
            src="/svg/star.svg"
            alt="star"
            width={20}
            height={20}
            key={c}
            onClick={() => updateCount(c + 1)}
          />
        ),
      )}
    </div>
  );
}
