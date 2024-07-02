import Image from "next/image";
import Arrow from "./images/arrow.svg";
import Label from "./label";

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
      <Label htmlFor="township">Township</Label>
      <select
        name="township"
        id="township"
        className={`input ${township == "" && "text-grey-100"}`}
        onChange={(e) => setTownship(e.target.value)}
        defaultValue={township}
      >
        <option defaultChecked value={""} className="hidden">
          Select Township
        </option>
        {allTownships.map((tw) => (
          <option key={tw} value={tw}>
            {tw}
          </option>
        ))}
      </select>
      <span className="w-[18px] h-2.5 absolute right-6 top-[70px]">
        <Image
          src={Arrow}
          alt="arrow"
          fill
          sizes="100%"
          className="w-full h-full object-cover"
        />
      </span>
    </div>
  );
}
