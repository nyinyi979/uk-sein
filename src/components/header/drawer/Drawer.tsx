import NavigationLinks from "./NavigationLinks";
import ProfileLinks from "./ProfileLink";
import SignOutIn from "./SignOutIn";
import { motion } from "framer-motion";
import { useUserStore } from "@/store/clientData";
import { useTranslations } from "next-intl";

export default function Drawer({ hide }: { hide: () => void }) {
  const { token } = useUserStore();
  const t = useTranslations("product");
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      exit={{
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
      className="fixed size-full xl:hidden block top-0 left-0 z-[300] bg-popup-bg"
      onClick={hide}
    >
      <motion.div
        animate={{ translateX: [-200, 0] }}
        exit={{
          translateX: -200,
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
        onClick={(ev) => ev.stopPropagation()}
        className="md:w-[350px] sm:w-[276px] w-fit h-full pt-10 md:pl-[50px] sm:pl-5 pl-2 pb-10 bg-white shadow-drawer overflow-y-auto"
      >
        <div className="w-fit flex flex-col gap-6">
          <p className="font-semibold text-2xl">{t("explore-now")}</p>
          <NavigationLinks hide={hide} />
          {token !== null && <ProfileLinks hide={hide} />}
          <SignOutIn hide={hide} />
        </div>
      </motion.div>
    </motion.div>
  );
}
