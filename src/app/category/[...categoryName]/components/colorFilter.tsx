export default function ColorFilter({
  colors,
  color,
  toggleColor,
}: {
  colors: string[];
  color: Set<string>;
  toggleColor: (clr: string) => void;
}) {
  return (
    <div className="flex flex-col gap-[20px]">
      {colors.map((c) => (
        <div key={c} className="flex flex-row gap-[18px]">
          <input
            type="checkbox"
            name={c}
            id={c}
            checked={color.has(c)}
            onChange={() => toggleColor(c)}
          />
          <label htmlFor={c} className="font-semibold">
            {c}
          </label>
        </div>
      ))}
    </div>
  );
}
