export default function SizeFilter({
  sizes,
  size,
  toggleSize,
}: {
  sizes: string[];
  size: string;
  toggleSize: (size: string) => void;
}) {
  return (
    <div className="flex flex-col gap-[20px]">
      {sizes.map((s) => (
        <div key={s} className="flex flex-row gap-[18px]">
          <input
            type="checkbox"
            name={s}
            id={s}
            checked={s === size}
            onChange={() => toggleSize(s)}
          />
          <label htmlFor={s} className="font-semibold">
            {s}
          </label>
        </div>
      ))}
    </div>
  );
}
