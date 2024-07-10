import { useTranslations } from "next-intl";
import Label from "./label";
import RedDot from "./redDot";

export default function PhoneNoInput({
  phone,
  setPhone,
  required = false,
}: {
  phone: string;
  setPhone: (m: string) => void;
  required?: boolean;
}) {
  const t = useTranslations("input")("phone");
  return (
    <div className="flex flex-col gap-[14px]">
      <Label htmlFor="ph-no">
        {t}
        {required && <RedDot />}
      </Label>
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
