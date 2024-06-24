import Image from "next/image";
import Link from "next/link";

export default function PromotionBanner() {
  // image and text dynamic?
  return (
    <div className="w-full h-[380px] relative flex my-[50px] py-16 px-20 font-bold text-left">
      <div className="mr-auto">
        <p className="font-sora text-[56px] leading-[65px]">
          Rainy season <br />
          Big Promotion!
        </p>
        <Link
          href={"/products"}
          className="button mt-6 bg-khaki-500 text-white hover:bg-khaki-700"
        >
          SHOP NOW
        </Link>
      </div>
      <Image
        src="/images/discount.png"
        alt="discount"
        width={148}
        height={148}
        className="absolute top-[151px] left-[463px]"
      />
      <Image
        src="/images/promotion2.png"
        alt="promotion image"
        fill
        className="w-auto h-auto absolute top-0 left-0 object-cover z-[-1]"
      />
    </div>
  );
}
