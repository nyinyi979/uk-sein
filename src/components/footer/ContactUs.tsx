import { useTranslations } from "next-intl";

export default function ContactUs() {
  const t = useTranslations();
  return (
    <div className="flex flex-col gap-[26px]">
      <p className="font-sora font-semibold xl:text-lg text-khaki-500">
        {t("contact.contact-us")}
      </p>
      <div className="flex flex-col xl:w-[255px] w-[212px] xl:gap-3 gap-[15px] xl:text-base text-xs">
      <div className="flex items-start justify-start">
          <p className="text-grey-200 w-[70px]">{t("input.phone")} </p>
          <p className="pl-3">09-791797411</p>
        </div>
        <div className="flex items-start justify-start">
          <p className="text-grey-200 w-[70px]">{t("input.email")} </p>
          <p className="pl-3">uksein4@4gmail.com</p>
        </div>
        <div className="flex items-start justify-start">
          <p className="text-grey-200 w-[70px]">{t("input.address")}</p>
          <p className="pl-3">No.63, Bo Yar Nyunt Road, Dagon, Yangon</p>
        </div>
      </div>
    </div>
  );
}
