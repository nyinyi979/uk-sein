import Image from "next/image";
import AboutUs9 from "../images/about-us-9.png";
import Link from "next/link";
export default function SeasonalPromotions() {
  return (
    <div className="flex flex-row justify-between">
      <div className="w-[550px] h-[470px] relative">
        <Image
          src={AboutUs9}
          alt="about us 9"
          fill
          sizes="100%"
          className="w-full h-full bg-cover"
        />
      </div>
      <div className="w-[570px] flex flex-col gap-8">
        <p className="font-sora font-bold text-[46px]">
          Seasonal <span className="text-khaki-500">Promotions!</span>
        </p>
        <p className="font-[500] text-xl text-justify leading-[25px]">
          Transform your home this season with our exclusive furniture
          collections. Enjoy up to 30% off on select pieces, blending elegance,
          comfort, and sustainability. Whether you're refreshing your living
          room or updating your bedroom, now's the perfect time to shop. Hurry,
          these deals won't last long!
          <br /> <br />
          Save up to 40% on our top collections, featuring eco-friendly
          materials and timeless designs. From cozy sofas to chic dining sets,
          find everything you need to refresh your home.
        </p>
        <Link
          href={"/products"}
          className="w-fit py-[18px] px-[28px] rounded-[15px] bg-grey-500 font-bold text-white "
        >
          EXPLORE NOW
        </Link>
      </div>
    </div>
  );
}
