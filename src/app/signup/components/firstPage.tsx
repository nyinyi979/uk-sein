import ImageUpload from "../../../components/input/imgUpload";
import NameInput from "../../../components/input/nameInput";
import PhoneNoInput from "../../../components/input/phoneNoInput";
import MailInput from "../../../components/input/mailInput";
import GenderInput from "../../../components/input/genderInput";
import PasswordInput from "../../../components/input/passwordInput";
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
      className="flex flex-col xl:gap-[50px] gap-[18px]"
    >
      <div className="flex flex-col gap-2.5 md:mt-10">
        <p className="font-sora font-bold xl:text-[42px] md:text-[32px] text-2xl">
          Create New Account👋
        </p>
        <p className="text-grey-200 md:text-base text-sm">
          Please enter your personal information to start.
        </p>
      </div>
      <p className="font-sora font-semibold text-2xl mt-10">Personal Information</p>
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
        className={`w-full py-[18px] mt-5 xl:text-2xl font-semibold font-sora rounded-[18px] text-white bg-khaki-600 hover:bg-khaki-700 disabled:bg-white-700 duration-300`}
      >
        Continue
      </button>
    </motion.div>
  );
}
