import Image from "next/image";
import AddToCartSvg from "@/svg/addToCart.svg";
import ShareSvg from "@/svg/share.svg";
import WishList from "@/components/actions/Wishlist";
import { useTranslations } from "next-intl";
import { cartItem, useUserStore } from "@/store/clientData";
import { product, variant } from "@/types/type";
import AddToCart from "@/components/AddToCart";

export default function ProductAddToCart({
  product,
  wishlisted,
  activeVariant,
  quantity,
}: {
  wishlisted: boolean;
  product: product;
  activeVariant: number;
  quantity: number;
}) {
  const t = useTranslations("product");
  const addCartItems = useUserStore((store) => store.addCartItems);
  return (
    <div className="md:h-[58px] h-[48px] flex flex-row gap-[18px]">
      <button
        onClick={() =>
          AddToCart({
            product: product,
            quantity: quantity,
            variation: product.variations[activeVariant],
            addCartItems: addCartItems,
          })
        }
        disabled={quantity === 0}
        className="w-fit h-full flex flex-row gap-3 md:p-[18px] sm:px-[18px] px-2 py-[14px] bg-khaki-500 disabled:bg-grey-50 rounded-xl md:text-base text-sm text-white hover:bg-khaki-700 duration-300"
      >
        <Image src={AddToCartSvg} alt="add to cart" width={22} height={22} />
        <p className="font-semibold">{t("add-to-cart")} </p>
      </button>
      <WishList id={product.id} />
      <button className="w-[58px] h-full py-[14px] px-[18px] bg-white-400 rounded-xl">
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
