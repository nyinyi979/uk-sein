import Image from "next/image";
import Link from "next/link";

export default function PromotionBanner() {
  return (
    <div className="md:w-full w-[353px] xl:h-[380px] md:h-[250px] h-[160px] mx-auto relative flex rounded-[15px] overflow-hidden xl:py-16 md:py-10 py-6 md:px-20 px-8 font-bold text-left">
      <div className="flex flex-col md:gap-8 gap-4">
        <p className="font-sora xl:text-[56px] md:text-[32px] text-xl xl:leading-[65px] md:leading-10 z-10">
          Rainy season <br />
          Big Promotion!
        </p>
        <Link
          href={"/products"}
          className="w-fit h-fit md:py-[16px] py-2 md:px-[28px] px-[18px] rounded-xl bg-khaki-500 xl:bg-khaki-500 md:bg-grey-500 font-semibold md:text-base text-sm text-white md:hover:bg-grey-400 hover:bg-khaki-700 xl:hover:bg-khaki-700 duration-300"
        >
          SHOP NOW
        </Link>
      </div>
      <div className="xl:size-[148px] size-[81px] md:block hidden absolute xl:top-[151px] top-[91px] xl:left-[463px] left-[310px]">
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
