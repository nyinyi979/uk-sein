import Image from "next/image";
import AddToCartSvg from "@/svg/addToCart.svg";
import ShareSvg from "@/svg/share.svg";
import WishList from "@/components/actions/wishlist";

export default function ProductAddToCart({
  productID,
  whiteListed,
}: {
  whiteListed: boolean;
  productID: string;
}) {
  return (
    <div className="md:h-[58px] h-[48px] flex flex-row gap-[18px]">
      <button className="w-fit h-full flex flex-row gap-3 md:p-[18px] px-[18px] py-[14px] bg-khaki-500 rounded-xl md:text-base text-sm text-white hover:bg-khaki-700 duration-300">
        <Image src={AddToCartSvg} alt="add to cart" width={22} height={22} />
        <p className="font-semibold">Add to Cart</p>
      </button>
      <WishList whitelisted={whiteListed} productID={productID} />
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
