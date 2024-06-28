import Cart from "./cart";
import World from "./world";
import Login from "./login";
import React from "react";
import Image from "next/image";
import SearchIcon from "../../svg/search.svg";

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
    <div className="flex flex-row xl:gap-[18px] gap-3 align-middle justify-center py-5">
      <div className="size-[46px] xl:hidden block">
        <div className="size-[18px] relative mt-4">
          <Image
            src={SearchIcon}
            alt="search icon"
            fill
            sizes="100%"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <World hidden={hidden.intrenational} toggle={toggleLanguageDropdown} />
      <Cart hidden={hidden.cart} toggle={toggleCartDropdown} />
      <Login hidden={hidden.user} toggle={toggleUserDropdown} />
    </div>
  );
}
