import { category } from "@/app/(default)/products/components/EachCategory";
import { MEDIA_URL } from "@/utils/axios";
import React from "react";

export default function CategoryFilter({
  categories,
  category,
  updateCategory,
}: {
  categories: category[];
  category: string;
  updateCategory: (cat: category) => void;
}) {
  return (
    <div className="flex flex-col gap-3">
      {categories.map((c) => (
        <button
          onClick={() => updateCategory(c)}
          key={c.id}
          className={`flex flex-row gap-3 px-2 py-2.5 rounded-[10px] ${Number(category)===Number(c.id)&&'bg-white-700'} hover:bg-white-500 duration-300`}
        >
          <div className="size-8 relative">
            <img
              src={MEDIA_URL + c.image}
              alt={c.name}
              className="size-full object-cover"
            />
          </div>
          <p className="font-semibold text-grey-500">{c.name}</p>
        </button>
      ))}
    </div>
  );
}
