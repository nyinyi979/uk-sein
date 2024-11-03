import FirstPageHeading from "./FirstPageHeading";
import ImageUpload from "@/components/input/ImgUpload";
import GenderInput from "@/components/input/GenderInput";
import PasswordInput from "@/components/input/PasswordInput";
import Input from "@/components/input/Input";
import { motion } from "framer-motion";
import React, { Dispatch, SetStateAction } from "react";
import { useTranslations } from "next-intl";
import { CustomerCreate } from "@/types/customer";

export default function FirstPage({
  customer,
  setCustomer,
  setImage,
  setFirstPage,
}: {
  setFirstPage: Dispatch<SetStateAction<boolean>>;
  customer: CustomerCreate;
  setCustomer: Dispatch<SetStateAction<CustomerCreate>>;
  setImage: Dispatch<SetStateAction<null | File>>;
}) {
  const firstPageNotEmpty =
    customer.name != "" &&
    customer.phone != "" &&
    customer.gender != "" &&
    customer.password != "" &&
    customer.password_confirm != "" &&
    customer.phone.length >= 7 &&
    customer.password.length >= 8 &&
    customer.password === customer.password_confirm;
  const [error, setError] = React.useState("");
  const t = useTranslations();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col xl:gap-[50px] gap-[18px]"
    >
      <FirstPageHeading />
      <ImageUpload setFile={setImage} />
      <Input
        value={customer.name}
        setValue={(name) => setCustomer({ ...customer, name })}
        id="name"
        label={t("input.name")}
        placeholder={t("input.name")}
        required
      />
      <Input
        value={customer.phone}
        setValue={(phone) => {
          setCustomer({ ...customer, phone });
          if (phone.length < 7)
            setError("Phone number must be longer than 7 letters!");
          else setError("");
        }}
        id="phone"
        label={t("input.phone")}
        placeholder={t("input.phone")}
        required
      />
      <Input
        value={customer.email}
        setValue={(email) => setCustomer({ ...customer, email })}
        id="mail"
        label={t("input.email")}
        placeholder={t("input.email")}
      />
      <GenderInput
        gender={customer.gender}
        setGender={(gender) => setCustomer({ ...customer, gender })}
      />
      <PasswordInput
        id="password"
        displayedLabel={t("input.password")}
        password={customer.password}
        setPassword={(password) => {
          setCustomer({ ...customer, password });
          if (password.length < 8)
            setError("Password must contain eight letters!");
          else setError("");
        }}
      />
      <PasswordInput
        id="repassword"
        displayedLabel={t("input.confirm-password")}
        password={customer.password_confirm}
        setPassword={(password_confirm) =>
          setCustomer({ ...customer, password_confirm })
        }
      />
      {error !== "" && <span className="font-bold text-reject">{error}</span>}
      <button
        disabled={!firstPageNotEmpty}
        onClick={() => setFirstPage(false)}
        className={`w-full py-[18px] mt-5 xl:text-2xl font-semibold font-sora rounded-[18px] text-white bg-khaki-600 hover:bg-khaki-700 disabled:bg-white-700 duration-300`}
      >
        {t("default.continue")}
      </button>
    </motion.div>
  );
}
