export default function MaterialFilter({
  materials,
  material,
  toggleMaterial,
}: {
  materials: string[];
  material: Set<string>;
  toggleMaterial: (clr: string) => void;
}) {
  return (
    <div className="flex flex-col gap-[20px]">
      {materials.map((c) => (
        <div key={c} className="flex flex-row gap-[18px]">
          <input
            type="checkbox"
            name={c}
            id={c}
            checked={material.has(c)}
            onChange={() => toggleMaterial(c)}
          />
          <label htmlFor={c} className="font-semibold">
            {c}
          </label>
        </div>
      ))}
    </div>
  );
}
