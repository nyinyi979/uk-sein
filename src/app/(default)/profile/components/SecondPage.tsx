import PasswordInput from "@/components/input/PasswordInput";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React, { Dispatch, SetStateAction } from "react";

export default function SecondPage({
  password,
  setPassword,
}: {
  password: password;
  setPassword: Dispatch<SetStateAction<password>>;
}) {
  const [error, setError] = React.useState("");
  const t = useTranslations("input");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col gap-[50px]"
      layout
    >
      <div className="flex flex-col gap-6 pb-[55px] md:border-b border-grey-100 border-dotted">
        <p className="font-sora font-semibold text-2xl">Personal Information</p>
        <PasswordInput
          displayedLabel={t("current-password")}
          id="c_password"
          password={password.old_password}
          setPassword={(old_password) =>
            setPassword({ ...password, old_password })
          }
        />
        <PasswordInput
          displayedLabel={t("new-password")}
          id="new_password"
          password={password.password}
          setPassword={(password_) => {
            setPassword({ ...password, password: password_ });
            if (password_.length < 7)
              setError("Password must be 8 letters and above!");
          }}
        />
        <PasswordInput
          displayedLabel={t("renew-password")}
          id="re_new_password"
          password={password.re_password}
          setPassword={(re_password) => {
            setPassword({ ...password, re_password });
            if (re_password !== password.password)
              setError("Passwords must be same!");
          }}
        />
        {error === "" && <p className="font-bold text-reject">{error}</p>}
      </div>
    </motion.div>
  );
}
interface password {
  phone: string;
  old_password: string;
  password: string;
  re_password: string;
}
