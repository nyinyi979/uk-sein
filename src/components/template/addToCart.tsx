import AddToCart from "@/svg/addToCart.svg";
import Image from "next/image";
export default function AddToCartButton({ small }: { small: boolean }) {
  return (
    <button
      className={`${small ? "xl:size-[58px] size-[48px]" : "md:size-[58px] size-[48px]"} p-4 bg-khaki-500 rounded-xl hover:bg-khaki-700 duration-300`}
    >
      <Image src={AddToCart} alt="add to cart" width={22} height={22} />
    </button>
  );
}
