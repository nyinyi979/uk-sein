"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import UKSEIN from "../images/uksein.png";
import PhoneNoInput from "@/components/input/phoneNoInput";
import PasswordInput from "@/components/input/passwordInput";
import LoginHeader from "./loginHeader";
import LoginBack from "./loginBack";
import { useTranslations } from "next-intl";
import AlertBox, { showAlert } from "@/components/Alert";

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
  const disabled = input.phoneNumber !== "" && input.password !== "";
  const t = useTranslations();
  return (
    <div className="xl:w-fit w-[80%] grid md:grid-cols-2 xl:gap-28 md:gap-10 gap-5 mx-auto md:py-20 py-10 sm:px-0 px-2">
      <AlertBox className="text-center p-5">
        You have successfully signed in from <br /> {input.phoneNumber}
      </AlertBox>
      <div className="xl:w-[500px] w-full flex flex-col gap-10 mx-auto">
        <LoginBack />
        <form onSubmit={(ev) => {ev.preventDefault();showAlert(5000);}} className="flex flex-col gap-10">
          <LoginHeader />
          <div className="flex flex-col gap-[50px]">
            <div className="flex flex-col md:gap-8 gap-[18px]">
              <PhoneNoInput phone={input.phoneNumber} setPhone={setPhoneNo} />
              <PasswordInput
                displayedLabel={t("input.password")}
                id="pw"
                password={input.password}
                setPassword={setPassword}
              />
              <Link
                href={"/"}
                className="my-3 ml-auto text-reject font-bold md:text-base text-sm"
              >
                {t("signin.forgot-password")}
              </Link>
            </div>
          </div>
          <button
            disabled={!disabled}
            type="submit"
            className={`w-full h-[78px] rounded-[18px] font-semibold font-sora xl:text-2xl ${disabled ? "bg-khaki-600 text-white hover:bg-khaki-700" : "bg-white-700 text-white"} duration-300`}
          >
            {t("signin.sign-in")}
          </button>
          <p className="my-3 font-semibold text-center xl:text-lg text-sm">
            {t("signin.don't-have-account")}
            <Link
              className="font-bold text-khaki-500 hover:text-khaki-700 duration-300"
              href={"/signup"}
            >
              {t("signup.sign-up")}
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
