import React, { Dispatch, SetStateAction } from "react";
import ProductQuantity from "./Quantity";
import { variant } from "@/types/type";
import { useTranslations } from "next-intl";

export default function ProductDetail({
  setVariantProps,
  variantProps,
  variations,
  quantity,
  setQuantity,
  activeVariant,
  setActiveVariant,
}: {
  variations: variant[];
  variantProps: {
    size: string;
    material: string;
    color: string;
  };
  setVariantProps: Dispatch<
    SetStateAction<{
      size: string;
      material: string;
      color: string;
    }>
  >;
  quantity: number;
  activeVariant: number;
  setActiveVariant: (num: number)=>void;
  setQuantity: (num: number) => void;
}) {
  const t = useTranslations("category");
  const { sizes, colors, materials } = React.useMemo(() => {
    const sizes: Set<string> = new Set();
    const colors: Set<string> = new Set();
    const materials: Set<string> = new Set();
    variations.map((val, index) => {
      sizes.add(decodeURI(val.size.toLowerCase()));
      colors.add(decodeURI(val.color.toLowerCase()));
      materials.add(decodeURI(val.material.toLowerCase()));
    });
    return {
      sizes: Array.from(sizes).filter((val) => val !== ""),
      colors: Array.from(colors).filter((val) => val !== ""),
      materials: Array.from(materials).filter((val) => val !== ""),
    };
  }, []);
  const { availColor, availMaterial, availSize } = React.useMemo(() => {
    let active = 0;
    let availColor = new Set<string>();
    let availSize = new Set<string>();
    let availMaterial = new Set<string>();
    let color = variantProps.color;
    let material = variantProps.material;
    let size = variantProps.size;
    if (color === "" && material === "" && size === "") {
      availColor = new Set(colors);
      availMaterial = new Set(materials);
      availSize = new Set(sizes);
    }
    // only color is chosen
    else if (color !== "" && material === "" && size === "") {
      variations.map((v, index) => {
        if (v.color.toLowerCase() === color) {
          active = index;
          availColor.add(v.color.toLowerCase());
          availMaterial.add(v.material.toLowerCase());
          availSize.add(v.size.toLowerCase());
        }
      });
    }
    // only material is chosen
    else if (color === "" && material !== "" && size === "") {
      variations.map((v, index) => {
        if (v.material.toLowerCase() === material) {
          active = index;
          availColor.add(v.color.toLowerCase());
          availMaterial.add(v.material.toLowerCase());
          availSize.add(v.size.toLowerCase());
        }
      });
    }
    // only size is chosen
    else if (color === "" && material === "" && size !== "") {
      variations.map((v, index) => {
        if (v.size.toLowerCase() === size) {
          active = index;
          availColor.add(v.color.toLowerCase());
          availMaterial.add(v.material.toLowerCase());
          availSize.add(v.size.toLowerCase());
        }
      });
    }
    // except color is chosen
    else if (color === "" && material !== "" && size !== "") {
      variations.map((v, index) => {
        if (
          v.size.toLowerCase() === size &&
          v.material.toLowerCase() === material
        ) {
          active = index;
          availColor.add(v.color.toLowerCase());
          availMaterial.add(v.material.toLowerCase());
          availSize.add(v.size.toLowerCase());
        }
      });
    }
    // except material is chosen
    else if (color !== "" && material === "" && size !== "") {
      variations.map((v, index) => {
        if (v.color.toLowerCase() === color && v.size.toLowerCase() === size) {
          active = index;
          availColor.add(v.color.toLowerCase());
          availMaterial.add(v.material.toLowerCase());
          availSize.add(v.size.toLowerCase());
        }
      });
    }
    // except size is chosen
    else if (color !== "" && material !== "" && size === "") {
      variations.map((v, index) => {
        if (
          v.color.toLowerCase() === color &&
          v.material.toLowerCase() === material
        ) {
          active = index;
          availColor.add(v.color.toLowerCase());
          availMaterial.add(v.material.toLowerCase());
          availSize.add(v.size.toLowerCase());
        }
      });
    }
    // all are chosen
    else if (color !== "" && material !== "" && size !== "") {
      variations.map((v, index) => {
        if (
          v.color.toLowerCase() === color &&
          v.material.toLowerCase() === material &&
          v.size.toLowerCase() === size
        ) {
          active = index;
          availColor.add(v.color.toLowerCase());
          availMaterial.add(v.material.toLowerCase());
          availSize.add(v.size.toLowerCase());
        }
      });
    }
    console.log(active)
    setActiveVariant(active);
    return {
      availColor,
      availMaterial,
      availSize,
    };
  }, [variantProps]);
  const toggleSize = (size: string) => {
    if (variantProps.size === size)
      setVariantProps({ ...variantProps, size: "" });
    else setVariantProps({ ...variantProps, size });
  };
  const toggleColor = (color: string) => {
    if (variantProps.color === color)
      setVariantProps({ ...variantProps, color: "" });
    else setVariantProps({ ...variantProps, color });
  };
  const toggleMaterial = (material: string) => {
    if (variantProps.material === material)
      setVariantProps({ ...variantProps, material: "" });
    else setVariantProps({ ...variantProps, material });
  };
  return (
    <div className="flex flex-col xl:gap-[38px] gap-6 xl:pb-8 pb-6">
      {sizes.length > 0 && (
        <div className="flex flex-col xl:gap-[18px] md:gap-[14px] gap-3">
          <p className="font-sora font-semibold xl:text-base md:text-sm text-xs">
            {t("size")}
          </p>
          <div className="flex flex-row xl:gap-[23px] gap-4 flex-wrap">
            {sizes.map(
              (size, index) =>
                size !== "" && (
                  <button
                    key={size}
                    onClick={() => toggleSize(size)}
                    className={`w-fit py-4 md:px-6 px-4 rounded-[15px] border ${size === variantProps.size ? "bg-grey-500 text-white border-transparent" : availSize.has(size) ? "border-grey-200" : "hidden"} xl:text-base text-xs cursor-pointer duration-300`}
                  >
                    {FirstLetterCapitalize(size)}
                  </button>
                )
            )}
          </div>
        </div>
      )}
      {colors.length > 0 && (
        <div className="flex flex-col xl:gap-[18px] md:gap-[14px] gap-3">
          <p className="font-sora font-semibold xl:text-base md:text-sm text-xs">
            {t("color")}
          </p>
          <div className="flex flex-row xl:gap-[23px] gap-4 flex-wrap">
            {colors.map(
              (color, index) =>
                color !== "" && (
                  <button
                    key={color}
                    onClick={() => toggleColor(color)}
                    className={`w-fit py-4 md:px-6 px-4 rounded-[15px] border ${color === variantProps.color ? "bg-grey-500 text-white border-transparent" : availColor.has(color) ? " border-grey-200" : "hidden"} xl:text-base text-xs cursor-pointer duration-300`}
                  >
                    {FirstLetterCapitalize(color)}
                  </button>
                )
            )}
          </div>
        </div>
      )}
      {materials.length > 0 && (
        <div className="flex flex-col xl:gap-[18px] md:gap-[14px] gap-3">
          <p className="font-sora font-semibold xl:text-base md:text-sm text-xs">
            {t("material")}
          </p>
          <div className="flex flex-row xl:gap-[23px] gap-4 flex-wrap ">
            {materials.map(
              (material, index) =>
                material !== "" && (
                  <div
                    key={material}
                    onClick={() => toggleMaterial(material)}
                    className={`w-fit py-4 md:px-6 px-4 rounded-[15px] border ${material === variantProps.material ? "bg-grey-500 text-white border-transparent" : availMaterial.has(material) ? "border-grey-200" : "hidden"} xl:text-base text-xs cursor-pointer duration-300`}
                  >
                    {FirstLetterCapitalize(material)}
                  </div>
                )
            )}
          </div>
        </div>
      )}
      <ProductQuantity
        setQuantity={setQuantity}
        quantity={quantity}
        number_of_stock={variations[activeVariant].number_of_stock || 0}
      />
    </div>
  );
}

function FirstLetterCapitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
