import { useTranslations } from "next-intl";
import Link from "next/link";

export default function CartFooter({
  totalPrice,
  toggle,
}: {
  totalPrice: number;
  toggle: () => void;
}) {
  const t = useTranslations("cart");
  return (
    <div className="xl:w-[500px] md:w-[420px] w-[340px] mx-auto flex flex-col gap-[26px] mt-auto pt-[18px] pb-8 shadow-cartFooter">
      <div className="w-full mx-auto flex flex-row justify-between md:text-xl">
        <p className="font-medium">{t("sub-total")}</p>
        <p className="font-bold">{totalPrice.toLocaleString()} Ks</p>
      </div>
      <Link
        href={"/checkout"}
        onClick={toggle}
        className="w-full mx-auto md:py-6 py-4 px-2.5 rounded-[18px] bg-khaki-500 font-semibold font-sora xl:text-2xl md:text-xl text-center text-white hover:bg-khaki-700 duration-300"
      >
        {t("check-out-now")}
      </Link>
    </div>
  );
}
