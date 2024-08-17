import { useTranslations } from "next-intl";

export default function EmailInput({
  email,
  setEmail,
}: {
  email: string;
  setEmail: (email: string) => void;
}) {
  const t = useTranslations("contact");
  return (
    <div className="flex flex-col gap-[15px]">
      <label htmlFor="email" className="font-sora font-semibold">
        {t("email")}
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder={t("email")}
        value={email}
        onChange={(ev) => setEmail(ev.target.value)}
        className="h-[72px] px-6 rounded-[10px] bg-white-500 outline-none border border-transparent focus:border-grey-500 placeholder:text-grey-100 duration-300"
      />
    </div>
  );
}
