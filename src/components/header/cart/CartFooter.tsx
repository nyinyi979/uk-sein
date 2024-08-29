import { useTranslations } from "next-intl";
import { useUserStore } from "@/store/clientData";
import { useRouter } from "next/navigation";

export default function CartFooter({
  totalPrice,
  toggle,
}: {
  totalPrice: number;
  toggle: () => void;
}) {
  const t = useTranslations("cart");
  const token = useUserStore((store) => store.token);
  const router = useRouter();
  const onClick = () => {
    if (token === "") {
      alert("You need to login first!");
      return;
    } else router.push("/checkout");
    toggle();
  };
  return (
    <div className="w-[98%] mx-auto flex flex-col gap-[26px] mt-auto pt-[18px] pb-8 shadow-cartFooter">
      <div className="w-fit mx-auto flex flex-row gap-6 md:text-xl">
        <p className="font-medium">{t("sub-total")}</p>
        <p className="font-bold">{totalPrice.toLocaleString()} Ks</p>
      </div>
      <button
        onClick={onClick}
        className="xl:w-[500px] md:w-[420px] sm:w-[340px] mx-auto md:py-6 py-4 px-2.5 rounded-[18px] bg-khaki-500 font-semibold font-sora xl:text-2xl md:text-xl text-center text-white hover:bg-khaki-700 duration-300"
      >
        {t("check-out-now")}
      </button>
    </div>
  );
}
