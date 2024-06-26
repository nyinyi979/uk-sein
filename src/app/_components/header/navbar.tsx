"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
export default function NavBar() {
  const path = usePathname().split("/")[1];
  const links = React.useRef([
    "",
    "PRODUCTS",
    "PORTFOLIO",
    "ABOUT US",
    "CONTACT",
  ]);
  const actualLinks = React.useRef([
    "",
    "products",
    "portfolio",
    "about-us",
    "contact",
  ]);
  const checkLinks = React.useRef([
    new Set([""]),
    new Set(["products", "category"]),
    new Set(["portfolio"]),
    new Set(["about-us"]),
    new Set(["contact"]),
  ]);
  return (
    <div className="flex align-middle justify-center gap-[56px] sticky top-0 left-0 py-[18px] px-[120px] z-[30] bg-white shadow-lightest">
      {links.current.map((link, index) => (
        <Link
          href={`/${actualLinks.current[index]}`}
          key={link}
          className={`font-normal ${checkLinks.current[index].has(path) ? "text-khaki-500" : "text-black hover:text-khaki-500 duration-300"}`}
        >
          {link == "" ? "HOME" : link}
        </Link>
      ))}
    </div>
  );
}
