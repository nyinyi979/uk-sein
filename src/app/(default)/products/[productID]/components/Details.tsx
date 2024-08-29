import { useTranslations } from "next-intl";
import ProductQuantity from "./Quantity";
import { variant } from "@/types/type";
import React from "react";

export default function ProductDetail({
  activeVariant,
  setActiveVariant,
  variations,
  quantity,
  setQuantity,
}: {
  variations: variant[];
  activeVariant: number;
  setActiveVariant: (index: number) => void;
  quantity: number;
  setQuantity: (num: number) => void;
}) {
  const t = useTranslations("category");
  const { sizes, colors, materials } = React.useMemo(() => {
    const sizes: { value: string; index: number }[] = [];
    const colors: { value: string; index: number }[] = [];
    const materials: { value: string; index: number }[] = [];
    variations.map((val, index) => {
      sizes.push({ index, value: val.size });
      colors.push({ index, value: val.color });
      materials.push({ index, value: val.material });
    });
    return {
      sizes,
      colors,
      materials,
    };
  }, []);
  return (
    <div className="flex flex-col xl:gap-[38px] gap-6 xl:pb-8 pb-6">
      <div className="flex flex-col xl:gap-[18px] md:gap-[14px] gap-3">
        <p className="font-sora font-semibold xl:text-base md:text-sm text-xs">
          {t("size")}
        </p>
        <div className="flex flex-row xl:gap-[23px] gap-4">
          {sizes.map((size) => (
            <div
              key={size.value}
              onClick={() => setActiveVariant(size.index)}
              className={`w-fit py-4 md:px-6 px-4 rounded-[15px] border ${size.index === activeVariant ? "bg-grey-500 text-white border-transparent" : "border-grey-200"} xl:text-base text-xs cursor-pointer duration-300`}
            >
              {size.value}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col xl:gap-[18px] md:gap-[14px] gap-3">
        <p className="font-sora font-semibold xl:text-base md:text-sm text-xs">
          {t("color")}
        </p>
        <div className="flex flex-row xl:gap-[23px] gap-4">
          {colors.map((clr) => (
            <div
              key={clr.value}
              onClick={() => setActiveVariant(clr.index)}
              className={`w-fit py-4 md:px-6 px-4 rounded-[15px] border ${clr.index === activeVariant ? "bg-grey-500 text-white border-transparent" : " border-grey-200"} xl:text-base text-xs cursor-pointer duration-300`}
            >
              {clr.value}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col xl:gap-[18px] md:gap-[14px] gap-3">
        <p className="font-sora font-semibold xl:text-base md:text-sm text-xs">
          {t("material")}
        </p>
        <div className="flex flex-row xl:gap-[23px] gap-4">
          {materials.map((mat) => (
            <div
              key={mat.value}
              className={`w-fit py-4 md:px-6 px-4 rounded-[15px] border ${mat.index === activeVariant ? "bg-grey-500 text-white border-transparent" : "border-grey-200"} xl:text-base text-xs cursor-pointer duration-300`}
              onClick={() => setActiveVariant(mat.index)}
            >
              {mat.value}
            </div>
          ))}
        </div>
      </div>
      <ProductQuantity
        setQuantity={setQuantity}
        quantity={quantity}
        number_of_stock={variations[activeVariant]?.number_of_stock || 0}
      />
    </div>
  );
}
