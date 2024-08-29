import Image from "next/image";
import AddToCartSvg from "@/svg/addToCart.svg";
import Wishlist from "../actions/Wishlist";
import { cartItem, useUserStore } from "@/store/clientData";
import { variant } from "@/types/type";

export default function ProductAddToCart({
  variation,
  wishlisted,
  small,
}: {
  wishlisted: boolean;
  variation: variant;
  small: boolean;
}) {
  const { addCartItems } = useUserStore((store) => store);
  const addToCart = () => {
    const newCartItem: cartItem = {
      categories: variation.categories,
      code: variation.code,
      color: variation.color,
      created_at: "",
      image: variation.images[0]?.image,
      material: variation.material,
      mm_name: variation.mm_name,
      name: variation.name,
      product: variation.product,
      quantity: 1,
      regular_price:
        Number(variation.regular_price) - Number(variation.discount),
      size: variation.size,
      subtotal: Number(variation.regular_price) * Number(1),
      updated_at: "",
      variation_product: variation.id,
      number_of_stock: variation.number_of_stock,
    };
    addCartItems(newCartItem);
  };
  return (
    <div className="md:h-[58px] h-[48px] flex flex-row gap-[18px]">
      <button
        onClick={(ev) => {
          ev.stopPropagation();
          addToCart();
        }}
        className={`${small ? "xl:size-[58px] size-[48px]" : "md:size-[58px] size-[48px]"} p-4 bg-khaki-500 rounded-xl hover:bg-khaki-700 duration-300`}
      >
        <Image src={AddToCartSvg} alt="add to cart" width={22} height={22} />
      </button>
      <Wishlist whitelisted={wishlisted} id={variation.id} />
    </div>
  );
}
