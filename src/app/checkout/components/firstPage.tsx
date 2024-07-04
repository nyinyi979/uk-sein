import TownshipInput from "@/components/input/townshipInput";
import AddresssInput from "@/components/input/addressInput";
import NameInput from "@/components/input/nameInput";
import PhoneNoInput from "@/components/input/phoneNoInput";
import MailInput from "@/components/input/mailInput";
import StateInput from "@/components/input/stateInput";
import { state } from "@/app/types/type";
import { addresses } from "@/app/types/addresses";
import { motion } from "framer-motion";

export default function FirstPage({
  name,
  setName,
  phoneNo,
  setPhoneNo,
  email,
  setEmail,
  state,
  setState,
  township,
  setTownship,
  address,
  setAddress,
}: {
  name: string;
  setName: (name: string) => void;
  phoneNo: string;
  setPhoneNo: (ph: string) => void;
  email: string;
  setEmail: (mail: string) => void;
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
        <p className="font-sora font-semibold md:text-2xl text-lg">
          Personal Information
        </p>
        <NameInput name={name} setName={setName} />
        <PhoneNoInput phone={phoneNo} setPhone={setPhoneNo} />
        <MailInput mail={email} setMail={setEmail} />
      </div>
      <div className="flex flex-col gap-6 pb-[55px]">
        <p className="font-sora font-semibold text-2xl">Shopping Information</p>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-[26px]">
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
