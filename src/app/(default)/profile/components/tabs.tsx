import { useTranslations } from "next-intl";

export default function ProfileTabs({
  page,
  updatePage,
}: {
  page: number;
  updatePage: (p: number) => void;
}) {
  const t = useTranslations();
  return (
    <div className="flex flex-row font-bold xl:text-lg text-sm">
      <button
        disabled={page === 0}
        onClick={() => updatePage(0)}
        className="py-5 xl:px-[72px] md:px-10 px-3 disabled:border-b-[1.5px] disabled:border-khaki-500 disabled:text-khaki-500 hover:bg-khaki-50 duration-300"
      >
        {t("signup.personal")}
      </button>
      <button
        disabled={page === 1}
        onClick={() => updatePage(1)}
        className="py-5 xl:px-[72px] md:px-10 px-3 disabled:border-b-[1.5px] disabled:border-khaki-500 disabled:text-khaki-500 hover:bg-khaki-50 duration-300"
      >
        {t("profile.change-password")}
      </button>
    </div>
  );
}
