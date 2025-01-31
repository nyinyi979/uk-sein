import { useTranslations } from "next-intl";
import Link from "next/link";

export default function OrderTitle({ id }: { id: string | number }) {
  const t = useTranslations();
  return (
    <div className="md:flex hidden flex-col xl:gap-2.5 gap-1.5">
      <Link
        href={"/profile/orders"}
        className="md:flex hidden back-arr-text xl:text-xl text-lg"
      >
        <svg
          width="25"
          height="21"
          viewBox="0 0 25 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-1"
        >
          <path d="M25.0012 10.5014C25.0012 10.8992 24.8431 11.2807 24.5618 11.562C24.2805 11.8433 23.899 12.0014 23.5012 12.0014H5.12618L11.5662 18.4401C11.848 18.7219 12.0063 19.1041 12.0063 19.5026C12.0063 19.9011 11.848 20.2833 11.5662 20.5651C11.2844 20.8469 10.9022 21.0052 10.5037 21.0052C10.1052 21.0052 9.72297 20.8469 9.44118 20.5651L0.441183 11.5651C0.301343 11.4257 0.190387 11.2602 0.114679 11.0778C0.0389713 10.8955 0 10.7 0 10.5026C0 10.3052 0.0389713 10.1097 0.114679 9.92737C0.190387 9.74505 0.301343 9.57946 0.441183 9.4401L9.44118 0.440102C9.58071 0.300572 9.74636 0.189891 9.92866 0.114378C10.111 0.0388656 10.3064 0 10.5037 0C10.701 0 10.8964 0.0388656 11.0787 0.114378C11.261 0.189891 11.4267 0.300572 11.5662 0.440102C11.7057 0.579631 11.8164 0.745277 11.8919 0.927581C11.9674 1.10988 12.0063 1.30528 12.0063 1.5026C12.0063 1.69993 11.9674 1.89532 11.8919 2.07762C11.8164 2.25993 11.7057 2.42557 11.5662 2.5651L5.12618 9.00135H23.5012C23.899 9.00135 24.2805 9.15939 24.5618 9.44069C24.8431 9.722 25.0012 10.1035 25.0012 10.5014Z" />
        </svg>
        <span>{t("back-to.back-to-order-history")} </span>
      </Link>
      <p className="flex flex-row md:font-semibold font-bold xl:text-lg md:text-base text-lg">
        <span className="md:text-grey-100">{t("orders.order-history")} </span> -
        #{id}
      </p>
    </div>
  );
}
