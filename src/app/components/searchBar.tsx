"use client";
import React from "react";
import Image from "next/image";
import SearchIcon from "../svg/search.svg";
export default function SearchBar({
  width,
  onSearch,
  placeholder,
}: {
  width: string;
  onSearch: (searchValue: string) => void;
  placeholder: string;
}) {
  const [searchValue, setSearchValue] = React.useState("");
  const updateSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="w-fit relative py-4">
      <input
        value={searchValue}
        onChange={(e) => updateSearchValue(e)}
        onKeyUp={(ev) => {
          if (ev.key === "Enter") onSearch(searchValue);
        }}
        className={`${width} xl:h-[62px] h-14 pl-16 p-5 rounded-[15px] outline-none border border-grey-200 focus:border-gray-400 duration-300`}
        placeholder={placeholder}
      />
      <div className="size-[18px] absolute left-5 top-[38px]">
        <Image src={SearchIcon} alt="search icon" fill sizes="100%" />
      </div>
    </div>
  );
}
