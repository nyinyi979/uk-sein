import { review } from "@/app/types/type";
import Image from "next/image";
import React from "react";

export function EachReview({ rv }: { rv: review }) {
  return (
    <div
      key={rv.id}
      className="flex flex-col gap-[14px] pb-6 border-b border-grey-200 border-dotted"
    >
      <div className="flex flex-row justify-between py-2.5">
        <div className="flex flex-row gap-3">
          <div className="size-[44px] rounded-full">
            <Image
              src={rv.user.imgURL}
              alt="user image"
              width={0}
              height={0}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="font-bold text-xl">{rv.user.username}</p>
            <p className="font-[500] text-sm text-grey-200">{} days ago</p>
          </div>
        </div>
        <div className="flex flex-row gap-1 align-middle">
          <Image
            src="/svg/filledStar.svg"
            alt="star filled"
            width={14}
            height={14}
            className=""
          />
          <p className="text-sm mt-4">
            {rv.rating} <span className="text-grey-200">/ 5</span>
          </p>
        </div>
      </div>
      <div className="font-normal text-lg text-justify">{rv.review}</div>
    </div>
  );
}
export function ReviewTitle({ children }: { children?: React.ReactNode }) {
  return (
    <p className="flex flex-row font-sora font-semibold text-[32px]">
      Our Customers' Reviews
      {children}
    </p>
  );
}
export function ReviewError() {
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
        Sorry! No review found yet! <br />
        Be the first one to review the product.
      </p>
    </div>
  );
}
