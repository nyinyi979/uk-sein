"use client";
import Image from "next/image";
import Link from "next/link";
import DrawerBtn from "./drawer/DrawerBtn";
import LoginSide from "./LoginSide";
import SearchBarInBanner from "./SearchBar";
import { useTranslations } from "next-intl";

export default function Banner({
  searchSide = false,
}: {
  searchSide?: boolean;
}) {
  const t = useTranslations("banner");
  return (
    <div
      className={`w-full sticky xl:flex xl:flex-row top-0 left-0 ${searchSide ? "hidden" : "grid grid-cols-121"} xl:gap-[70px] gap-5 align-middle xl:justify-between bg-white xl:px-[126px] md:px-[50px] px-6 xl:py-5 py-0 border-b border-gray-300 z-[11]`}
    >
      <DrawerBtn />
      <Link
        href="/"
        className="xl:w-[106px] xl:h-[72px] w-[74px] h-[47px] xl:mt-2 mt-4 mx-auto relative"
      >
        <Image
          src="/images/UKSEIN.svg"
          alt="UKSEIN1"
          fill
          sizes="100%"
          className="size-full object-cover"
        />
      </Link>
      <div className="w-fit xl:block hidden relative">
        <SearchBarInBanner />
      </div>
      <LoginSide />
    </div>
  );
}
