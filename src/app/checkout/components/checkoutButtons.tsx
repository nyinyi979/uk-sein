import { useTranslations } from "next-intl";

export default function CheckoutButtons({
  page,
  updatePage,
}: {
  page: "Shipping" | "Payment" | "Confirmed";
  updatePage: () => void;
}) {
  const t = useTranslations("default");
  return (
    <>
      {page === "Shipping" && (
        <button
          onClick={updatePage}
          className="button font-bold xl:ml-auto bg-khaki-500 text-white hover:bg-khaki-700 duration-300"
        >
          {t("continue")}
        </button>
      )}
      {page === "Payment" && (
        <button
          onClick={updatePage}
          className="button font-bold xl:ml-auto bg-khaki-500 text-white hover:bg-khaki-700 duration-300"
        >
          {t("continue")}
        </button>
      )}
    </>
  );
}
