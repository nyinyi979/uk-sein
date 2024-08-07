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
    <div className="flex flex-col gap-5">
      <div className="xl:size-[580px] md:size-[322px] sm:w-[340px] sm:h-[280px] w-full h-fit mx-auto relative bg-white-400">
        <div className="xl:w-[507px] xl:h-[450px] md:w-[275px] md:h-[245px] sm:w-[247px] w-[80%] h-[220px] relative mx-auto xl:my-[65px] my-[40px] shadow-product">
          <Image
            src={imgURLs[activeImg]}
            alt="images"
            fill
            sizes="100%"
            className="size-full object-cover"
          />
        </div>
        <span className="absolute top-[18px] left-4 px-2 py-2.5 bg-red-50 rounded-[10px] font-semibold text-red-500 text-center text-sm">
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
