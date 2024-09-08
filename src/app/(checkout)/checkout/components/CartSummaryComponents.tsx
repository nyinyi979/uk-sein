import { useTranslations } from "next-intl";

export function CartSummaryHeader({
  closeCart,
  count,
}: {
  count: number;
  closeCart: () => void;
}) {
  const t = useTranslations("checkout");
  return (
    <div className="flex flex-row gap-2.5 py-4 px-6">
      <p className="my-2 font-sora font-semibold xl:text-2xl text-lg">
        {t("cart-summary")}
      </p>
      <p className="size-4 rounded-full bg-red-500 xl:my-4 my-3.5 text-white text-[10px] text-center">
        {count}
      </p>
      <button
        onClick={closeCart}
        className="xl:hidden size-[40px] ml-auto hover:bg-grey-50 duration-300"
      >
        <svg
          className="mx-auto"
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.6923 19.2066C20.7899 19.3042 20.8672 19.42 20.92 19.5475C20.9728 19.6749 21 19.8115 21 19.9495C21 20.0874 20.9728 20.224 20.92 20.3515C20.8672 20.4789 20.7899 20.5948 20.6923 20.6923C20.5948 20.7899 20.4789 20.8672 20.3515 20.92C20.224 20.9728 20.0874 21 19.9495 21C19.8115 21 19.6749 20.9728 19.5475 20.92C19.42 20.8672 19.3042 20.7899 19.2066 20.6923L10.5 11.9844L1.79336 20.6923C1.59635 20.8893 1.32914 21 1.05053 21C0.771909 21 0.504703 20.8893 0.307692 20.6923C0.11068 20.4953 5.4922e-09 20.2281 0 19.9495C-5.4922e-09 19.6709 0.11068 19.4037 0.307692 19.2066L9.01565 10.5L0.307692 1.79336C0.11068 1.59635 0 1.32914 0 1.05053C0 0.771909 0.11068 0.504703 0.307692 0.307692C0.504703 0.11068 0.771909 0 1.05053 0C1.32914 0 1.59635 0.11068 1.79336 0.307692L10.5 9.01565L19.2066 0.307692C19.4037 0.11068 19.6709 -5.4922e-09 19.9495 0C20.2281 5.4922e-09 20.4953 0.11068 20.6923 0.307692C20.8893 0.504703 21 0.771909 21 1.05053C21 1.32914 20.8893 1.59635 20.6923 1.79336L11.9844 10.5L20.6923 19.2066Z"
            fill="#101010"
          />
        </svg>
      </button>
    </div>
  );
}
export function CartFooter({ totalPrice, isUSD }: { totalPrice: number, isUSD: boolean }) {
  const t = useTranslations("checkout");
  return (
    <div className="flex flex-row pt-4 pb-[22px] px-8 font-bold">
      <p className="xl:text-xl text-lg">{t("total")}</p>
      <p className="ml-auto text-2xl">{totalPrice.toLocaleString()} {isUSD ? "$" : "Ks"}</p>
    </div>
  );
}
