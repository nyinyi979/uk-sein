import Image from "next/image";
import Signout from "./images/signout.svg";
import Signin from "./images/signIn.svg";
import { useUserStore } from "@/store/clientData";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function SignOutIn({ hide }: { hide: () => void }) {
  const { token, setToken } = useUserStore();
  const router = useRouter();
  const t = useTranslations("signin");
  const onClick = () => {
    hide();
    if (token !== null) setToken(null);
    else router.push("/login");
  };
  return (
    <button
      onClick={onClick}
      className={`w-fit flex flex-row gap-3 py-[14px] px-7 rounded-[10px] ${token === null ? "bg-khaki-500 hover:bg-khaki-700" : "bg-red-500 hover:bg-red-700"} text-white duration-300`}
    >
      <div className="size-[18px] relative">
        {token === null ? (
          <Image
            src={Signin}
            alt="sign in"
            sizes="100%"
            fill
            className="size-full object-cover mt-1"
          />
        ) : (
          <Image
            src={Signout}
            alt="sign out"
            sizes="100%"
            fill
            className="size-full object-cover mt-1"
          />
        )}
      </div>
      <span className="font-bold">
        {token === null ? t("sign-in") : t("sign-out")}
      </span>
    </button>
  );
}
