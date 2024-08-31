import Image from "next/image";
import Arrow from "./images/arrow.svg";
import Label from "./Label";
import RedDot from "./RedDot";
import { useLocale, useTranslations } from "next-intl";
import { cities, states } from "@/types/address";

export default function CityInput({
  city,
  setCity,
  state,
  required = false,
}: {
  city: string;
  setCity: (n: string) => void;
  state: states;
  required?: boolean;
}) {
  const locale = useLocale();
  const t = useTranslations("input");
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
        value={city}
      >
        <option defaultChecked value={""} className="hidden">
          {t("select-township")}
        </option>
        {cities[state].map((c, ind) => (
          <option key={c} value={c}>
            {c.replace(/_/g, " ")}
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
