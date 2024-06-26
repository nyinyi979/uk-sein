import React from "react";

export default function OrderDetailCard({
  heading,
  children,
}: {
  heading: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="w-[376px] h-[243px] flex flex-col gap-8 p-6 rounded-[5px] shadow-orderDetail">
      <p className="font-sora font-semibold text-2xl">{heading}</p>
      {children}
    </div>
  );
}
