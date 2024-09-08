export default function CategoryFilter({
  categories,
  category,
  updateCategory,
}: {
  categories: string[];
  category: string;
  updateCategory: (cat: string) => void;
}) {
  return (
    <div className="flex flex-col gap-3">
      {categories.map((c, index) => (
        <button
          disabled={category == c}
          onClick={() => updateCategory(c)}
          key={c + index}
          className={`flex flex-row gap-3 px-2 py-2.5 rounded-[10px] disabled:bg-white-700 hover:bg-white-500 duration-300`}
        >
          <p className="font-semibold text-grey-500">{c}</p>
        </button>
      ))}
    </div>
  );
}
