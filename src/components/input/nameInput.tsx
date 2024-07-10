import { useTranslations } from "next-intl";
import Label from "./label";
import RedDot from "./redDot";

export default function NameInput({
  name,
  setName,
  required = false,
}: {
  name: string;
  setName: (n: string) => void;
  required?: boolean;
}) {
  const t = useTranslations("input")("name");
  return (
    <div className="flex flex-col gap-[14px]">
      <Label htmlFor="name">
        {t}
        {required && <RedDot />}
      </Label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        id="name"
        type="text"
        placeholder={t}
        className="input"
      />
    </div>
  );
}
