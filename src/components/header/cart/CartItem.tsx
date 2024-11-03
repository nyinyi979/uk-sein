import Image from "next/image";
import { cartItem, useUserStore } from "@/store/clientData";
import { MEDIA_URL } from "@/utils/axios";

export default function CartItem({
  cartItem: {
    image,
    name,
    code,
    size,
    material,
    color,
    subtotal,
    number_of_stock,
    quantity,
  },
  index,
}: {
  cartItem: cartItem;
  index: number;
}) {
  const { cartItems, setCartItems } = useUserStore((state) => state);
  const updateQuantity = (value: number) => {
    const newCartItems = [...cartItems];
    if (value === 0) {
      newCartItems.splice(index, 1);
    } else {
      newCartItems[index].subtotal =
        `${(Number(newCartItems[index].subtotal) / Number(newCartItems[index].quantity)) * value}`;
      newCartItems[index].quantity = value;
    }
    setCartItems(newCartItems);
  };
  return (
    <div className="xl:w-[550px] md:w-[500px] w-full flex flex-row gap-4 py-[28px] sm:px-[18px] mx-auto border-b border-dotted border-grey-50">
      <div className="md:size-[160px] size-[126px] bg-white-400">
        <div className="md:w-[125px] w-[113px] md:h-[117px] h-[100px] relative mx-auto md:my-[21.5px] my-3.5">
          <img
            src={MEDIA_URL + image}
            alt={name}
            className="size-full object-cover shadow-product"
          />
        </div>
      </div>
      <div className="flex flex-col md:gap-[18px] gap-4">
        <div className="flex flex-col md:gap-1.5 gap-1">
          <p className="font-sora font-semibold md:text-lg text-[15px]">
            {name}
          </p>
          <div className="flex flex-row gap-1.5 font-semibold md:text-xs text-[10px]">
            <p className="text-grey-200">({code})</p>
            {size && <p>({size})</p>}
            {material && <p>({material})</p>}
            {color && <p>({color})</p>}
          </div>
        </div>
        <p className="font-sora font-bold md:text-2xl text-xl">
          {subtotal.toLocaleString()} Ks
        </p>
        <ItemButtons
          number_of_stock={number_of_stock}
          quantity={quantity}
          updateQuantity={updateQuantity}
        />
      </div>
    </div>
  );
}

function ItemButtons({
  updateQuantity,
  number_of_stock,
  quantity,
}: {
  updateQuantity: (val: number) => void;
  number_of_stock: number;
  quantity: number;
}) {
  return (
    <div className="flex flex-row gap-2.5">
      <button
        onClick={() => updateQuantity(quantity - 1)}
        className="cart-btn md:px-3.5 px-2.5"
      >
        <svg
          width="14"
          height="2"
          viewBox="0 0 14 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.25 1C13.25 1.19891 13.171 1.38968 13.0303 1.53033C12.8897 1.67098 12.6989 1.75 12.5 1.75H1.5C1.30109 1.75 1.11032 1.67098 0.96967 1.53033C0.829018 1.38968 0.75 1.19891 0.75 1C0.75 0.801088 0.829018 0.610322 0.96967 0.46967C1.11032 0.329018 1.30109 0.25 1.5 0.25H12.5C12.6989 0.25 12.8897 0.329018 13.0303 0.46967C13.171 0.610322 13.25 0.801088 13.25 1Z"
            fill="#DE9D62"
          />
        </svg>
      </button>
      <div className="md:w-[100px] w-[60px] md:h-10 h-8 md:p-2.5 p-0.5 font-semibold text-center text-xl">
        {quantity}
      </div>
      <button
        onClick={() => updateQuantity(quantity + 1)}
        disabled={quantity === number_of_stock}
        className="cart-btn md:px-3.5 px-2"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6C12 6.19096 11.9241 6.37409 11.7891 6.50912C11.6541 6.64414 11.471 6.72 11.28 6.72H6.72V11.28C6.72 11.471 6.64414 11.6541 6.50912 11.7891C6.37409 11.9241 6.19096 12 6 12C5.80904 12 5.62591 11.9241 5.49088 11.7891C5.35586 11.6541 5.28 11.471 5.28 11.28V6.72H0.72C0.529044 6.72 0.345909 6.64414 0.210883 6.50912C0.0758569 6.37409 0 6.19096 0 6C0 5.80904 0.0758569 5.62591 0.210883 5.49088C0.345909 5.35586 0.529044 5.28 0.72 5.28H5.28V0.72C5.28 0.529044 5.35586 0.345909 5.49088 0.210883C5.62591 0.0758569 5.80904 0 6 0C6.19096 0 6.37409 0.0758569 6.50912 0.210883C6.64414 0.345909 6.72 0.529044 6.72 0.72V5.28H11.28C11.471 5.28 11.6541 5.35586 11.7891 5.49088C11.9241 5.62591 12 5.80904 12 6Z"
            fill="#DE9D62"
          />
        </svg>
      </button>
      <div className="xl:ml-20 ">
        <button
          onClick={() => updateQuantity(0)}
          className="cart-btn md:px-2.5 px-2"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.6145 2.76923H13.1529V2.07692C13.1529 1.52609 12.9341 0.997815 12.5446 0.608317C12.1551 0.218818 11.6269 0 11.076 0H6.92218C6.37134 0 5.84307 0.218818 5.45357 0.608317C5.06407 0.997815 4.84525 1.52609 4.84525 2.07692V2.76923H1.38371C1.2001 2.76923 1.02401 2.84217 0.894179 2.972C0.764346 3.10184 0.691406 3.27793 0.691406 3.46154C0.691406 3.64515 0.764346 3.82124 0.894179 3.95107C1.02401 4.08091 1.2001 4.15385 1.38371 4.15385H2.07602V16.6154C2.07602 16.9826 2.2219 17.3348 2.48157 17.5945C2.74123 17.8541 3.09341 18 3.46064 18H14.5376C14.9048 18 15.257 17.8541 15.5166 17.5945C15.7763 17.3348 15.9222 16.9826 15.9222 16.6154V4.15385H16.6145C16.7981 4.15385 16.9742 4.08091 17.104 3.95107C17.2339 3.82124 17.3068 3.64515 17.3068 3.46154C17.3068 3.27793 17.2339 3.10184 17.104 2.972C16.9742 2.84217 16.7981 2.76923 16.6145 2.76923ZM6.22987 2.07692C6.22987 1.89331 6.30281 1.71722 6.43264 1.58739C6.56247 1.45755 6.73856 1.38462 6.92218 1.38462H11.076C11.2596 1.38462 11.4357 1.45755 11.5656 1.58739C11.6954 1.71722 11.7683 1.89331 11.7683 2.07692V2.76923H6.22987V2.07692ZM14.5376 16.6154H3.46064V4.15385H14.5376V16.6154ZM7.61448 7.61539V13.1538C7.61448 13.3375 7.54154 13.5135 7.41171 13.6434C7.28188 13.7732 7.10579 13.8462 6.92218 13.8462C6.73856 13.8462 6.56247 13.7732 6.43264 13.6434C6.30281 13.5135 6.22987 13.3375 6.22987 13.1538V7.61539C6.22987 7.43177 6.30281 7.25568 6.43264 7.12585C6.56247 6.99602 6.73856 6.92308 6.92218 6.92308C7.10579 6.92308 7.28188 6.99602 7.41171 7.12585C7.54154 7.25568 7.61448 7.43177 7.61448 7.61539ZM11.7683 7.61539V13.1538C11.7683 13.3375 11.6954 13.5135 11.5656 13.6434C11.4357 13.7732 11.2596 13.8462 11.076 13.8462C10.8924 13.8462 10.7163 13.7732 10.5865 13.6434C10.4567 13.5135 10.3837 13.3375 10.3837 13.1538V7.61539C10.3837 7.43177 10.4567 7.25568 10.5865 7.12585C10.7163 6.99602 10.8924 6.92308 11.076 6.92308C11.2596 6.92308 11.4357 6.99602 11.5656 7.12585C11.6954 7.25568 11.7683 7.43177 11.7683 7.61539Z"
              fill="#FF1616"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
