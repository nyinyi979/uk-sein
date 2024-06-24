import React from "react";
import { motion } from "framer-motion";
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
      <div className="product-img size-[580px] relative">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: [activeImg * 0, 1] }}
          src={imgURLs[activeImg]}
          alt=""
          className="w-[507px] h-[450px] mx-auto py-8"
        />
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
            className={`size-[80px] rounded-[10px] ${activeImg === ind ? "border-2 border-khaki-500" : "bg-[#00000033]"} object-cover object-center duration-300`}
          />
        ))}
      </div>
    </div>
  );
}
