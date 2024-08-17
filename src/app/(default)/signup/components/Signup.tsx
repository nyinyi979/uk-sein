"use client";
import React from "react";
import Image from "next/image";
import SIGNUP from "../images/signup.png";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import Link from "next/link";
import SignUpBack from "./SignupBack";
import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { signUpInput, state } from "@/types/type";
import { useTranslations } from "next-intl";

export default function Signup() {
  const router = useRouter();
  const [input, setInput] = React.useState<signUpInput>({
    file: null,
    name: "",
    phoneNo: "",
    email: "",
    gender: "",
    password: "",
    rePassword: "",
    state: "",
    township: "",
    address: "",
  });
  const setFile = (f: File) => {
    setInput({ ...input, file: f });
  };
  const setName = (n: string) => {
    setInput({ ...input, name: n });
  };
  const setPhoneNo = (ph: string) => {
    setInput({ ...input, phoneNo: ph });
  };
  const setEmail = (m: string) => {
    setInput({ ...input, email: m });
  };
  const setGender = (g: string) => {
    setInput({ ...input, gender: g });
  };
  const setPassword = (pw: string) => {
    setInput({ ...input, password: pw });
  };
  const setRePassword = (pw: string) => {
    setInput({ ...input, rePassword: pw });
  };
  const setState = (s: state) => {
    setInput({ ...input, state: s });
  };
  const setTownship = (t: string) => {
    setInput({ ...input, township: t });
  };
  const setAddress = (add: string) => {
    setInput({ ...input, address: add });
  };
  const firstPageNotEmpty =
    input.name != "" &&
    input.phoneNo != "" &&
    input.email != "" &&
    input.gender != "" &&
    input.password != "" &&
    input.rePassword != "" &&
    input.password == input.rePassword;
  const secondPageNotEmpty =
    input.state != "" && input.township != "" && input.address != "";
  const [firstPage, setFirstPage] = React.useState(true);
  const validateInfo = () => {};
  const backOnClick = () => {
    if (firstPage) router.replace("/");
    else setFirstPage(true);
  };
  const t = useTranslations();
  return (
    <div className="lg:w-[1190px] w-full grid md:grid-cols-2 grid-cols-1 gap-10 mx-auto xl:py-20 py-10 sm:px-0 px-2">
      <div className="lg:w-[500px] md:w-[80%] sm:w-[80%] mx-auto h-fit flex flex-col gap-10">
        <SignUpBack onClick={backOnClick} firstPage={firstPage} />
        <AnimatePresence>
          {firstPage ? (
            <FirstPage
              setFile={setFile}
              name={input.name}
              setName={setName}
              phoneNo={input.phoneNo}
              setPhoneNo={setPhoneNo}
              email={input.email}
              setEmail={setEmail}
              gender={input.gender}
              setGender={setGender}
              password={input.password}
              setPassword={setPassword}
              rePassword={input.rePassword}
              setRePassword={setRePassword}
              firstPageNotEmpty={firstPageNotEmpty}
              setFirstPage={setFirstPage}
            />
          ) : (
            <SecondPage
              setFirstPage={setFirstPage}
              state={input.state}
              setState={setState}
              township={input.township}
              setTownship={setTownship}
              address={input.address}
              setAddress={setAddress}
              secondPageNotEmpty={secondPageNotEmpty}
            />
          )}
        </AnimatePresence>
        <p className="font-semibold text-center">
          {t("signup.already")}
          <Link
            href="/login"
            className="font-bold text-khaki-500 hover:text-khaki-700 duration-300"
          >
            {t("signin.sign-in")}
          </Link>
        </p>
      </div>
      <div className="xl:w-[601px] xl:h-[282px] w-[361px] h-[317px] md:block hidden relative xl:mt-0 mt-40">
        <Image
          src={SIGNUP}
          alt="signup"
          fill
          sizes="100%"
          className="size-full object-top object-cover"
        />
      </div>
    </div>
  );
}
