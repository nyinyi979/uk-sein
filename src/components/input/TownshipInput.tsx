import Image from "next/image";
import Arrow from "./images/arrow.svg";
import Label from "./Label";
import { useLocale, useTranslations } from "next-intl";
import { EngTownships, MyTownships } from "@/types/addresses";
import { state } from "@/types/type";
import RedDot from "./RedDot";

export default function TownshipInput({
  township,
  setTownship,
  state,
  required = false,
}: {
  township: string;
  setTownship: (n: string) => void;
  state: state;
  required?: boolean;
}) {
  const locale = useLocale();
  const t = useTranslations("input");
  const allTownships: string[] =
    locale === "en" ? EngTownships[state] : MyTownships[state];
  const valTownships = EngTownships[state];
  return (
    <div className="flex flex-col gap-[14px] relative">
      <Label htmlFor="township">
        {t("township")}
        {required && <RedDot />}
      </Label>
      <select
        name="township"
        id="township"
        className={`input ${township == "" && "text-grey-100"}`}
        onChange={(e) => setTownship(e.target.value)}
        defaultValue={township}
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
