import RatingStars from "@/components/template/Rating";

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
    <div className="w-full flex md:flex-row flex-col xl:justify-between xl:gap-0 gap-[60px] xl:py-[42px] py-6 xl:px-[72px] md:px-[50px] px-2 rounded-[15px] bg-white shadow-rating">
      <div className="text-center">
        <p className="font-sora font-bold xl:text-[70px] text-[56px]">
          {rating}
        </p>
        <div className="flex flex-col gap-[18px]">
          <div className="w-fit mx-auto">
            <RatingStars count={Math.floor(rating)} />
          </div>
          Total ({ratingCount}) rating{ratingCount >= 1 && "s"}
        </div>
      </div>
      <div className="w-fit flex flex-col gap-4 md:ml-auto md:mr-0 mx-auto p-2.5">
        <Rating number={5} ratingCount={ratingCount} ratings={ratings[5]} />
        <Rating number={4} ratingCount={ratingCount} ratings={ratings[4]} />
        <Rating number={3} ratingCount={ratingCount} ratings={ratings[3]} />
        <Rating number={2} ratingCount={ratingCount} ratings={ratings[2]} />
        <Rating number={1} ratingCount={ratingCount} ratings={ratings[1]} />
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
    <div className="xl:w-[530px] md:w-[348px] w-[320px] sm:flex hidden flex-row justify-between align-middle">
      <div className="flex flex-row gap-1">
        <svg
          className="filled-star"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.2672 9.11016L16.0907 12.755L17.3418 18.1816C17.408 18.4653 17.3891 18.7622 17.2875 19.0352C17.1859 19.3082 17.006 19.5452 16.7705 19.7166C16.5349 19.8879 16.254 19.986 15.963 19.9986C15.6719 20.0112 15.3837 19.9377 15.1342 19.7874L10.4012 16.9166L5.67839 19.7874C5.42889 19.9377 5.1406 20.0112 4.84957 19.9986C4.55853 19.986 4.27767 19.8879 4.04208 19.7166C3.8065 19.5452 3.62666 19.3082 3.52503 19.0352C3.42341 18.7622 3.40452 18.4653 3.47072 18.1816L4.71995 12.7606L0.542596 9.11016C0.321652 8.91961 0.161886 8.66806 0.083334 8.38706C0.00478179 8.10607 0.01094 7.80814 0.101036 7.53063C0.191132 7.25312 0.361156 7.00839 0.589786 6.82713C0.818415 6.64586 1.09547 6.53614 1.38622 6.5117L6.89243 6.03479L9.04176 0.908257C9.154 0.639258 9.34332 0.409482 9.58589 0.247861C9.82845 0.08624 10.1134 0 10.4049 0C10.6964 0 10.9813 0.08624 11.2239 0.247861C11.4664 0.409482 11.6558 0.639258 11.768 0.908257L13.9238 6.03479L19.4282 6.5117C19.7189 6.53614 19.996 6.64586 20.2246 6.82713C20.4532 7.00839 20.6233 7.25312 20.7134 7.53063C20.8035 7.80814 20.8096 8.10607 20.7311 8.38706C20.6525 8.66806 20.4927 8.91961 20.2718 9.11016H20.2672Z" />
        </svg>
        <p className="font-semibold text-lg">{number}</p>
      </div>
      <div className="xl:w-[380px] w-[200px] h-2 relative my-2 bg-khaki-50 rounded-lg z-0">
        <div
          style={{ width: `${(ratings / ratingCount) * 100}%` }}
          className="h-full absolute left-0 top-0 bg-khaki-500 rounded-lg z-10"
        ></div>
      </div>
      <div>
        <p className="font-medium text-lg">
          {ratings} rating{ratings >= 1 && "s"}
        </p>
      </div>
    </div>
  );
}
