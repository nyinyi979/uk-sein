import React from "react";
import Image from "next/image";
export default function ProductImages({
  category,
  imgURLs,
}: {
  category: string;
  imgURLs: string[];
}) {
  const [activeImg, setActiveImg] = React.useState(0);
  return (
    <div className="flex flex-col xl:gap-5 gap-[18px]">
      <div className="xl:size-[580px] size-[322px] relative bg-white-400">
        <div className="xl:w-[507px] xl:h-[450px] w-[275px] h-[245px] relative mx-auto xl:my-[65px] my-[40px] shadow-product">
          <Image
            src={imgURLs[activeImg]}
            alt="images"
            fill
            sizes="100%"
            className="w-full h-full bg-cover"
          />
        </div>
        <span className="absolute top-[18px] left-4 px-2 py-[10px] bg-red-50/30 rounded-[10px] text-red-500 text-center text-sm">
          {category}
        </span>
      </div>
      <div className="flex flex-row gap-[22px]">
        {imgURLs.map((url, ind) => (
          <img
            onClick={() => setActiveImg(ind)}
            src={url}
            alt={url}
            key={url}
            className={`xl:size-[80px] size-[60px] rounded-[10px] ${activeImg === ind ? "border-2 border-khaki-500" : "bg-[#00000033]"} object-cover object-center duration-300`}
          />
        ))}
      </div>
    </div>
  );
}
