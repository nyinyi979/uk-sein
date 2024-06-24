import React from "react";

export default function AboutUsCard({
  year,
  children,
  title,
  description,
}: {
  year: string;
  children: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="relative pb-[100px] pl-[60px] border-l border-khaki-500">
      <div className="py-[20px] px-10 bg-white rounded-[15px] shadow-aboutus">
        <div className="w-[1010px] flex flex-col gap-[18px]">
          <p className="font-sora font-bold text-4xl">{year}</p>
          {children}
          <p className="font-sora font-bold text-2xl">{title}</p>
          <p className="font-normal text-lg text-justify leading-[22.5px]">
            {description}
          </p>
        </div>
      </div>
      <div className="size-[25px] absolute -left-[13px] top-[20px] rounded-[5px] bg-khaki-500" />
    </div>
  );
}
