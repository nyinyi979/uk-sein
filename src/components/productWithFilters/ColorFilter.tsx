export default function ColorFilter({
  colors,
  color,
  toggleColor,
}: {
  colors: string[];
  color: string;
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
            checked={c === color}
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
