"use client";
import React from "react";
import MessageInput from "./MessageInput";
import { useTranslations } from "next-intl";
import Input from "@/components/input/Input";

export default function JoinOurCommunity() {
  const [input, setInput] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const setName = (n: string) => {
    setInput({ ...input, name: n });
  };
  const setEmail = (m: string) => {
    setInput({ ...input, email: m });
  };
  const setMessage = (m: string) => {
    setInput({ ...input, message: m });
  };
  const disabled =
    input.name === "" || input.email === "" || input.message === "";
  const t = useTranslations();
  return (
    <div className="flex flex-col xl:gap-[50px] gap-8">
      <div className="flex flex-col gap-[18px]">
        <p className="font-sora font-bold xl:text-5xl text-2xl">
          {t("contact.join-our-community")}
        </p>
        <p className="xl:w-[931px] md:w-[600px] w-full font-normal xl:text-xl md:text-base text-sm text-grey-400 xl:leading-[25px] md:leading-5 leading-[17.5px]">
          <span className="xl:block hidden">
            {t("contact.ready-to-transform")}
          </span>
          {t("contact.follow-us")}
        </p>
      </div>
      <form onSubmit={() => {}} className="flex flex-col gap-8">
        <Input
          value={input.name}
          setValue={setName}
          id="name"
          label={t("input.name")}
          placeholder={t("input.name")}
          required
        />
        <Input
          value={input.email}
          setValue={setEmail}
          id="email"
          label={t("input.email")}
          placeholder={t("input.email")}
          required
        />
        <MessageInput message={input.message} setMessage={setMessage} />
        <button
          disabled={disabled}
          className="w-fit h-[50px] block py-[12px] px-[28px] rounded-xl text-lg text-center ml-auto bg-khaki-500 font-semibold text-white hover:bg-khaki-700 disabled:bg-grey-50 duration-300"
        >
          {t("contact.submit-now")}
        </button>
      </form>
    </div>
  );
}
