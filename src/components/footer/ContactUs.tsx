import { useTranslations } from "next-intl";

export default function ContactUs() {
  const t = useTranslations();
  return (
    <div className="flex flex-col gap-[26px]">
      <p className="font-sora font-semibold xl:text-lg text-khaki-500">
        {t("contact.contact-us")}
      </p>
      <div className="flex flex-col xl:w-[355px] w-[212px] xl:gap-3 gap-[15px] xl:text-base text-xs">
        <div className="flex items-start justify-between">
          <p className="text-grey-200 w-[120px]">{t("input.phone")} :</p>
          <a href="tel:+959791797411" className="pl-3 w-[200px]">09-791797411</a>
        </div>
        <div className="flex items-start justify-between">
          <p className="text-grey-200 w-[120px]">{t("input.email")} :</p>
          <a href="mailto:uksein4@4gmail.com" className="pl-3 w-[200px]">uksein4@4gmail.com</a>
        </div>
        <div className="flex items-start justify-between">
          <p className="text-grey-200 w-[120px]">{t("input.address")} :</p>
          <p className="pl-3 w-[200px]">No.63, Bo Yar Nyunt Road, Dagon, Yangon</p>
        </div>
      </div>
    </div>
  );
}
