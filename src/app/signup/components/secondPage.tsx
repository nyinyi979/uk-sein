import StateInput from "../../components/stateInput";
import TownshipInput from "../../components/townshipInput";
import AddresssInput from "../../components/addressInput";
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
        className="back-arr-text mx-auto"
      >
        <svg
          width="25"
          height="21"
          viewBox="0 0 25 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M25.0012 10.5014C25.0012 10.8992 24.8431 11.2807 24.5618 11.562C24.2805 11.8433 23.899 12.0014 23.5012 12.0014H5.12618L11.5662 18.4401C11.848 18.7219 12.0063 19.1041 12.0063 19.5026C12.0063 19.9011 11.848 20.2833 11.5662 20.5651C11.2844 20.8469 10.9022 21.0052 10.5037 21.0052C10.1052 21.0052 9.72297 20.8469 9.44118 20.5651L0.441183 11.5651C0.301343 11.4257 0.190387 11.2602 0.114679 11.0778C0.0389713 10.8955 0 10.7 0 10.5026C0 10.3052 0.0389713 10.1097 0.114679 9.92737C0.190387 9.74505 0.301343 9.57946 0.441183 9.4401L9.44118 0.440102C9.58071 0.300572 9.74636 0.189891 9.92866 0.114378C10.111 0.0388656 10.3064 0 10.5037 0C10.701 0 10.8964 0.0388656 11.0787 0.114378C11.261 0.189891 11.4267 0.300572 11.5662 0.440102C11.7057 0.579631 11.8164 0.745277 11.8919 0.927581C11.9674 1.10988 12.0063 1.30528 12.0063 1.5026C12.0063 1.69993 11.9674 1.89532 11.8919 2.07762C11.8164 2.25993 11.7057 2.42557 11.5662 2.5651L5.12618 9.00135H23.5012C23.899 9.00135 24.2805 9.15939 24.5618 9.44069C24.8431 9.722 25.0012 10.1035 25.0012 10.5014Z" />
        </svg>
        <span>Back to Personal Information</span>
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
