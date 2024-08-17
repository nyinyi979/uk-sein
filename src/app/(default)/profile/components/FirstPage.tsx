import TownshipInput from "@/components/input/TownshipInput";
import AddresssInput from "@/components/input/AddressInput";
import ImageUpload from "@/components/input/ImgUpload";
import GenderInput from "@/components/input/GenderInput";
import StateInput from "@/components/input/StateInput";
import { state } from "@/types/type";
import { motion } from "framer-motion";
import Input from "@/components/input/Input";
import { useTranslations } from "next-intl";

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
  gender: string;
  setGender: (gender: string) => void;
  state: state;
  setState: (s: state) => void;
  township: string;
  setTownship: (n: string) => void;
  address: string;
  setAddress: (add: string) => void;
}) {
  const t = useTranslations("input");
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
        <Input
          value={name}
          setValue={setName}
          id="name"
          label={t("name")}
          placeholder={t("name")}
          required
        />
        <Input
          value={phoneNo}
          setValue={setPhoneNo}
          id="phone"
          label={t("phone")}
          placeholder={t("phone")}
          required
        />
        <Input
          value={email}
          setValue={setEmail}
          id="mail"
          label={t("email")}
          placeholder={t("email")}
          required
        />
        <GenderInput gender={gender} setGender={setGender} />
      </div>
      <div className="flex flex-col gap-6 pb-[55px]">
        <p className="font-sora font-semibold text-2xl">Shopping Information</p>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-[26px]">
          <StateInput state={state} setState={setState} />
          <TownshipInput
            state={state}
            township={township}
            setTownship={setTownship}
          />
        </div>
        <AddresssInput address={address} setAddress={setAddress} />
      </div>
    </motion.div>
  );
}
