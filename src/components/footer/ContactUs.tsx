import { useTranslations } from "next-intl";

export default function ContactUs() {
  const t = useTranslations();
  return (
    <div className="flex flex-col gap-[26px]">
      <p className="font-sora font-semibold xl:text-lg text-khaki-500">
        {t("contact.contact-us")}
      </p>
      <div className="flex flex-col xl:w-[255px] w-[212px] xl:gap-3 gap-[15px] xl:text-base text-xs">
        <p>
          <span className="text-grey-200">{t("input.phone")} : </span>
          <span className="pl-3">09-791797411</span>
        </p>
        <p>
          <span className="text-grey-200">{t("input.email")} : </span>
          <span className="pl-3">uksein@gmail.com</span>
        </p>
        <p>
          <span className="text-grey-200">{t("input.address")} :</span>
          <span className="pl-3">No.63, Bo Yar Nyunt Road, Dagon, Yangon</span>
        </p>
      </div>
    </div>
  );
}
