import ImageUpload from "../../components/imgUpload";
import NameInput from "../../components/nameInput";
import PhoneNoInput from "../../components/phoneNoInput";
import MailInput from "../../components/mailInput";
import GenderInput from "../../components/gender";
import PasswordInput from "../../components/password";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

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
  gender: "" | "Male" | "Female" | "Other";
  setGender: (gender: "" | "Male" | "Female" | "Other") => void;
  password: string;
  setPassword: (pw: string) => void;
  rePassword: string;
  setRePassword: (pw: string) => void;
  firstPageNotEmpty: boolean;
  setFirstPage: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col gap-[50px]"
    >
      <p className="font-sora font-semibold text-2xl">Personal Information</p>
      <ImageUpload setFile={setFile} />
      <NameInput name={name} setName={setName} />
      <PhoneNoInput phone={phoneNo} setPhone={setPhoneNo} />
      <MailInput mail={email} setMail={setEmail} />
      <GenderInput gender={gender} setGender={setGender} />
      <PasswordInput
        id="password"
        displayedLabel="Password"
        password={password}
        setPassword={setPassword}
      />
      <PasswordInput
        id="repassword"
        displayedLabel="Confirm Password"
        password={rePassword}
        setPassword={setRePassword}
      />
      <button
        disabled={!firstPageNotEmpty}
        onClick={() => setFirstPage(false)}
        className={`w-full h-[78px] mt-5 text-2xl font-semibold font-sora rounded-[18px] text-white bg-khaki-600 hover:bg-khaki-700 disabled:bg-white-700 duration-300`}
      >
        Continue
      </button>
    </motion.div>
  );
}
