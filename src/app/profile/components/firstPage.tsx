import TownshipInput from "@/app/components/townshipInput";
import AddresssInput from "@/app/components/addressInput";
import ImageUpload from "@/app/components/imgUpload";
import NameInput from "@/app/components/nameInput";
import PhoneNoInput from "@/app/components/phoneNoInput";
import MailInput from "@/app/components/mailInput";
import GenderInput from "@/app/components/gender";
import StateInput from "@/app/components/stateInput";
import { state } from "@/app/types/type";
import { addresses } from "@/app/types/addresses";
import { motion } from "framer-motion";

export default function FirstPage({
  imgURL,
  setFile,
  name,
  setName,
  phoneNo,
  setPhoneNo,
  email,
  setEmail,
  gender,
  setGender,
  state,
  setState,
  township,
  setTownship,
  address,
  setAddress,
}: {
  imgURL: string | undefined;
  setFile: (f: File) => void;
  name: string;
  setName: (name: string) => void;
  phoneNo: string;
  setPhoneNo: (ph: string) => void;
  email: string;
  setEmail: (mail: string) => void;
  gender: "" | "Male" | "Female" | "Other";
  setGender: (gender: "" | "Male" | "Female" | "Other") => void;
  state: state;
  setState: (s: state) => void;
  township: string;
  setTownship: (n: string) => void;
  address: string;
  setAddress: (add: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col gap-[50px]"
      layout
    >
      <div className="flex flex-col gap-6 pb-[55px] border-b border-grey-100 border-dotted">
        <p className="font-sora font-semibold text-2xl">Personal Information</p>
        <ImageUpload setFile={setFile} imgURL={imgURL} />
        <NameInput name={name} setName={setName} />
        <PhoneNoInput phone={phoneNo} setPhone={setPhoneNo} />
        <MailInput mail={email} setMail={setEmail} />
        <GenderInput gender={gender} setGender={setGender} />
      </div>
      <div className="flex flex-col gap-6 pb-[55px]">
        <p className="font-sora font-semibold text-2xl">Shopping Information</p>
        <div className="grid grid-cols-2 gap-[26px]">
          <StateInput state={state} setState={setState} />
          <TownshipInput
            allTownships={addresses[state]}
            township={township}
            setTownship={setTownship}
          />
        </div>
        <AddresssInput address={address} setAddress={setAddress} />
      </div>
    </motion.div>
  );
}
