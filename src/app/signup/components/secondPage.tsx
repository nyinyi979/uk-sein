import Image from "next/image";
import BackArr from "@/app/svg/backArrow.svg";
import StateInput from "./stateInput";
import TownshipInput from "./township";
import AddresssInput from "./addressInput";
import { addresses } from "../../types/addresses";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { state } from "@/app/types/type";
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
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col gap-[50px]"
    >
      <button
        onClick={() => setFirstPage(true)}
        className="mr-auto text-khaki-500 hover:text-khaki-700"
      >
        <Image
          src={BackArr}
          alt="back arrow"
          width={20}
          height={20}
          className="inline-block mx-2 -mt-1"
        />{" "}
        Back to Personal Information
      </button>
      <p className="font-sora font-semibold text-2xl">Shopping Information</p>
      <StateInput state={state} setState={setState} />
      <TownshipInput
        allTownships={addresses[state]}
        township={township}
        setTownship={setTownship}
      />
      <AddresssInput address={address} setAddress={setAddress} />
      <button
        disabled={!secondPageNotEmpty}
        onClick={() => {}}
        className={`w-full h-[78px] mt-5 text-2xl font-semibold font-sora rounded-[18px] text-white bg-khaki-600 hover:bg-khaki-700 disabled:bg-white-700 duration-300`}
      >
        Continue
      </button>
    </motion.div>
  );
}
