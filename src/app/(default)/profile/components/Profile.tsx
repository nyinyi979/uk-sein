"use client";
import React from "react";
import ProfileTitle from "./Title";
import ProfileTabs from "./Tabs";
import SecondPage from "./SecondPage";
import FirstPage from "./FirstPage";
import axios from "@/utils/axios";
import { AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useUserStore } from "@/store/clientData";
import { showErrorAlert, showSuccessAlert } from "@/components/Alert";
import { customer } from "@/types/order";

export default function Profile() {
  const { customer, token, setCustomer } = useUserStore((state) => state);
  const [loading, setLoading] = React.useState(true);
  const [input, setInput] = React.useState({ ...customer });
  const [password, setPassword] = React.useState({
    phone: customer!.phone || "",
    old_password: "",
    password: "",
    re_password: "",
  });
  const [image, setImage] = React.useState<File | null>(null);
  const [page, setPage] = React.useState(0);
  const updatePage = (p: number) => {
    setPage(p);
  };
  const updateCustomer = (c: customer) => {
    axios
      .put("customer/", { data: input })
      .then((data) => {
        setCustomer(data.data);
        showSuccessAlert({ text: "Updated successfully!" });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const validateInfo = () => {
    setLoading(true);
    const newCustomer = { ...input };
    if (page === 0) {
      if (image) {
        const formData = new FormData();
        formData.append("image0", image as Blob);
        formData.append("length", "1");

        axios
          .post("file/", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            newCustomer.avatar = response.data[0].full_url;
            updateCustomer(newCustomer);
          });
      } else updateCustomer(newCustomer);
    } else {
      if (
        password.phone === "" ||
        password.old_password === "" ||
        password.password === ""
      ) {
        showErrorAlert({ text: "Please put all the required value" });
        return;
      } else if (password.password !== password.re_password) {
        showErrorAlert({ text: "Password must be same!" });
        return;
      }
      axios
        .post("auth/change-password/", { data: password })
        .then((data) => {
          showSuccessAlert({ text: "Change password successfully!" });
        })
        .catch((err) => {
          showErrorAlert({ text: err.code });
        })
        .finally(() => {
          setLoading(false);
          setPassword({
            ...password,
            old_password: "",
            password: "",
            re_password: "",
          });
        });
    }
  };

  React.useEffect(() => {
    setLoading(true);
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const cid = JSON.parse(localStorage.getItem("user")!);
      axios.get("customer/user/", { params: { uid: cid.id } }).then((data) => {
        setCustomer(data.data);
        setLoading(false);
      });
    }
  }, [token]);
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
        {loading ? (
          <div className="w-[100px] h-12 flex justify-center items-center bg-grey-50">
            <span className="loader"></span>
          </div>
        ) : (
          <button
            onClick={validateInfo}
            className="md:w-fit w-full h-[50px] block py-4 px-[28px] rounded-xl text-sm text-center font-bold bg-khaki-500 text-white hover:bg-khaki-700 duration-300"
          >
            {page === 0 ? t("save-changes") : t("save-password")}
          </button>
        )}
      </div>
    </div>
  );
}
