import { useTranslations } from "next-intl";

export default function CheckoutProgress({
  progress,
}: {
  progress: "Shipping" | "Payment" | "Confirmed" | "Loading";
}) {
  const secondOn =
    progress === "Payment" ||
    progress === "Confirmed" ||
    progress === "Loading";
  const thirdOn = progress === "Confirmed";
  const t = useTranslations("common-phrases");
  return (
    <div className="flex flex-row gap-[31px]">
      <div className="md:w-[173px] w-[93px] flex flex-col md:gap-[18px] gap-3">
        <div className="flex flex-col gap-2.5">
          <p className="font-bold md:text-lg text-sm text-center">
            {t("shipping")}
          </p>
          <div className="size-2.5 bg-khaki-500 rounded-full mx-auto"></div>
        </div>
        <div className="w-full md:h-3 h-2 rounded-[50px] bg-khaki-500" />
      </div>
      <div className="md:w-[173px] w-[93px] flex flex-col md:gap-[18px] gap-3">
        <div className="flex flex-col gap-2.5">
          <p
            className={`font-bold md:text-lg text-sm text-center ${!secondOn && "text-grey-100"} duration-300`}
          >
            {t("payment")}
          </p>
          <div
            className={`size-2.5 ${secondOn ? "bg-khaki-500" : "bg-khaki-50"} rounded-full mx-auto duration-300`}
          ></div>
        </div>
        <div
          className={`w-full md:h-3 h-2 rounded-[50px] ${secondOn ? "bg-khaki-500" : "bg-khaki-50"} duration-300`}
        />
      </div>
      <div className="md:w-[173px] w-[93px] flex flex-col md:gap-[18px] gap-3">
        <div className="flex flex-col gap-2.5">
          <p
            className={`font-bold md:text-lg text-sm text-center ${!thirdOn && "text-grey-100"} duration-300`}
          >
            {t("confirmed")}
          </p>
          <div
            className={`size-2.5 ${thirdOn ? "bg-khaki-500" : "bg-khaki-50"} rounded-full mx-auto duration-300`}
          ></div>
        </div>
        <div
          className={`w-full md:h-3 h-2 rounded-[50px] ${thirdOn ? "bg-khaki-500" : "bg-khaki-50"} duration-300`}
        />
      </div>
    </div>
  );
}
