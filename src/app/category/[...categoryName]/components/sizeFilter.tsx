export default function SizeFilter({
  sizes,
  size,
  toggleSize,
}: {
  sizes: string[];
  size: Set<string>;
  toggleSize: (clr: string) => void;
}) {
  return (
    <div className="flex flex-col gap-[20px]">
      {sizes.map((c) => (
        <div key={c} className="flex flex-row gap-[18px]">
          <input
            type="checkbox"
            name={c}
            id={c}
            checked={size.has(c)}
            onChange={() => toggleSize(c)}
          />
          <label htmlFor={c} className="font-semibold">
            {c}
          </label>
        </div>
      ))}
    </div>
  );
}
