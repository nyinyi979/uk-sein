import Image from "next/image";
import AddToCartSvg from "@/app/svg/addToCart.svg";
import ShareSvg from "@/app/svg/share.svg";
import { WhiteList } from "@/app/components/product";
export default function ProductAddToCart({
  productID,
  whiteListed,
}: {
  whiteListed: boolean;
  productID: string;
}) {
  return (
    <div className="h-[58px] flex flex-row gap-[18px]">
      <button className="w-fit h-full flex flex-row gap-3 p-[18px] bg-khaki-500 rounded-xl text-white hover:bg-khaki-700 duration-300">
        <Image src={AddToCartSvg} alt="add to cart" width={22} height={22} />
        <p>Add to Cart</p>
      </button>
      <WhiteList whitelisted={whiteListed} productID={productID} />
      <button className="w-fit h-full py-[14px] px-[18px] bg-white-600 rounded-xl">
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
