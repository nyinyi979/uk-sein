"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export default function NavBar() {
  const t = useTranslations("main-pages");
  const path = usePathname().split("/")[1];
  const links = [
    "",
    t("PRODUCTS"),
    t("PORTFOLIO"),
    t("ABOUT-US"),
    t("CONTACT"),
  ];
  const actualLinks = React.useRef([
    "",
    "products",
    "portfolio",
    "about-us",
    "contact",
  ]);
  const checkLinks = React.useRef([
    new Set([""]),
    new Set(["products", "category", "checkout", "search"]),
    new Set(["portfolio"]),
    new Set(["about-us"]),
    new Set(["contact"]),
  ]);
  return (
    <div className="w-full xl:flex hidden align-middle justify-center gap-[56px] py-[18px] px-[120px] z-[30] bg-white shadow-lightest">
      {links.map((link, index) => (
        <Link
          href={`/${actualLinks.current[index]}`}
          key={link}
          className={`font-normal ${checkLinks.current[index].has(path) ? "text-khaki-500" : "text-black hover:text-khaki-500 duration-300"}`}
        >
          {link == "" ? t("HOME") : link}
        </Link>
      ))}
    </div>
  );
}
