import Image from "next/image";
import AddToCartSvg from "@/svg/addToCart.svg";
import ShareSvg from "@/svg/share.svg";
import WishList from "@/components/actions/Wishlist";
import { useTranslations } from "next-intl";
import { useUserStore } from "@/store/clientData";
import { product } from "@/types/type";
import AddToCart from "@/components/AddToCart";
import { showSuccessAlert } from "@/components/Alert";
import React from "react";

export default function ProductAddToCart({
  product,
  activeVariant,
  quantity,
}: {
  product: product;
  activeVariant: number;
  quantity: number;
}) {
  const copy = () => {
    // console.log(window.location.href);
    navigator.clipboard.writeText(window.location.href);
    showSuccessAlert({ text: "Product link copied!" });
  };
  const t = useTranslations("product");
  const { addCartItems, wishlists } = useUserStore((store) => store);
  const [disabled, setDisabled] = React.useState(false);
  const index = wishlists.findIndex((w) => w.product.id === product.id);
  return (
    <div className="md:h-[58px] h-[48px] flex flex-row gap-[18px]">
      <button
        onClick={() => {
          AddToCart({
            product: product,
            quantity: quantity,
            variation: product.variations[activeVariant],
            addCartItems: addCartItems,
          });
          setDisabled(true);
          setTimeout(()=>{
            setDisabled(false);
          },2000)
        }}
        disabled={quantity === 0 || disabled}
        className="w-fit h-full flex flex-row gap-3 md:p-[18px] sm:px-[18px] px-2 py-[14px] bg-khaki-500 disabled:bg-khaki-200 rounded-xl md:text-base text-sm text-white hover:bg-khaki-700 duration-300"
      >
        <Image src={AddToCartSvg} alt="add to cart" width={22} height={22} />
        <p className="font-semibold">{t("add-to-cart")} </p>
      </button>
      <WishList
        id={product.id}
        wishlistID={wishlists[index]?.id || 0}
        wishlisted={index !== -1 ? true : false}
      />
      <button
        onClick={copy}
        className="w-[58px] h-full py-[14px] px-[18px] bg-white-400 rounded-xl"
      >
        <Image
          src={ShareSvg}
          alt="share icon"
          width={0}
          height={0}
          className="w-auto h-auto"
        />
      </button>
    </div>
  );
}
