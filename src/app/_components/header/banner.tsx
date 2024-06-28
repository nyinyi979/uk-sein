"use client";
import Image from "next/image";
import LoginSide from "./loginSide";
import SearchBar from "../../components/searchBar";
import Menu from "./images/menu.svg";
export default function Banner() {
  return (
    <div className="xl:flex xl:flex-row grid grid-cols-121 xl:gap-[70px] align-middle xl:justify-between xl:px-[126px] px-[50px] xl:py-5 py-0 border-b border-gray-300">
      <button className="size-[46px] xl:hidden mt-5 rounded-full bg-white-400 hover:bg-grey-50 duration-300">
        <div className="w-5 h-[14px] mx-auto relative">
          <Image
            src={Menu}
            alt="menu"
            fill
            sizes="100%"
            className="w-full h-full bg-cover"
          />
        </div>
      </button>
      <div className="xl:w-[106px] xl:h-[72px] w-[74px] h-[47px] xl:mt-2 mt-4 mx-auto relative">
        <Image
          src="/images/UKSEIN.svg"
          alt="UKSEIN1"
          fill
          sizes="100%"
          className="w-full h-full object-cover"
        />
      </div>
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
