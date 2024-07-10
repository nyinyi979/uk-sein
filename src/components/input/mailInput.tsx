import { useTranslations } from "next-intl";
import Label from "./label";
import RedDot from "./redDot";

export default function MailInput({
  mail,
  setMail,
  required = false,
}: {
  mail: string;
  setMail: (m: string) => void;
  required?: boolean;
}) {
  const t = useTranslations("input")("email");
  return (
    <div className="flex flex-col gap-[14px]">
      <Label htmlFor="email">
        {t}
        {required && <RedDot />}
      </Label>
      <input
        value={mail}
        onChange={(e) => setMail(e.target.value)}
        id="email"
        type="email"
        placeholder={t}
        className="input"
      />
    </div>
  );
}
