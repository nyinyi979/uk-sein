"use client";
import React from "react";
import ProfileTitle from "./Title";
import ProfileTabs from "./Tabs";
import SecondPage from "./SecondPage";
import FirstPage from "./FirstPage";
import { AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useUserStore } from "@/store/clientData";

export default function Profile() {
  const { customer } = useUserStore((state) => state);
  const [input, setInput] = React.useState({ ...customer! });
  const [password, setPassword] = React.useState({
    phone: customer!.phone||"",
    old_password: "",
    password: "",
    re_password: "",
  });
  const [image, setImage] = React.useState<File | null>(null);
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
              customer={input}
              setCustomer={setInput}
              setImage={setImage}
            />
          ) : (
            <SecondPage password={password} setPassword={setPassword} />
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
