"use client";
import React from "react";
import Image from "next/image";
import SIGNUP from "../images/signup.png";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import Link from "next/link";
import SignUpBack from "./SignupBack";
import axios from "@/utils/axios";
import { generateUsername } from "unique-username-generator";
import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { CustomerCreate } from "@/types/customer";
import { showErrorAlert, showSuccessAlert } from "@/components/Alert";

export default function Signup() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [image, setImage] = React.useState<File | null>(null);
  const [customer, setCustomer] = React.useState<CustomerCreate>({
    name: "",
    username: generateUsername(),
    phone: "",
    email: "",
    gender: "Other",
    avatar: "",
    orders: [],
    password: "",
    password_confirm: "",
    customer_addresses: [
      {
        state: "",
        address: "",
        city: "",
        map: "",
        default: true,
      },
    ],
  });
  const [firstPage, setFirstPage] = React.useState(true);
  const validateInfo = () => {
    const newCustomer = { ...customer };
    const formData = new FormData();
    formData.append("image0", image!);
    formData.append("length", "1");
    setLoading(true);
    axios
      .post("file/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((data) => {
        newCustomer.avatar = data.data[0].full_url;
        axios
          .post("customer/", { data: newCustomer })
          .then(() => {
            showSuccessAlert({ text: "Successfully created an account!" });
            router.push("/login");
            setLoading(false);
          })
          .catch(() => {
            showErrorAlert({ text: "Something went wrong!" });
            router.push("/");
            setLoading(false);
          });
      });
  };
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
              customer={customer}
              setCustomer={setCustomer}
              setImage={setImage}
              setFirstPage={setFirstPage}
            />
          ) : (
            <SecondPage
              customer={customer}
              setCustomer={setCustomer}
              setFirstPage={setFirstPage}
              validateInfo={validateInfo}
              loading={loading}
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
