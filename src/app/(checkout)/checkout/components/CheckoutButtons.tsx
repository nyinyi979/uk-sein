import { useTranslations } from "next-intl";

export default function CheckoutButtons({
  page,
  updatePage,
}: {
  page: "Shipping" | "Payment" | "Confirmed" | "Loading";
  updatePage: () => void;
}) {
  const t = useTranslations("default");
  return (
    <>
      {page === "Shipping" && (
        <button
          onClick={updatePage}
          className="w-fit h-[50px] block py-4 px-[28px] rounded-xl text-sm text-center font-bold xl:ml-auto bg-khaki-500 text-white hover:bg-khaki-700 duration-300"
        >
          {t("continue")}
        </button>
      )}
      {page === "Payment" && (
        <button
          onClick={updatePage}
          className="w-fit h-[50px] block py-4 px-[28px] rounded-xl text-sm text-center font-bold xl:ml-auto bg-khaki-500 text-white hover:bg-khaki-700 duration-300"
        >
          {t("continue")}
        </button>
      )}
    </>
  );
}
