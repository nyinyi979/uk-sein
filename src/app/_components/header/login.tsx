import React from "react";
import Link from "next/link";
import Image from "next/image";
import Profile from "./images/profile-nav.svg";
import profile from "./images/profile.svg";
import order from "./images/order.svg";
import whishlist from "./images/whitelist.svg";
import logout from "./images/logOut.svg";
import { AnimatePresence, motion } from "framer-motion";

export default function Login({
  hidden,
  toggle,
}: {
  hidden: boolean;
  toggle: () => void;
}) {
  const [userInfo, setUserInfo] = React.useState({
    id: "123",
  });
  return (
    <div className="relative">
      {userInfo.id === "" ? (
        <Link
          href={"/login"}
          className="w-[120px] h-[50px] px-5 py-3 mt-3 bg-khaki-500 rounded-xl text-center text-white hover:bg-khaki-700 duration-300"
        >
          Login
        </Link>
      ) : (
        <button
          onClick={toggle}
          className="w-[58px] h-[50px] flex align-middle justify-items-center py-3 px-4 bg-white-400 rounded-xl hover:bg-grey-50 duration-300"
        >
          <span className="size-[22px] block relative">
            <Image
              src={Profile}
              alt="cart"
              fill
              sizes="100%"
              className="size-auto"
            />
          </span>
        </button>
      )}
      <AnimatePresence>
        {!hidden && (
          <motion.div
            animate={{ translateY: [20, 0], opacity: [0, 1] }}
            exit={{ translateY: [0, 20], opacity: [1, 0] }}
            className="w-[220px] absolute right-0 -bottom-[13.5rem] p-2.5 rounded-[15px] bg-white shadow-dropdown z-[40]"
          >
            <Link
              href="/profile"
              className="w-[200px] flex flex-row align-middle justify-items-center gap-3 py-3 px-2.5 rounded-[10px] hover:bg-grey-50 duration-300"
            >
              <div className="size-[18px] relative">
                <Image
                  src={profile}
                  alt="my profile"
                  fill
                  sizes="100%"
                  className="w-full h-full bg-cover"
                />
              </div>
              <p className="font-semibold">My Profile</p>
            </Link>
            <Link
              href="/orders"
              className="w-[200px] flex flex-row align-middle justify-items-center gap-3 py-3 px-2.5 rounded-[10px] hover:bg-grey-50 duration-300"
            >
              <div className="size-[18px] relative">
                <Image
                  src={order}
                  alt="my orders"
                  fill
                  sizes="100%"
                  className="w-full h-full bg-cover"
                />
              </div>
              <p className="font-semibold">My Orders</p>
            </Link>
            <Link
              href="/wishlists"
              className="w-[200px] flex flex-row align-middle justify-items-center gap-3 py-3 px-2.5 rounded-[10px] hover:bg-grey-50 duration-300"
            >
              <div className="size-[18px] relative">
                <Image
                  src={whishlist}
                  alt="my wishlists"
                  fill
                  sizes="100%"
                  className="w-full h-full bg-cover"
                />
              </div>
              <p className="font-semibold">Wishlists</p>
            </Link>
            <button className="w-[200px] flex flex-row align-middle justify-items-center gap-3 py-3 px-2.5 rounded-[10px] hover:bg-grey-50 duration-300">
              <div className="size-[18px] relative">
                <Image
                  src={logout}
                  alt="logout"
                  fill
                  sizes="100%"
                  className="w-full h-full bg-cover"
                />
              </div>
              <p className="font-semibold">Logout</p>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
