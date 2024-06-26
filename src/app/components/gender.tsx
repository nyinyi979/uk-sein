import Image from "next/image";
import Arrow from "./images/arrow.svg";
export default function GenderInput({
  gender,
  setGender,
}: {
  gender: "" | "Male" | "Female" | "Other";
  setGender: (g: "" | "Male" | "Female" | "Other") => void;
}) {
  return (
    <div className="flex flex-col gap-[14px] relative">
      <label htmlFor="gender" className="font-semibold">
        Gender
      </label>
      <select
        name="gender"
        id="gender"
        className={`input ${gender == "" && "text-grey-100"}`}
        onChange={(e) =>
          setGender(e.target.value as "Male" | "Female" | "Other" | "")
        }
        defaultValue={gender}
      >
        <option value="" className="hidden">
          Select Gender
        </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <span className="absolute right-6 top-[70px]">
        <Image
          src={Arrow}
          alt="arrow"
          width={18}
          height={10}
          className="w-auto h-auto"
        />
      </span>
    </div>
  );
}
