import Link from "next/link";
import Cart from "./cart";
import World from "./world";

export default function LoginSide() {
  return (
    <div className="flex flex-row gap-[18px] align-middle justify-center py-5">
      <World />
      <Cart />
      <Link
        href={"/login"}
        className="w-[120px] h-[50px] px-5 py-3 bg-khaki-500 rounded-xl text-center text-white hover:bg-khaki-700 duration-300"
      >
        Login
      </Link>
    </div>
  );
}
