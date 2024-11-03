"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import UKSEIN from "../images/uksein.png";
import PasswordInput from "@/components/input/PasswordInput";
import LoginHeader from "./LoginHeader";
import LoginBack from "./LoginBack";
import Input from "@/components/input/Input";
import axios from "@/utils/axios";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useUserStore } from "@/store/clientData";
import { showErrorAlert, showSuccessAlert } from "@/components/Alert";

export default function Login() {
  const [input, setInput] = React.useState({
    phoneNumber: "",
    password: "",
  });
  const [loading, setLoading] = React.useState(false);
  const setPhoneNo = (ph: string) => {
    setInput({ ...input, phoneNumber: ph });
  };
  const setPassword = (pw: string) => {
    setInput({ ...input, password: pw });
  };
  const router = useRouter();
  const { setToken, setCustomer } = useUserStore((state) => state);
  const handleSignIn = async () => {
    setLoading(true);
    try {
      const response = await axios.post("auth/login/", {
        phone: input.phoneNumber,
        password: input.password,
      });
      axios.defaults.headers.common["Authorization"] =
        `Bearer ${response.data.access}`;
      setToken(response.data.access);
      setLoading(false);
      router.push("/");
      showSuccessAlert({ text: "Successfully login!" });
    } catch (err) {
      console.log(err);
      showErrorAlert({ text: "Unknown Error" });
      setLoading(false);
    }
  };
  const disabled = input.phoneNumber !== "" && input.password !== "";
  const t = useTranslations();
  return (
    <div className="xl:w-fit w-[80%] grid md:grid-cols-2 xl:gap-28 md:gap-10 gap-5 mx-auto md:py-20 py-10 sm:px-0 px-2">
      <div className="xl:w-[500px] w-full flex flex-col gap-10 mx-auto">
        <LoginBack />
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
          }}
          className="flex flex-col gap-10"
        >
          <LoginHeader />
          <div className="flex flex-col gap-[50px]">
            <div className="flex flex-col md:gap-8 gap-[18px]">
              <Input
                value={input.phoneNumber}
                setValue={setPhoneNo}
                id="phone"
                label={t("input.phone")}
                placeholder={t("input.phone")}
                required
              />
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
            onClick={handleSignIn}
            type="submit"
            className={`w-full h-[78px] rounded-[18px] font-semibold font-sora xl:text-2xl ${disabled ? "bg-khaki-600 text-white hover:bg-khaki-700" : "bg-white-700 text-white"} duration-300`}
          >
            {loading ? <div className="loader"></div> : t("signin.sign-in")}
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
