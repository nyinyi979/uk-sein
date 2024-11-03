import React from "react";
import MM from "../images/mm.png";
import ENG from "../images/eng.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { Locale } from "@/config";
import { setUserLocale } from "@/services/locale";
import { useTranslations } from "next-intl";

export default function WorldDropdown({ hide }: { hide: () => void }) {
  const [isPending, startTransition] = React.useTransition();
  const t = useTranslations("international");
  function onChange(value: string) {
    hide();
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }
  return (
    <motion.div
      animate={{ translateY: [20, 0], opacity: [0, 1] }}
      exit={{
        translateY: 20,
        opacity: 0,
        transition: {
          stiffness: 19.75,
          mass: 1,
          damping: 6.67,
        },
      }}
      transition={{
        stiffness: 19.75,
        mass: 1,
        damping: 6.67,
      }}
      className="w-[200px] absolute right-0 -bottom-[8.5rem] p-2.5 rounded-[15px] bg-white shadow-dropdown"
    >
      <button
        className="w-[180px] flex flex-row align-middle justify-items-center gap-3 py-3 px-2.5 rounded-[10px] hover:bg-grey-50 duration-300"
        onClick={() => onChange("en")}
      >
        <div className="size-8 relative">
          <Image
            src={ENG}
            alt="english"
            fill
            sizes="100%"
            className="size-full object-cover"
          />
        </div>
        <p className="font-semibold">{t("English")}</p>
      </button>
      <button
        className="w-[180px] flex flex-row align-middle justify-items-center gap-3 py-3 px-2.5 rounded-[10px] hover:bg-grey-50 duration-300"
        onClick={() => onChange("my")}
      >
        <div className="size-8 relative">
          <Image
            src={MM}
            alt="myanmar"
            fill
            sizes="100%"
            className="size-full object-cover"
          />
        </div>
        <p className="font-semibold">{t("Myanmar")}</p>
      </button>
    </motion.div>
  );
}
