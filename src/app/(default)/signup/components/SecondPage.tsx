import SecondPageHeading from "./SecondPageHeading";
import TownshipInput from "@/components/input/TownshipInput";
import StateInput from "@/components/input/StateInput";
import AddresssInput from "@/components/input/AddressInput";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { useTranslations } from "next-intl";
import { CustomerCreate } from "@/types/customer";
import { states } from "@/types/address";

export default function SecondPage({
  customer,
  setCustomer,
  validateInfo,
  setFirstPage,
}: {
  customer: CustomerCreate;
  setCustomer: Dispatch<SetStateAction<CustomerCreate>>;
  validateInfo: () => void;
  setFirstPage: Dispatch<SetStateAction<boolean>>;
}) {
  const customer_addresses = customer.customer_addresses[0];
  const secondPageNotEmpty =
    customer_addresses.state !== "" &&
    customer_addresses.city !== "" &&
    customer_addresses.address !== "";
  const t = useTranslations("default");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col xl:gap-[50px] gap-[18px]"
    >
      <SecondPageHeading setFirstPage={setFirstPage} />
      <StateInput
        state={customer_addresses.state}
        setState={(state) => {
          const newCustomer = { ...customer };
          newCustomer.customer_addresses[0].state = state as states;
          setCustomer(newCustomer);
        }}
      />
      <TownshipInput
        state={customer_addresses.state}
        city={customer_addresses.city}
        setCity={(city) => {
          const newCustomer = { ...customer };
          newCustomer.customer_addresses[0].city = city;
          setCustomer(newCustomer);
        }}
      />
      <AddresssInput
        address={customer_addresses.address}
        setAddress={(address) => {
          const newCustomer = { ...customer };
          newCustomer.customer_addresses[0].address = address;
          setCustomer(newCustomer);
        }}
      />
      <button
        disabled={!secondPageNotEmpty}
        onClick={validateInfo}
        className={`w-full mt-5 py-[18px] xl:text-2xl font-semibold font-sora rounded-[18px] text-white bg-khaki-600 hover:bg-khaki-700 disabled:bg-white-700 duration-300`}
      >
        {t("continue")}
      </button>
    </motion.div>
  );
}
