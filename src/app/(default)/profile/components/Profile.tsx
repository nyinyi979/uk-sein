"use client";
import React from "react";
import ProfileTitle from "./Title";
import ProfileTabs from "./Tabs";
import SecondPage from "./SecondPage";
import FirstPage from "./FirstPage";
import { AnimatePresence } from "framer-motion";
import { signUpInputInProfile, state } from "@/types/type";
import { useTranslations } from "next-intl";

export default function Signup() {
  const [input, setInput] = React.useState<signUpInputInProfile>({
    file: null,
    imgURL: "/sampleDiscount.png",
    name: "Ko Khant",
    phoneNo: "0964647576",
    email: "kokhant123@gmail.com",
    gender: "Male",
    newPassword: "",
    newRePassword: "",
    currentPassword: "",
    state: "",
    township: "",
    address: "",
  });
  const setFile = (f: File) => {
    setInput({ ...input, file: f, imgURL: undefined });
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
  const setCurrentPassword = (pw: string) => {
    setInput({ ...input, currentPassword: pw });
  };
  const setNewPassword = (pw: string) => {
    setInput({ ...input, newPassword: pw });
  };
  const setReNewPassword = (pw: string) => {
    setInput({ ...input, newRePassword: pw });
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
    input.state != "" &&
    input.township != "" &&
    input.address != "";
  const secondPageNotEmpty =
    input.currentPassword !== "" &&
    input.newPassword !== "" &&
    input.newRePassword !== "" &&
    input.newPassword !== input.newRePassword;
  const [page, setPage] = React.useState(0);
  const updatePage = (p: number) => {
    setPage(p);
  };
  const validateInfo = () => {
    if (page === 0) {
    } else {
    }
  };
  const t = useTranslations("profile");
  return (
    <div className="xl:w-[1192px] md:w-[492px] sm:w-[340px] w-full flex flex-col xl:gap-10 md:gap-8 gap-6 xl:mx-auto md:ml-10 mx-auto pt-10 pb-20 sm:px-0 px-2">
      <ProfileTitle />
      <ProfileTabs page={page} updatePage={updatePage} />
      <div className="xl:w-[626px] w-full h-fit flex flex-col md:gap-[50px] gap-0">
        <AnimatePresence>
          {page === 0 ? (
            <FirstPage
              imgURL={input.imgURL}
              setFile={setFile}
              name={input.name}
              setName={setName}
              phoneNo={input.phoneNo}
              setPhoneNo={setPhoneNo}
              email={input.email}
              setEmail={setEmail}
              gender={input.gender}
              setGender={setGender}
              state={input.state}
              setState={setState}
              township={input.township}
              setTownship={setTownship}
              address={input.address}
              setAddress={setAddress}
            />
          ) : (
            <SecondPage
              currentPassword={input.currentPassword}
              setCurrentPassword={setCurrentPassword}
              newPassword={input.newPassword}
              setNewPassword={setNewPassword}
              reNewPassword={input.newRePassword}
              setReNewPassword={setReNewPassword}
            />
          )}
        </AnimatePresence>
        <button
          onClick={validateInfo}
          className="md:w-fit w-full h-[50px] block py-4 px-[28px] rounded-xl text-sm text-center font-bold bg-khaki-500 text-white hover:bg-khaki-700 duration-300"
        >
          {page === 0 ? t("save-changes") : t("save-password")}
        </button>
      </div>
    </div>
  );
}
