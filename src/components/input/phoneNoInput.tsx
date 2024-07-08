import { useTranslations } from "next-intl";
import Label from "./label";

export default function PhoneNoInput({
  phone,
  setPhone,
}: {
  phone: string;
  setPhone: (m: string) => void;
}) {
  const t = useTranslations("input")("phone");
  return (
    <div className="flex flex-col gap-[14px]">
      <Label htmlFor="ph-no">{t}</Label>
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        id="ph-no"
        type="text"
        placeholder={t}
        className="input"
      />
    </div>
  );
}
