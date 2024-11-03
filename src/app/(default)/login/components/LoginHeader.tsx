import { useTranslations } from "next-intl";

export default function LoginHeader() {
  const t = useTranslations("signin");
  return (
    <div className="flex flex-col gap-2.5">
      <p className="font-sora font-bold xl:text-[42px] text-[32px]">
        {t("welcome-back")}
      </p>
      <p className="font-normal xl:text-lg text-sm text-grey-200">
        {t("enter-details")}
      </p>
    </div>
  );
}
