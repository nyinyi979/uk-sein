"use client";
import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import SearchIcon from "@/svg/search.svg";

export default function SearchBar({
  width,
  searchValue,
  setSearchValue,
  placeholder,
  onEnter = () => {},
  onBlur = () => {},
  onFocus = () => {},
}: {
  width: string;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  placeholder: string;
  onEnter?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}) {
  const updateSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="w-full relative py-4 mx-auto">
      <input
        value={searchValue}
        onChange={(e) => updateSearchValue(e)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onEnter();
        }}
        onFocus={onFocus}
        onBlur={onBlur}
        className={`${width} xl:h-[62px] h-14 pl-16 p-5 rounded-[15px] outline-none border border-grey-200 focus:border-grey-500 duration-300`}
        placeholder={placeholder}
      />
      <div className="size-[18px] absolute left-5 xl:top-[38px] top-9">
        <Image src={SearchIcon} alt="search icon" fill sizes="100%" />
      </div>
    </div>
  );
}
