import Image, { StaticImageData } from "next/image";
import React from "react";

export default function MediumCard({
  content,
  heading,
  children,
  image,
}: {
  heading: string;
  content: string;
  image?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className={`img-scale relative bottom-row-container bg-white-700`}>
      <div className="z-[2] w-[217px] flex flex-col xl:gap-8 gap-4">
        <div className="gap-1.5">
          <p className="font-sora font-bold text-[40px] text-khaki-500">
            {heading}
          </p>
          <p className="xl:font-[500] font-normal xl:text-sm text-xs leading-5">
            {content}
          </p>
        </div>
        {children}
      </div>
      {image}
    </div>
  );
}
