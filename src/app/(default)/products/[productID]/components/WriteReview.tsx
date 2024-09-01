import React from "react";
import axios from "@/utils/axios";
import { useUserStore } from "@/store/clientData";
import { useTranslations } from "next-intl";
import { review } from "@/types/type";
import { showErrorAlert, showSuccessAlert } from "@/components/Alert";

export default function WriteReview({
  id,
  addReviews,
}: {
  id: number;
  addReviews: (review: review) => void;
}) {
  const { customer, token } = useUserStore((store)=>store);
  const [loading, setLoading] = React.useState(false);
  const [review, setReview] = React.useState({
    review: "",
    number_of_stars: "0",
  });
  const t = useTranslations("product");
  const onSubmit = () => {
    setLoading(true);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    console.log(customer);
    axios
      .post("product/review/", {
        data: {
          product: id,
          customer: customer.id,
          ...review,
        },
      })
      .then((data) => {
        showSuccessAlert({ text: "Successfully written a review!" });
        addReviews(data.data);
        setReview({ number_of_stars: "0", review: "" });
        setLoading(false);
      })
      .catch(() => {
        showErrorAlert({ text: "Something went wrong!" });
        setLoading(false);
      });
  };
  return (
    <div className="flex flex-col md:gap-6 gap-4">
      <div className="flex flex-col gap-3">
        <p className="font-semibold font-sora md:text-2xl text-lg">
          {t("write-your-review")}
        </p>
        <Stars
          count={Number(review.number_of_stars)}
          updateCount={(c) =>
            setReview({ ...review, number_of_stars: c.toString() })
          }
        />
        <textarea
          value={review.review}
          onChange={(e) => setReview({ ...review, review: e.target.value })}
          name="review"
          id="review"
          disabled={customer === null && token === null}
          placeholder="Write your thoughts..."
          className="w-full h-[150px] py-[28px] px-[32px] bg-white-400 rounded-[15px] resize-none"
        />
      </div>
      {loading ? (
        <div className="w-[100px] h-[50px] flex justify-center items-center rounded-[15px] bg-khaki-500 ml-auto">
          <span className="loader"></span>
        </div>
      ) : (
        <button
          onClick={onSubmit}
          disabled={review.number_of_stars === "0" && review.review === ""}
          className={`ml-auto py-[18px] md:px-8 px-6 disabled:bg-grey-50 bg-khaki-500 rounded-[15px] font-semibold text-lg text-white duration-300`}
        >
          {t("write-review")}
        </button>
      )}
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
    <div className="flex flex-row gap-[10px]">
      {arr.map((c) => (
        <svg
          onClick={() => updateCount(c + 1)}
          key={c}
          className={count > c ? "filled-star" : "star"}
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.2672 9.11016L16.0907 12.755L17.3418 18.1816C17.408 18.4653 17.3891 18.7622 17.2875 19.0352C17.1859 19.3082 17.006 19.5452 16.7705 19.7166C16.5349 19.8879 16.254 19.986 15.963 19.9986C15.6719 20.0112 15.3837 19.9377 15.1342 19.7874L10.4012 16.9166L5.67839 19.7874C5.42889 19.9377 5.1406 20.0112 4.84957 19.9986C4.55853 19.986 4.27767 19.8879 4.04208 19.7166C3.8065 19.5452 3.62666 19.3082 3.52503 19.0352C3.42341 18.7622 3.40452 18.4653 3.47072 18.1816L4.71995 12.7606L0.542596 9.11016C0.321652 8.91961 0.161886 8.66806 0.083334 8.38706C0.00478179 8.10607 0.01094 7.80814 0.101036 7.53063C0.191132 7.25312 0.361156 7.00839 0.589786 6.82713C0.818415 6.64586 1.09547 6.53614 1.38622 6.5117L6.89243 6.03479L9.04176 0.908257C9.154 0.639258 9.34332 0.409482 9.58589 0.247861C9.82845 0.08624 10.1134 0 10.4049 0C10.6964 0 10.9813 0.08624 11.2239 0.247861C11.4664 0.409482 11.6558 0.639258 11.768 0.908257L13.9238 6.03479L19.4282 6.5117C19.7189 6.53614 19.996 6.64586 20.2246 6.82713C20.4532 7.00839 20.6233 7.25312 20.7134 7.53063C20.8035 7.80814 20.8096 8.10607 20.7311 8.38706C20.6525 8.66806 20.4927 8.91961 20.2718 9.11016H20.2672Z" />
        </svg>
      ))}
    </div>
  );
}
