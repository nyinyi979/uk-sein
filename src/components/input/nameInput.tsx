import { useTranslations } from "next-intl";
import Label from "./label";

export default function NameInput({
  name,
  setName,
}: {
  name: string;
  setName: (n: string) => void;
}) {
  const t = useTranslations("input")("name");
  return (
    <div className="flex flex-col gap-[14px]">
      <Label htmlFor="name">{t}</Label>
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
