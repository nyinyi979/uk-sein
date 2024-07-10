import NavigationLinks from "./navigationLinks";
import ProfileLinks from "./profileLink";
import SignOutIn from "./signOutIn";
import { motion } from "framer-motion";
import { useUserStore } from "@/store/clientData";
import { useTranslations } from "next-intl";

export default function Drawer({ hide }: { hide: () => void }) {
  const userToken = useUserStore((state) => state.userToken);
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
      className="fixed size-full xl:hidden block top-0 left-0 z-[300]"
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
        drag={"x"}
        dragConstraints={{ left: -200, right: 0 }}
        onDrag={(ev,info) => {
          if (info.point.x < 250) hide();
        }}
        onClick={(ev) => ev.stopPropagation()}
        className="md:w-[350px] w-[276px] h-full md:pt-[83px] pt-10 md:pl-[50px] pl-5 pb-10 bg-white shadow-drawer overflow-y-auto"
      >
        <div className="w-fit flex flex-col gap-6">
          <p className="font-semibold text-2xl">{t("explore-now")}</p>
          <NavigationLinks hide={hide} />
          {userToken !== "" && <ProfileLinks hide={hide} />}
          <SignOutIn hide={hide} />
        </div>
      </motion.div>
    </motion.div>
  );
}
