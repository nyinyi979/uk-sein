import Image from "next/image";
import Link from "next/link";
import WorldImage from "./images/world.svg";
import CartImage from "./images/cart.svg";
export default function LoginSide() {
  return (
    <div className="flex flex-row gap-[18px] align-middle justify-center py-5">
      <button className="w-[58px] h-[50px] flex align-middle justify-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 duration-300">
        <span className="size-[22px] block relative">
          <Image
            src={WorldImage}
            alt="globe"
            fill
            sizes="100%"
            className="size-auto"
          />
        </span>
      </button>
      <button className="w-[58px] h-[50px] flex align-middle justify-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 duration-300">
        <span className="size-[22px] block relative">
          <Image
            src={CartImage}
            alt="globe"
            fill
            sizes="100%"
            className="size-auto"
          />
        </span>
      </button>
      <Link
        href={"/login"}
        className="w-[120px] h-[50px] px-5 py-3 bg-khaki-500 rounded-xl text-center text-white hover:bg-khaki-700 duration-300"
      >
        Login
      </Link>
    </div>
  );
}
