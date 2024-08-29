import Image from "next/image";
import AddToCartSvg from "@/svg/addToCart.svg";
import ShareSvg from "@/svg/share.svg";
import WishList from "@/components/actions/Wishlist";
import { useTranslations } from "next-intl";
import { cartItem, useUserStore } from "@/store/clientData";
import { product } from "@/types/type";

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
  const { addCartItems } = useUserStore((store) => store);
  const addToCart = () => {
    const variation = product.variations[activeVariant];
    const newCartItem: cartItem = {
      categories: variation.categories,
      code: variation.code,
      color: variation.color,
      created_at: product.created_at,
      image: variation.images[0]?.image,
      material: variation.material,
      mm_name: variation.mm_name,
      name: variation.name,
      product: variation.product,
      quantity: quantity,
      regular_price:
        Number(variation.regular_price) - Number(variation.discount),
      size: variation.size,
      subtotal: Number(variation.regular_price) * Number(quantity),
      updated_at: product.updated_at,
      variation_product: variation.id,
      number_of_stock: variation.number_of_stock,
    };
    addCartItems(newCartItem);
  };
  const t = useTranslations("product");
  return (
    <div className="md:h-[58px] h-[48px] flex flex-row gap-[18px]">
      <button
        onClick={addToCart}
        className="w-fit h-full flex flex-row gap-3 md:p-[18px] sm:px-[18px] px-2 py-[14px] bg-khaki-500 rounded-xl md:text-base text-sm text-white hover:bg-khaki-700 duration-300"
      >
        <Image src={AddToCartSvg} alt="add to cart" width={22} height={22} />
        <p className="font-semibold">{t("add-to-cart")} </p>
      </button>
      <WishList whitelisted={wishlisted} id={product.id} />
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
