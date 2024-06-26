export default function CheckoutProgress({
  progress,
}: {
  progress: "Shipping" | "Payment" | "Confirmed";
}) {
  const secondOn = progress === "Payment" || progress === "Confirmed";
  const thirdOn = progress === "Confirmed";
  return (
    <div className="flex flex-row gap-[31px]">
      <div className="w-[173px] flex flex-col gap-[18px]">
        <div className="flex flex-col gap-2.5">
          <p className="font-bold text-lg text-center">Shipping</p>
          <div className="size-2.5 bg-khaki-500 rounded-full mx-auto"></div>
        </div>
        <div className="w-full h-3 rounded-[50px] bg-khaki-500" />
      </div>
      <div className="w-[173px] flex flex-col gap-[18px]">
        <div className="flex flex-col gap-2.5">
          <p
            className={`font-bold text-lg text-center ${!secondOn && "text-grey-100"} duration-300`}
          >
            Payment
          </p>
          <div
            className={`size-2.5 ${secondOn ? "bg-khaki-500" : "bg-khaki-50"} rounded-full mx-auto duration-300`}
          ></div>
        </div>
        <div
          className={`w-full h-3 rounded-[50px] ${secondOn ? "bg-khaki-500" : "bg-khaki-50"} duration-300`}
        />
      </div>
      <div className="w-[173px] flex flex-col gap-[18px]">
        <div className="flex flex-col gap-2.5">
          <p
            className={`font-bold text-lg text-center ${!thirdOn && "text-grey-100"} duration-300`}
          >
            Confirmed
          </p>
          <div
            className={`size-2.5 ${thirdOn ? "bg-khaki-500" : "bg-khaki-50"} rounded-full mx-auto duration-300`}
          ></div>
        </div>
        <div
          className={`w-full h-3 rounded-[50px] ${thirdOn ? "bg-khaki-500" : "bg-khaki-50"} duration-300`}
        />
      </div>
    </div>
  );
}
