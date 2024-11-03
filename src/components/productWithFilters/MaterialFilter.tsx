export default function MaterialFilter({
  materials,
  material,
  toggleMaterial,
}: {
  materials: string[];
  material: string;
  toggleMaterial: (mat: string) => void;
}) {
  return (
    <div className="flex flex-col gap-[20px]">
      {materials.map((m) => (
        <div key={m} className="flex flex-row gap-[18px]">
          <input
            type="checkbox"
            name={m}
            id={m}
            checked={m === material}
            onChange={() => toggleMaterial(m)}
          />
          <label htmlFor={m} className="font-semibold">
            {m}
          </label>
        </div>
      ))}
    </div>
  );
}
