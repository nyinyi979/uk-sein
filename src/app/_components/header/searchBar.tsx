"use client";
import React from "react";
import Image from "next/image";
import SearchIcon from "../../svg/search.svg";
export default function SearchBar() {
  const [searchValue, setSearchValue] = React.useState("");
  const updateSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="w-fit relative py-4">
      <input
        value={searchValue}
        onChange={(e) => updateSearchValue(e)}
        className="w-[651px] h-[62px] pl-16 p-5 rounded-[15px] outline-none border border-gray-200 focus:border-gray-400 duration-300"
        placeholder="Search products..."
      />
      <Image
        src={SearchIcon}
        alt="search icon"
        width={18}
        height={18}
        className="absolute left-5 top-[38px]"
      />
    </div>
  );
}
