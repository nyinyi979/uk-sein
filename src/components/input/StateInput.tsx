import React from "react";
import Arrow from "./images/arrow.svg";
import Image from "next/image";
import Label from "./Label";
import { useLocale, useTranslations } from "next-intl";
import { states } from "@/types/address";
import RedDot from "./RedDot";

export default function StateInput({
  state,
  setState,
  required = false,
}: {
  state: string;
  setState: (s: states) => void;
  required?: boolean;
}) {
  const t = useTranslations("input");
  return (
    <div className="w-full flex flex-col gap-[14px] relative">
      <Label htmlFor="state">
        {t("state")}
        {required && <RedDot />}
      </Label>
      <select
        name="state"
        id="state"
        className={`input ${state == "" && "text-grey-100"}`}
        onChange={(e) => setState(e.target.value as states)}
        value={state}
      >
        <option value={""} className="hidden">
          {t("select-state")}
        </option>
        {states.map((s, ind) => (
          <option key={s} value={states[ind]}>
            {s.replace(/_/g, " ")}
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
