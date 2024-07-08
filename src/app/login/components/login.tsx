"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import UKSEIN from "../images/uksein.png";
import PhoneNoInput from "@/components/input/phoneNoInput";
import PasswordInput from "@/components/input/passwordInput";
import LoginHeader from "./loginHeader";
import LoginBack from "./loginBack";

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
    <div className="w-fit grid md:grid-cols-2 xl:gap-28 gap-10 mx-auto py-20">
      <div className="xl:w-[500px] md:w-[344px] w-[340px] flex flex-col gap-10 mx-auto">
        <LoginBack />
        <form onSubmit={() => {}} className="flex flex-col gap-10">
          <LoginHeader />
          <div className="flex flex-col gap-[50px]">
            <div className="flex flex-col md:gap-8 gap-[18px]">
              <PhoneNoInput phone={input.phoneNumber} setPhone={setPhoneNo} />
              <PasswordInput
                displayedLabel="Password"
                id="pw"
                password={input.password}
                setPassword={setPassword}
              />
              <Link
                href={"/"}
                className="my-3 ml-auto text-reject font-bold md:text-base text-sm"
              >
                Forgot password?
              </Link>
            </div>
            <button
              disabled={!notEmpty}
              type="submit"
              className={`w-full h-[78px] mt-5 rounded-[18px] font-semibold font-sora xl:text-2xl ${notEmpty ? "bg-khaki-600 text-white hover:bg-khaki-700" : "bg-white-700 text-white"} duration-300`}
            >
              Sign in
            </button>
          </div>
          <p className="my-3 font-semibold text-center xl:text-lg text-sm">
            Don't have an account?{" "}
            <Link
              className="font-bold text-khaki-500 hover:text-khaki-700 duration-300"
              href={"/signup"}
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
      <div className="xl:w-[581px] xl:h-[513px] md:w-[288px] md:h-[255px] md:block hidden relative">
        <Image
          src={UKSEIN}
          alt="UKSEIN"
          fill
          sizes="100%"
          className="size-full my-10 object-cover"
        />
      </div>
    </div>
  );
}
