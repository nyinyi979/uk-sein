import Image from "next/image";
import Link from "next/link";

export default function PromotionBanner() {
  // image and text dynamic?
  return (
    <div className="w-full xl:h-[380px] h-[250px] relative flex rounded-[15px] overflow-hidden xl:py-16 py-10 px-20 font-bold text-left">
      <div className="flex flex-col gap-8 mr-auto">
        <p className="font-sora xl:text-[56px] text-[32px] xl:leading-[65px] leading-10 z-10">
          Rainy season <br />
          Big Promotion!
        </p>
        <Link
          href={"/products"}
          className="button xl:bg-khaki-500 bg-grey-500 text-white hover:bg-grey-400 xl:hover:bg-khaki-700"
        >
          SHOP NOW
        </Link>
      </div>
      <div className="xl:size-[148px] size-[81px] absolute xl:top-[151px] top-[91px] xl:left-[463px] left-[310px]">
        <Image
          src="/images/discount.png"
          alt="discount"
          fill
          sizes="100%"
          className="w-full h-full object-cover"
        />
      </div>
      <Image
        src="/images/promotion2.png"
        alt="promotion image"
        fill
        className="w-auto h-auto absolute top-0 left-0 object-cover z-[-1]"
      />
    </div>
  );
}
