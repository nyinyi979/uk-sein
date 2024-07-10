import Image from "next/image";
import React from "react";
import { review } from "@/types/type";
import { useTranslations } from "next-intl";

export function EachReview({ rv }: { rv: review }) {
  return (
    <div
      key={rv.id}
      className="flex flex-col gap-[14px] pb-6 border-b border-grey-200 border-dotted"
    >
      <div className="flex flex-row justify-between py-2.5">
        <div className="flex flex-row gap-3">
          <div className="md:size-[44px] size-[38px] rounded-full relative">
            <Image
              src={rv.user.imgURL}
              alt="user image"
              fill
              sizes="100%"
              className="size-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="font-bold md:text-xl">{rv.user.username}</p>
            <p className="font-medium md:text-sm text-[10px] text-grey-200">
              {} days ago
            </p>
          </div>
        </div>
        <div className="flex flex-row xl:gap-1 gap-2 align-middle">
          <div className="filled-star xl:size-[20px] xl:mt-4 mt-1 size-[14px]">
            <svg
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.2672 9.11016L16.0907 12.755L17.3418 18.1816C17.408 18.4653 17.3891 18.7622 17.2875 19.0352C17.1859 19.3082 17.006 19.5452 16.7705 19.7166C16.5349 19.8879 16.254 19.986 15.963 19.9986C15.6719 20.0112 15.3837 19.9377 15.1342 19.7874L10.4012 16.9166L5.67839 19.7874C5.42889 19.9377 5.1406 20.0112 4.84957 19.9986C4.55853 19.986 4.27767 19.8879 4.04208 19.7166C3.8065 19.5452 3.62666 19.3082 3.52503 19.0352C3.42341 18.7622 3.40452 18.4653 3.47072 18.1816L4.71995 12.7606L0.542596 9.11016C0.321652 8.91961 0.161886 8.66806 0.083334 8.38706C0.00478179 8.10607 0.01094 7.80814 0.101036 7.53063C0.191132 7.25312 0.361156 7.00839 0.589786 6.82713C0.818415 6.64586 1.09547 6.53614 1.38622 6.5117L6.89243 6.03479L9.04176 0.908257C9.154 0.639258 9.34332 0.409482 9.58589 0.247861C9.82845 0.08624 10.1134 0 10.4049 0C10.6964 0 10.9813 0.08624 11.2239 0.247861C11.4664 0.409482 11.6558 0.639258 11.768 0.908257L13.9238 6.03479L19.4282 6.5117C19.7189 6.53614 19.996 6.64586 20.2246 6.82713C20.4532 7.00839 20.6233 7.25312 20.7134 7.53063C20.8035 7.80814 20.8096 8.10607 20.7311 8.38706C20.6525 8.66806 20.4927 8.91961 20.2718 9.11016H20.2672Z" />
            </svg>
          </div>
          <p className="text-sm xl:mt-4">
            {rv.rating} <span className="text-grey-200">/ 5</span>
          </p>
        </div>
      </div>
      <div className="font-normal xl:text-lg md:text-base text-sm text-justify xl:leading-[32px] md:leading-5 leading-[17.5px]">
        {rv.review}
      </div>
    </div>
  );
}
export function ReviewTitle({ children }: { children?: React.ReactNode }) {
  const t = useTranslations("product");
  return (
    <p className="flex flex-row font-sora font-semibold xl:text-[32px] md:text-2xl text-lg">
      {t("our-customer-reviews")}
      {children}
    </p>
  );
}
export function ReviewError() {
  const t = useTranslations("product");
  return (
    <div className="py-[120px] text-center">
      <Image
        src="/images/error.png"
        alt="error"
        width={120}
        height={120}
        className="w-auto h-auto"
      />
      <p>
        {t("sorry-no-reivew")} <br /> {t("be-the-first")}
      </p>
    </div>
  );
}
