"use client";
import Image from "next/image";
import LoginSide from "./loginSide";
import SearchBar from "../../components/searchBar";

export default function Banner() {
  return (
    <div className="flex flex-row gap-[70px] align-middle justify-between px-[126px] py-5 border-b border-gray-300">
      <Image
        src="/images/UKSEIN.svg"
        alt="UKSEIN1"
        width={106.56}
        height={72}
        className="h-fit py-2"
      />
      <SearchBar width="w-[651px]" onSearch={(v) => {}} />
      <LoginSide />
    </div>
  );
}
