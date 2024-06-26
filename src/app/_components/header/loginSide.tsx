import Cart from "./cart";
import World from "./world";
import Login from "./login";
import React from "react";

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
    <div className="flex flex-row gap-[18px] align-middle justify-center py-5">
      <World hidden={hidden.intrenational} toggle={toggleLanguageDropdown} />
      <Cart hidden={hidden.cart} toggle={toggleCartDropdown} />
      <Login hidden={hidden.user} toggle={toggleUserDropdown} />
    </div>
  );
}
