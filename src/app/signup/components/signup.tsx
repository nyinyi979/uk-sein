"use client";
import React from "react";
import Image from "next/image";
import SIGNUP from "../images/signup.png";
import FirstPage from "./firstPage";
import { AnimatePresence } from "framer-motion";
import { signUpInput, state } from "@/app/types/type";
import SecondPage from "./secondPage";
export default function Signup() {
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
    setInput({ ...input, file: f});
  }
  const setName = (n: string) => {
    setInput({ ...input, name: n });
  };
  const setPhoneNo = (ph: string) => {
    setInput({ ...input, phoneNo: ph });
  };
  const setEmail = (m: string) => {
    setInput({ ...input, email: m });
  };
  const setGender = (g: "" | "Male" | "Female" | "Other") => {
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
  return (
    <div className="px-[125px] my-[100px] grid grid-cols-2 pt-20 pb-10">
      <div className="w-[500px] h-fit flex flex-col gap-10">
        <p className="font-sora font-bold text-[42px]">Create New Account👋</p>
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
      </div>
      <Image
        src={SIGNUP}
        alt="signup"
        width={300}
        className="w-full h-auto object-top object-contain"
      />
    </div>
  );
}
