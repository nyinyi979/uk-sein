import Link from "next/link";

export default function CartFooter({
  totalPrice,
  toggle,
}: {
  totalPrice: number;
  toggle: () => void;
}) {
  return (
    <div className="xl:w-[500px] w-[420px] mx-auto flex flex-col gap-[26px] mt-auto pt-[18px] pb-8 shadow-cartFooter">
      <div className="w-full mx-auto flex flex-row justify-between text-xl">
        <p className="font-[500]">Sub Total</p>
        <p className="font-bold">{totalPrice.toLocaleString()} Ks</p>
      </div>
      <Link
        href={"/checkout"}
        onClick={toggle}
        className="w-full mx-auto py-6 px-2.5 rounded-[18px] bg-khaki-500 font-semibold font-sora text-2xl text-center text-white hover:bg-khaki-700 duration-300"
      >
        Check Out Now
      </Link>
    </div>
  );
}
