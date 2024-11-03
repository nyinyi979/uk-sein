import AddresssInput from "@/components/input/AddressInput";
import StateInput from "@/components/input/StateInput";
import Input from "@/components/input/Input";
import CityInput from "@/components/input/TownshipInput";
import React, { Dispatch, SetStateAction } from "react";
import { order } from "@/types/order";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { states } from "@/types/address";

export default function FirstPage({
  order,
  setOrder,
}: {
  order: order;
  setOrder: Dispatch<SetStateAction<order>>;
}) {
  const t = useTranslations();
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
          {t("signup.personal")}
        </p>
        <Input
          value={order.customer_name}
          setValue={(customer_name) => setOrder({ ...order, customer_name })}
          id="name"
          label={t("input.name")}
          placeholder={t("input.name")}
          required
        />
        <Input
          value={order.phone}
          setValue={(phone) => setOrder({ ...order, phone })}
          id="phone"
          label={t("input.phone")}
          placeholder={t("input.phone")}
          required
        />
        <Input
          value={order.customer_email}
          setValue={(customer_email) => setOrder({ ...order, customer_email })}
          id="email"
          label={t("input.email")}
          placeholder={t("input.email")}
          required
        />
      </div>
      <div className="flex flex-col gap-6 pb-[55px]">
        <p className="font-sora font-semibold text-2xl">
          {t("signup.shipping-info")}
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-[26px]">
          <StateInput
            state={order.order_address.state}
            setState={(state) => {
              const newOrder = { ...order };
              newOrder.order_address.state = state;
              setOrder(newOrder);
            }}
            required
          />
          <CityInput
            state={order.order_address.state as states}
            city={order.order_address.city}
            setCity={(city: string) => {
              const newOrder = { ...order };
              newOrder.order_address.city = city;
              setOrder(newOrder);
            }}
            required
          />
        </div>
        <AddresssInput
          address={order.order_address.address}
          setAddress={(address) => {
            const newOrder = { ...order };
            newOrder.order_address.address = address;
            setOrder(newOrder);
          }}
          required
        />
      </div>
    </motion.div>
  );
}
