import React from "react";
import Link from "next/link";
import Image from "next/image";
import ProfileNav from "./images/profile-nav.svg";
import Profile from "./images/profile.svg";
import Order from "./images/order.svg";
import WishList from "./images/whitelist.svg";
import Logout from "./images/logOut.svg";
import axios from "@/utils/axios";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useUserStore } from "@/store/clientData";

export default function Login({
  hidden,
  toggle,
}: {
  hidden: boolean;
  toggle: () => void;
}) {
  const { token, setToken, setCustomer } = useUserStore((state) => state);
  const router = useRouter();
  const logOut = () => {
    setToken(null);
    localStorage.removeItem("user");
    toggle();
    router.push("/");
  };

  React.useEffect(() => {
    const getAuth = async () => {
      const response = await axios.get("auth/me/");
      localStorage.setItem("user", JSON.stringify(response.data));
    };

    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      const user = localStorage.getItem("user");
      if (user === null) {
        getAuth();
      }
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [token]);
  const t = useTranslations("main-pages");
  return (
    <div className="xl:flex hidden flex-row relative">
      {token === null || token === "" ? (
        <Link
          href={"/login"}
          className="w-[140px] h-[50px] px-5 py-3 bg-khaki-500 rounded-xl text-center text-white hover:bg-khaki-700 duration-300"
        >
          {t("login")}
        </Link>
      ) : (
        <button
          onClick={toggle}
          className="w-[58px] h-[50px] flex align-middle justify-items-center md:py-3 p-2.5 bg-white-400 rounded-xl hover:bg-grey-50 duration-300"
        >
          <span className="size-[22px] block relative mx-auto">
            <Image
              src={ProfileNav}
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
              onClick={toggle}
              className="w-[200px] flex flex-row align-middle justify-items-center gap-3 py-3 px-2.5 rounded-[10px] hover:bg-grey-50 duration-300"
            >
              <div className="size-[18px] relative">
                <Image
                  src={Profile}
                  alt="my profile"
                  fill
                  sizes="100%"
                  className="size-full object-cover"
                />
              </div>
              <p className="font-semibold">{t("my-profile")}</p>
            </Link>
            <Link
              href="/profile/orders"
              onClick={toggle}
              className="w-[200px] flex flex-row align-middle justify-items-center gap-3 py-3 px-2.5 rounded-[10px] hover:bg-grey-50 duration-300"
            >
              <div className="size-[18px] relative">
                <Image
                  src={Order}
                  alt="my orders"
                  fill
                  sizes="100%"
                  className="size-full object-cover"
                />
              </div>
              <p className="font-semibold">{t("my-order")}</p>
            </Link>
            <Link
              href="/profile/wishlists"
              onClick={toggle}
              className="w-[200px] flex flex-row align-middle justify-items-center gap-3 py-3 px-2.5 rounded-[10px] hover:bg-grey-50 duration-300"
            >
              <div className="size-[18px] relative">
                <Image
                  src={WishList}
                  alt="my wishlists"
                  fill
                  sizes="100%"
                  className="size-full object-cover"
                />
              </div>
              <p className="font-semibold">{t("wishlists")}</p>
            </Link>
            <button
              onClick={logOut}
              className="w-[200px] flex flex-row align-middle justify-items-center gap-3 py-3 px-2.5 rounded-[10px] hover:bg-grey-50 duration-300"
            >
              <div className="size-[18px] relative">
                <Image
                  src={Logout}
                  alt="logout"
                  fill
                  sizes="100%"
                  className="size-full object-cover"
                />
              </div>
              <p className="font-semibold">{t("logout")}</p>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
