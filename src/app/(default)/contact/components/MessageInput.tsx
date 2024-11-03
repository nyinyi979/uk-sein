import { useTranslations } from "next-intl";

export default function MessageInput({
  message,
  setMessage,
}: {
  message: string;
  setMessage: (message: string) => void;
}) {
  const t = useTranslations("contact");
  console.log(message)
  return (
    <div className="flex flex-col gap-[15px]">
      <label htmlFor="message" className="font-sora font-semibold">
        {t("message")}
      </label>
      <textarea
        id="message"
        name="message"
        placeholder={`${t("message")}...`}
        value={message}
        onChange={(ev) => setMessage(ev.target.value)}
        className="h-[180px] p-6 rounded-[10px] bg-white-500 outline-none border border-transparent focus:border-grey-500 placeholder:text-grey-100 duration-300"
      />
    </div>
  );
}
