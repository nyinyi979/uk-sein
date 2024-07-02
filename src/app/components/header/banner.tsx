"use client";
import Image from "next/image";
import Link from "next/link";
import DrawerBtn from "./drawer/drawerBtn";
import LoginSide from "./loginSide";
import SearchBar from "../../_components/searchBar";

export default function Banner() {
  return (
    <div className="xl:flex xl:flex-row sticky top-0 left-0 grid grid-cols-121 xl:gap-[70px] align-middle xl:justify-between bg-white xl:px-[126px] md:px-[50px] px-6 xl:py-5 py-0 border-b border-gray-300 z-[100]">
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
          className="w-full h-full object-cover"
        />
      </Link>
      <div className="w-fit xl:block hidden">
        <SearchBar
          width="w-[651px]"
          onSearch={(v) => {}}
          placeholder="Search Products..."
        />
      </div>
      <LoginSide />
    </div>
  );
}
