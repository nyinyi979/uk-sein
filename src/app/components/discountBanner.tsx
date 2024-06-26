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
    <div className="w-full h-[380px] relative flex py-10 px-20 font-bold text-right">
      <div className="w-[423px] flex flex-col gap-10 ml-auto">
        <div className="flex flex-col gap-[18px]">
          <p className="font-sora text-[56px] leading-[65px]">
            Grab your <br />
            {percent}% Discount
          </p>
          <p className="font-semibold">
            It's a seasonal time to grab your chance 🎉
          </p>
        </div>
        <Link href={"/products"} className="black-button ml-auto">
          SHOP NOW
        </Link>
      </div>
      <Image
        src={imgURL}
        alt="discount image"
        fill
        sizes="100vw"
        className="absolute top-0 left-0 object-cover z-[-1]"
      />
    </div>
  );
}
