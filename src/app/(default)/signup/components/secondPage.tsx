import SecondPageHeading from "./secondPageHeading";
import TownshipInput from "@/components/input/townshipInput";
import StateInput from "@/components/input/stateInput";
import AddresssInput from "@/components/input/addressInput";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { useTranslations } from "next-intl";
import { state } from "@/types/type";

export default function SecondPage({
  setFirstPage,
  state,
  setState,
  township,
  setTownship,
  address,
  setAddress,
  secondPageNotEmpty,
}: {
  setFirstPage: Dispatch<SetStateAction<boolean>>;
  state: state;
  setState: (s: state) => void;
  township: string;
  setTownship: (ts: string) => void;
  address: string;
  setAddress: (add: string) => void;
  secondPageNotEmpty: boolean;
}) {
  const t = useTranslations("default");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col xl:gap-[50px] gap-[18px]"
    >
      <SecondPageHeading setFirstPage={setFirstPage} />
      <StateInput state={state} setState={setState} />
      <TownshipInput
        state={state}
        township={township}
        setTownship={setTownship}
      />
      <AddresssInput address={address} setAddress={setAddress} />
      <button
        disabled={!secondPageNotEmpty}
        onClick={() => {}}
        className={`w-full mt-5 py-[18px] xl:text-2xl font-semibold font-sora rounded-[18px] text-white bg-khaki-600 hover:bg-khaki-700 disabled:bg-white-700 duration-300`}
      >
        {t("continue")}
      </button>
    </motion.div>
  );
}
