import Home from "./images/home.svg";
import Products from "./images/product.svg";
import Portfolio from "./images/portfolio.svg";
import AboutUs from "./images/aboutUs.svg";
import Contact from "./images/contact.svg";
import Profile from "./images/profile.svg";
import Orders from "./images/orders.svg";
import Wishlist from "./images/wishlist.svg";
import Signout from "./images/signout.svg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Drawer({ hide }: { hide: () => void }) {
  const link0 = [
    {
      url: "/",
      img: Home,
      name: "Home",
    },
    {
      url: "/products",
      img: Products,
      name: "Products",
    },
    {
      url: "/portfolio",
      img: Portfolio,
      name: "Portfolio",
    },
    {
      url: "/about-us",
      img: AboutUs,
      name: "About Us",
    },
    {
      url: "/contact",
      img: Contact,
      name: "Contact Us",
    },
  ];
  const link1 = [
    {
      url: "/profile",
      img: Profile,
      name: "My Profile",
    },
    {
      url: "/profile/orders",
      img: Orders,
      name: "My Orders",
    },
    {
      url: "/profile/wishlists",
      img: Wishlist,
      name: "Wishlists",
    },
  ];
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      exit={{
        opacity: 0,
        transition: {
          stiffness: 19.75,
          mass: 1,
          damping: 6.67,
        },
      }}
      transition={{
        stiffness: 19.75,
        mass: 1,
        damping: 6.67,
      }}
      className="fixed w-full h-full xl:hidden block top-0 left-0 z-[300]"
      onClick={hide}
    >
      <motion.div
        animate={{ translateX: [-200, 0] }}
        exit={{
          translateX: -200,
          transition: {
            stiffness: 19.75,
            mass: 1,
            damping: 6.67,
          },
        }}
        transition={{
          stiffness: 19.75,
          mass: 1,
          damping: 6.67,
        }}
        drag={"x"}
        dragConstraints={{ left: -200, right: 0 }}
        onDrag={(ev) => {
          if (ev.x < 250) hide();
        }}
        onClick={(ev) => ev.stopPropagation()}
        className="md:w-[350px] w-[276px] h-full md:pt-[83px] pt-10 md:pl-[50px] pl-5 pb-10 bg-white shadow-drawer overflow-y-auto"
      >
        <div className="w-fit flex flex-col gap-6">
          <p className="font-semibold text-2xl">Explore Menu</p>
          <div className="flex flex-col gap-1.5 border-b border-dotted border-grey-50">
            {link0.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                onClick={hide}
                className="w-[230px] h-fit flex flex-row gap-[18px] py-2.5 px-[10px] rounded-[15px] hover:bg-khaki-50 duration-300"
              >
                <div className="md:size-[38px] px-3 py-2.5 bg-khaki-50 rounded-full">
                  <div className="w-[13px] h-[14px] relative">
                    <Image
                      src={link.img}
                      alt={link.name}
                      fill
                      sizes="100%"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <span className="font-semibold md:text-lg md:mt-1">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-1.5">
            {link1.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                onClick={hide}
                className="w-[230px] h-fit flex flex-row gap-[18px] py-2.5 px-[10px] rounded-[15px] hover:bg-khaki-50 duration-300"
              >
                <div className="md:size-[38px] px-3 py-2.5 bg-khaki-50 rounded-full">
                  <div className="w-[13px] h-[14px] relative">
                    <Image
                      src={link.img}
                      alt={link.name}
                      fill
                      sizes="100%"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <span className="font-semibold md:text-lg md:mt-1">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
          <button className="w-fit flex flex-row gap-3 py-[14px] px-7 rounded-[10px] bg-red-500 text-white hover:bg-red-700 duration-300">
            <div className="size-[18px] relative">
              <Image
                src={Signout}
                alt="sign out"
                sizes="100%"
                fill
                className="w-full h-full object-cover mt-1"
              />
            </div>
            <span className="font-bold">Sign out</span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
