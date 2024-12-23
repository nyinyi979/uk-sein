import Cart from "./Cart";
import World from "./World";
import Login from "./Login";
import React from "react";
import Image from "next/image";
import SearchIcon from "@/svg/search.svg";
import Link from "next/link";

export default function LoginSide() {
  const [hidden, setHidden] = React.useState({
    intrenational: true,
    cart: true,
    user: true,
  });
  const toggleLanguageDropdown = () => {
    setHidden({
      intrenational: !hidden.intrenational,
      cart: true,
      user: true,
    });
  };
  const toggleCartDropdown = () => {
    setHidden({ intrenational: true, cart: !hidden.cart, user: true });
  };
  const toggleUserDropdown = () => {
    setHidden({ intrenational: true, cart: true, user: !hidden.user });
  };
  return (
    <div className="flex flex-row xl:gap-[18px] md:gap-3 gap-0 align-middle justify-center py-5">
      {/* <Link href={"/search"} className="flex items-center justify-center size-[46px] bg-white-400 md:rounded-xl rounded-full hover:bg-grey-50 duration-300 xl:hidden">
        <div className="size-[18px] relative">
          <Image
            src={SearchIcon}
            alt="search icon"
            fill
            sizes="100%"
            className="size-full object-cover"
          />
        </div>
      </Link> */}
      <World hidden={hidden.intrenational} toggle={toggleLanguageDropdown} />
      <Cart hidden={hidden.cart} toggle={toggleCartDropdown} />
      <Login hidden={hidden.user} toggle={toggleUserDropdown} />
    </div>
  );
}
