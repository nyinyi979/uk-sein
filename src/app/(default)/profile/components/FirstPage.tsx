import Input from "@/components/input/Input";
import AddresssInput from "@/components/input/AddressInput";
import ImageUpload from "@/components/input/ImgUpload";
import GenderInput from "@/components/input/GenderInput";
import StateInput from "@/components/input/StateInput";
import CityInput from "@/components/input/TownshipInput";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { customer } from "@/types/order";
import { Dispatch, SetStateAction } from "react";
import { MEDIA_URL } from "@/utils/axios";

export default function FirstPage({
  customer,
  setCustomer,
  setImage,
}: {
  customer: customer;
  setCustomer: Dispatch<SetStateAction<customer>>;
  setImage: Dispatch<SetStateAction<File | null>>;
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
        <ImageUpload setFile={setImage} imgURL={MEDIA_URL + customer.avatar} />
        <Input
          value={customer.name}
          setValue={(name) => setCustomer({ ...customer, name })}
          id="name"
          label={t("name")}
          placeholder={t("name")}
          required
        />
        <Input
          value={customer.phone}
          setValue={(phone) => setCustomer({ ...customer, phone })}
          id="phone"
          label={t("phone")}
          placeholder={t("phone")}
          required
        />
        <Input
          value={customer.email}
          setValue={(email) => setCustomer({ ...customer, email })}
          id="mail"
          label={t("email")}
          placeholder={t("email")}
          required
        />
        <GenderInput
          gender={customer.gender}
          setGender={(gender) => setCustomer({ ...customer, gender })}
        />
      </div>
      <div className="flex flex-col gap-6 pb-[55px]">
        <p className="font-sora font-semibold text-2xl">Shopping Information</p>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-[26px]">
          <StateInput
            state={customer.customer_addresses[0].state}
            setState={(state) => {
              const newCustomer = { ...customer };
              newCustomer.customer_addresses[0].state = state;
              setCustomer(newCustomer);
            }}
          />
          <CityInput
            state={customer.customer_addresses[0].state}
            city={customer.customer_addresses[0].city}
            setCity={(city) => {
              const newCustomer = { ...customer };
              newCustomer.customer_addresses[0].city = city;
              setCustomer(newCustomer);
            }}
          />
        </div>
        <AddresssInput
          address={customer.customer_addresses[0].address}
          setAddress={(address) => {
            const newCustomer = { ...customer };
            newCustomer.customer_addresses[0].address = address;
            setCustomer(newCustomer);
          }}
        />
      </div>
    </motion.div>
  );
}
