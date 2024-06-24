export default function TownshipInput({
  allTownships,
  township,
  setTownship,
}: {
  allTownships: string[];
  township: string;
  setTownship: (n: string) => void;
}) {
  return (
    <div className="flex flex-col gap-[14px] relative">
      <label htmlFor="township" className="font-semibold">
        Township
      </label>
      <select
        name="township"
        id="township"
        className={`input ${township == "" && "text-grey-100"}`}
        onChange={(e) => setTownship(e.target.value)}
      >
        <option defaultChecked value={""}>
          Select Township
        </option>
        {allTownships.map((tw) => (
          <option key={tw} value={tw}>
            {tw}
          </option>
        ))}
      </select>
    </div>
  );
}
