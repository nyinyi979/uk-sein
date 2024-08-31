import { cartItem } from "@/store/clientData";
import { product, variant } from "@/types/type";

export default function AddToCart({
  product,
  variation,
  quantity,
  addCartItems,
}: {
  variation: variant;
  product: product;
  quantity: number;
  addCartItems: (c: cartItem) => void;
}) {
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
    regular_price: `${convertInt(variation.regular_price) - convertInt(variation.discount)}`,
    subtotal: `${(convertInt(variation.regular_price) - convertInt(variation.discount)) * Number(quantity)}`,
    size: variation.size,
    updated_at: product.updated_at,
    variation_product: variation.id,
    number_of_stock: variation.number_of_stock,
  };
  addCartItems(newCartItem);
}
const convertInt = (n: string) => {
  const int = parseInt(n);
  return isNaN(int) ? 0 : Number(int);
};
export const init_product: product = {
  categories: [],
  code: "",
  created_at: "",
  description: "",
  id: 0,
  images: [],
  mm_name: "",
  name: "",
  status: "",
  total_product: 0,
  updated_at: "",
  variations: [],
};
