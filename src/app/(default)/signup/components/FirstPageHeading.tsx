import { useTranslations } from "next-intl";

export default function FirstPageHeading() {
  const t = useTranslations("signup");
  return (
    <>
      <div className="flex flex-col gap-2.5 md:mt-10">
        <p className="font-sora font-bold xl:text-[42px] md:text-[32px] text-2xl">
          {t("create")}
        </p>
        <p className="text-grey-200 md:text-base text-sm">
          {t("enter-details")}
        </p>
      </div>
      <p className="font-sora font-semibold text-2xl mt-10">{t("personal")}</p>
    </>
  );
}
