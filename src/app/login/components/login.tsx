"use client";
import Image from "next/image";
import Link from "next/link";
import UKSEIN from "../images/uksein.png";
import React from "react";
export default function Login() {
  const [input, setInput] = React.useState({
    phoneNumber: "",
    password: "",
  });
  const setPhoneNo = (ph: string) => {
    setInput({ ...input, phoneNumber: ph });
  };
  const setPassword = (pw: string) => {
    setInput({ ...input, password: pw });
  };
  const notEmpty = input.phoneNumber != "" && input.password != "";
  return (
    <div className="w-fit grid grid-cols-2 gap-[120px] mx-auto pt-20 pb-10 px-[125px]">
      <div className="w-[500px]">
        <p className="font-sora font-bold text-[42px]">Welcome back👋</p>
        <p className="font-normal text-lg text-grey-200">
          Enter your account details to login to the system.
        </p>
        <form onSubmit={() => {}} className="flex flex-col gap-3 my-6">
          <label htmlFor="ph_no" className="font-semibold">
            Phone number
          </label>
          <input
            onChange={(ev) => setPhoneNo(ev.target.value)}
            value={input.phoneNumber}
            id="ph_no"
            type="text"
            placeholder="Phone number"
            className="w-full h-[71px] p-5 outline-none rounded-xl border border-grey-100 focus:border-grey-500 duration-300 placeholder:text-grey-100"
          />
          <label htmlFor="password" className="font-semibold pt-4">
            Password
          </label>
          <input
            onChange={(ev) => setPassword(ev.target.value)}
            value={input.password}
            id="password"
            type="password"
            placeholder="Password"
            className="w-full h-[71px] p-5 rounded-xl outline-none border border-grey-100 focus:border-grey-500 duration-300 placeholder:text-grey-100"
          />
          <Link href={"/"} className="my-3 ml-auto text-reject font-bold">
            Forgot password?
          </Link>
          <button
            disabled={!notEmpty}
            type="submit"
            className={`w-full h-[78px] mt-5 rounded-[18px] font-semibold font-sora text-2xl ${notEmpty ? "bg-khaki-600 text-white hover:bg-khaki-700" : "bg-white-700 text-white"} duration-300`}
          >
            Sign in
          </button>
        </form>
        <p className="my-3 font-semibold text-center text-lg">
          Don't have an account?{" "}
          <Link
            className="font-bold text-khaki-500 hover:text-khaki-700 duration-300"
            href={"/signup"}
          >
            Sign Up
          </Link>
        </p>
      </div>
      <Image
        src={UKSEIN}
        alt="UKSEIN"
        className="w-full h-auto my-10 scale-125"
      />
    </div>
  );
}
