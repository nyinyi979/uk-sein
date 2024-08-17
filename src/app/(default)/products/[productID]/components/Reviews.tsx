import React from "react";
import WriteReview from "./WriteReview";
import ReviewPopUp from "./ReviewsPopup";
import { review } from "@/types/type";
import { EachReview, ReviewError, ReviewTitle } from "./ReviewComponents";
import { useTranslations } from "next-intl";

export default function ProductReviews({ reviews }: { reviews: review[] }) {
  const [open, setOpen] = React.useState(false);
  const closePopUp = () => {
    setOpen(false);
  };
  const openPopUp = () => {
    setOpen(true);
  };
  const t = useTranslations("product");
  return (
    <div className="flex flex-col xl:gap-8 gap-6 pb-8">
      <div className="flex flex-row justify-between">
        <ReviewTitle />
        {reviews.length > 3 && (
          <>
            <ReviewPopUp close={closePopUp} open={open} reviews={reviews} />
            <button
              className="md:flex hidden flex-row gap-2 align-middle p-2 text-khaki-500"
              onClick={openPopUp}
            >
              {t("see-all-review")}
              <svg
                className="mt-1"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 0.888861V12.4441C16 12.6798 15.9064 12.9059 15.7397 13.0726C15.573 13.2393 15.3469 13.3329 15.1111 13.3329C14.8754 13.3329 14.6493 13.2393 14.4826 13.0726C14.3159 12.9059 14.2223 12.6798 14.2223 12.4441V3.03435L1.51823 15.7395C1.35144 15.9063 1.12523 16 0.889356 16C0.653484 16 0.427273 15.9063 0.260486 15.7395C0.0936996 15.5727 0 15.3465 0 15.1106C0 14.8748 0.0936996 14.6486 0.260486 14.4818L12.9656 1.77772H3.55594C3.3202 1.77772 3.09411 1.68407 2.92742 1.51738C2.76073 1.35069 2.66708 1.1246 2.66708 0.888861C2.66708 0.653121 2.76073 0.427035 2.92742 0.260342C3.09411 0.0936478 3.3202 0 3.55594 0H15.1111C15.3469 0 15.573 0.0936478 15.7397 0.260342C15.9064 0.427035 16 0.653121 16 0.888861Z"
                  fill="#DE9D62"
                />
              </svg>
            </button>
          </>
        )}
        {reviews.length === 0 && <ReviewError />}
      </div>
      <div className="flex flex-col gap-[18px]">
        {reviews.length > 3 ? (
          <>
            <EachReview rv={reviews[0]} />
            <EachReview rv={reviews[1]} />
            <EachReview rv={reviews[2]} />
          </>
        ) : (
          reviews.map((rv) => <EachReview key={rv.id} rv={rv} />)
        )}
        {
          <>
            <button
              className="md:hidden flex flex-row gap-2 align-middle p-2 text-khaki-500"
              onClick={openPopUp}
            >
              See All Reviews
              <svg
                className="mt-1"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 0.888861V12.4441C16 12.6798 15.9064 12.9059 15.7397 13.0726C15.573 13.2393 15.3469 13.3329 15.1111 13.3329C14.8754 13.3329 14.6493 13.2393 14.4826 13.0726C14.3159 12.9059 14.2223 12.6798 14.2223 12.4441V3.03435L1.51823 15.7395C1.35144 15.9063 1.12523 16 0.889356 16C0.653484 16 0.427273 15.9063 0.260486 15.7395C0.0936996 15.5727 0 15.3465 0 15.1106C0 14.8748 0.0936996 14.6486 0.260486 14.4818L12.9656 1.77772H3.55594C3.3202 1.77772 3.09411 1.68407 2.92742 1.51738C2.76073 1.35069 2.66708 1.1246 2.66708 0.888861C2.66708 0.653121 2.76073 0.427035 2.92742 0.260342C3.09411 0.0936478 3.3202 0 3.55594 0H15.1111C15.3469 0 15.573 0.0936478 15.7397 0.260342C15.9064 0.427035 16 0.653121 16 0.888861Z"
                  fill="#DE9D62"
                />
              </svg>
            </button>
          </>
        }
      </div>
      <WriteReview />
    </div>
  );
}
