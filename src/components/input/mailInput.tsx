import { useTranslations } from "next-intl";
import Label from "./label";

export default function MailInput({
  mail,
  setMail,
}: {
  mail: string;
  setMail: (m: string) => void;
}) {
  const t = useTranslations("input")("email");
  return (
    <div className="flex flex-col gap-[14px]">
      <Label htmlFor="email">{t}</Label>
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
