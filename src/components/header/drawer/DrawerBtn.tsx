import Image from "next/image";
import Menu from "../images/menu.svg";
import Drawer from "./Drawer";
import React from "react";
import useWindowSize from "@/components/hooks/useWindowSize";
import { AnimatePresence } from "framer-motion";

export default function DrawerBtn() {
  const [hidden, setHidden] = React.useState(true);
  const hide = () => setHidden(true);
  const show = () => setHidden(false);
  const size = useWindowSize();
  React.useEffect(() => {
    if (size[0] >= 1440) hide();
  }, [size]);
  return (
    <>
      <button
        onClick={show}
        className="size-[46px] xl:hidden mt-5 rounded-full bg-white-400 hover:bg-grey-50 duration-300"
      >
        <div className="w-5 h-[14px] mx-auto relative">
          <Image
            src={Menu}
            alt="menu"
            fill
            sizes="100%"
            className="size-full object-cover"
          />
        </div>
      </button>
      <AnimatePresence>{!hidden && <Drawer hide={hide} />}</AnimatePresence>
    </>
  );
}
