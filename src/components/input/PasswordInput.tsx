import Label from "./Label";
import React from "react";
import { useTranslations } from "next-intl";
import OpenEyes from "@/svg/open-eyes";
import ClosedEyes from "@/svg/closed-eye";
import RedDot from "./RedDot";

export default function PasswordInput({
  id,
  displayedLabel,
  password,
  setPassword,
}: {
  id: string;
  password: string;
  displayedLabel: string;
  setPassword: (pw: string) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const t = useTranslations("input")("password");
  return (
    <div className="flex flex-col gap-[14px] relative">
      <Label htmlFor={id}>
        {displayedLabel} <RedDot />
      </Label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id={id}
        name={id}
        type={open ? "text" : "password"}
        placeholder={t}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className="input"
      />
      <span
        onClick={() => setOpen(!open)}
        className="absolute right-5 top-[60px]"
      >
        {open ? (
          <OpenEyes fill={focus ? "#101010" : "#B5B5B5"} className="mt-0.5" />
        ) : (
          <ClosedEyes fill={focus ? "#101010" : "#B5B5B5"} />
        )}
      </span>
    </div>
  );
}
