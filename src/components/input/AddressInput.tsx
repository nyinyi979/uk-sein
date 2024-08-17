import { useTranslations } from "next-intl";
import Label from "./Label";
import RedDot from "./RedDot";

export default function AddresssInput({
  address,
  setAddress,
  required = false,
}: {
  address: string;
  setAddress: (n: string) => void;
  required?: boolean;
}) {
  const t = useTranslations("input")("address");
  return (
    <div className="flex flex-col gap-[14px]">
      <Label htmlFor="add">
        {t}
        {required && <RedDot />}
      </Label>
      <textarea
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        id="add"
        placeholder={t}
        className="w-full h-[150px] p-5 outline-none rounded-xl border border-grey-100 focus:border-grey-500 placeholder:text-grey-100 resize-none duration-300"
      />
    </div>
  );
}
