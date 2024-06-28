import Image from "next/image";
import Link from "next/link";

export default function DiscountBanner({
  imgURL,
  percent,
}: {
  percent: string;
  imgURL: string;
}) {
  // image and text dynamic?
  return (
    <div className="w-full xl:h-[380px] h-[250px] relative flex py-10 px-20 rounded-[15px] overflow-hidden font-bold text-right">
      <div className="w-[423px] flex flex-col xl:gap-10 gap-6 ml-auto">
        <div className="flex flex-col xl:gap-[18px] gap-2.5">
          <p className="font-sora xl:text-[56px] text-[32px] xl:leading-[65px] leading-10">
            Grab your <br />
            {percent}% Discount
          </p>
          <p className="font-semibold xl:text-base text-sm">
            It's a seasonal time to grab your chance 🎉
          </p>
        </div>
        <Link href={"/products"} className="black-button ml-auto">
          SHOP NOW
        </Link>
      </div>
      <div className="w-full h-full absolute top-0 left-0 z-[-1]">
        <Image
          src={imgURL}
          alt="discount image"
          fill
          sizes="100%"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
