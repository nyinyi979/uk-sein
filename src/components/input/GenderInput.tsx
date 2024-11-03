import Image from "next/image";
import Arrow from "./images/arrow.svg";
import { useTranslations } from "next-intl";

export default function GenderInput({
  gender,
  setGender,
}: {
  gender: string;
  setGender: (g: string) => void;
}) {
  const t = useTranslations("input");
  return (
    <div className="flex flex-col gap-[14px] relative">
      <label htmlFor="gender" className="font-semibold">
        {t("gender")}
      </label>
      <select
        name="gender"
        id="gender"
        className={`input ${gender == "" && "text-grey-100"}`}
        onChange={(e) => setGender(e.target.value as string)}
        defaultValue={gender}
      >
        <option value="" className="hidden">
          {t("select-gender")}
        </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <span className="w-[18px] h-2.5 absolute right-6 top-[70px]">
        <Image
          src={Arrow}
          alt="arrow"
          fill
          sizes="100%"
          className="size-full object-cover"
        />
      </span>
    </div>
  );
}
