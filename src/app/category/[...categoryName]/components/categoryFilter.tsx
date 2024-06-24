import Link from "next/link";

export default function CategoryFilter({
  categories,
  category,
  toggleCategory,
}: {
  categories: string[];
  category: Set<string>;
  toggleCategory: (cat: string) => void;
}) {
  return (
    <div>
      {categories.map((c) => (
        <Link
          href={`/category/${c}`}
          className={`px-2 py-[10px] rounded-[10px] `}
        >
          {c}
        </Link>
      ))}
    </div>
  );
}
