import Image from "next/image";

export default function CategoryFilter({
  categories,
  category,
  updateCategory,
}: {
  categories: { name: string; img_url: string }[];
  category: string;
  updateCategory: (cat: string) => void;
}) {
  return (
    <div className="flex flex-col gap-3">
      {categories.map((c) => (
        <button
          disabled={category === c.name}
          onClick={() => updateCategory(c.name)}
          key={c.name}
          className={`flex flex-row gap-3 px-2 py-2.5 rounded-[10px] ${category === c.name ? "bg-white-700" : "hover:bg-white-500 duration-300"}`}
        >
          <div className="size-8 relative">
            <Image
              src={c.img_url}
              alt={c.name}
              fill
              sizes="100%"
              className="size-full object-cover"
            />
          </div>
          <p className="font-semibold text-grey-500">{c.name}</p>
        </button>
      ))}
    </div>
  );
}
