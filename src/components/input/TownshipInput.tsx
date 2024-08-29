import Image from "next/image";
import Arrow from "./images/arrow.svg";
import Label from "./Label";
import RedDot from "./RedDot";
import { useLocale, useTranslations } from "next-intl";
import { EngTownships, MyTownships } from "@/types/addresses";
import { state } from "@/types/type";

export default function CityInput({
  city,
  setCity,
  state,
  required = false,
}: {
  city: string;
  setCity: (n: string) => void;
  state: state | string;
  required?: boolean;
}) {
  const locale = useLocale();
  const t = useTranslations("input");
  const allTownships: string[] =
    locale === "en"
      ? EngTownships[state as state] || EngTownships[""]
      : MyTownships[state as state] || MyTownships[""];
  const valTownships = EngTownships[state as state];
  return (
    <div className="flex flex-col gap-[14px] relative">
      <Label htmlFor="township">
        {t("township")}
        {required && <RedDot />}
      </Label>
      <select
        name="township"
        id="township"
        className={`input ${city == "" && "text-grey-100"}`}
        onChange={(e) => setCity(e.target.value)}
        defaultValue={city}
      >
        <option defaultChecked value={""} className="hidden">
          {t("select-township")}
        </option>
        {allTownships.map((tw, ind) => (
          <option key={tw} value={valTownships[ind]}>
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
          className="size-full object-cover"
        />
      </span>
    </div>
  );
}
