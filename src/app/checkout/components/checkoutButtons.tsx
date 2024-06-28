export default function CheckoutButtons({
  page,
  updatePage,
}: {
  page: "Shipping" | "Payment" | "Confirmed";
  updatePage: () => void;
}) {
  return (
    <>
      {page === "Shipping" && (
        <button
          onClick={updatePage}
          className="button font-bold xl:ml-auto bg-khaki-500 text-white hover:bg-khaki-700 duration-300"
        >
          Continue
        </button>
      )}
      {page === "Payment" && (
        <button
          onClick={updatePage}
          className="button font-bold xl:ml-auto bg-khaki-500 text-white hover:bg-khaki-700 duration-300"
        >
          Continue
        </button>
      )}
    </>
  );
}
