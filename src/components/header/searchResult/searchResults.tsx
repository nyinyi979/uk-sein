import Link from "next/link";

export default function SearchResults({
  searchResults,
}: {
  searchResults: string[];
}) {
  return (
    <div className="flex flex-col gap-[18px]">
      {searchResults.map((sr) => (
        <Link
          href={`/category/${sr}`}
          key={sr}
          className="py-2.5 px-3 rounded-[5px] hover:bg-white-500 duration-300"
        >
          {sr}
        </Link>
      ))}
    </div>
  );
}
