import { useTranslations } from "next-intl";

export default function ProfileTitle() {
  const t = useTranslations();
  return (
    <div className="flex flex-col gap-1">
      <p className="font-sora font-bold xl:text-5xl md:text-[32px] text-lg">
        {t("main-pages.my-profile")}
      </p>
      <p className="font-semibold xl:text-lg md:text-base text-sm">
        <span className="text-grey-100">{t("profile.account")} - </span>{" "}
        {t("main-pages.my-profile")} - {t("signup.personal")}
      </p>
    </div>
  );
}
