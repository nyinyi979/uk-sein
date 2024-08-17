import FirstPageHeading from "./FirstPageHeading";
import ImageUpload from "@/components/input/ImgUpload";
import GenderInput from "@/components/input/GenderInput";
import PasswordInput from "@/components/input/PasswordInput";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { useTranslations } from "next-intl";
import Input from "@/components/input/Input";

export default function FirstPage({
  setFile,
  name,
  setName,
  phoneNo,
  setPhoneNo,
  email,
  setEmail,
  gender,
  setGender,
  password,
  setPassword,
  rePassword,
  setRePassword,
  firstPageNotEmpty,
  setFirstPage,
}: {
  setFile: (f: File) => void;
  name: string;
  setName: (name: string) => void;
  phoneNo: string;
  setPhoneNo: (ph: string) => void;
  email: string;
  setEmail: (mail: string) => void;
  gender: string;
  setGender: (gender: string) => void;
  password: string;
  setPassword: (pw: string) => void;
  rePassword: string;
  setRePassword: (pw: string) => void;
  firstPageNotEmpty: boolean;
  setFirstPage: Dispatch<SetStateAction<boolean>>;
}) {
  const t = useTranslations();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col xl:gap-[50px] gap-[18px]"
    >
      <FirstPageHeading />
      <ImageUpload setFile={setFile} />
      <Input
        value={name}
        setValue={setName}
        id="name"
        label={t("input.name")}
        placeholder={t("input.name")}
        required
      />
      <Input
        value={phoneNo}
        setValue={setPhoneNo}
        id="phone"
        label={t("input.phone")}
        placeholder={t("input.phone")}
        required
      />
      <Input
        value={email}
        setValue={setEmail}
        id="mail"
        label={t("input.email")}
        placeholder={t("input.email")}
        required
      />
      <GenderInput gender={gender} setGender={setGender} />
      <PasswordInput
        id="password"
        displayedLabel={t("input.password")}
        password={password}
        setPassword={setPassword}
      />
      <PasswordInput
        id="repassword"
        displayedLabel={t("input.confirm-password")}
        password={rePassword}
        setPassword={setRePassword}
      />
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
