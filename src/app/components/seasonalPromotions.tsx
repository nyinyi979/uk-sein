import Image from "next/image";
import AboutUs9 from "./images/sesonalPromotion.png";
import Link from "next/link";
export default function SeasonalPromotions() {
  return (
    <div className="flex xl:flex-row flex-col xl:justify-between xl:gap-0 gap-6">
      <div className="xl:w-[550px] w-full xl:h-[470px] h-[240px] relative">
        <Image
          src={AboutUs9}
          alt="about us 9"
          fill
          sizes="100%"
          className="w-full h-full bg-cover"
        />
      </div>
      <div className="w-[570px] flex flex-col xl:gap-8 gap-6">
        <p className="font-sora font-bold xl:text-[46px] text-2xl">
          Seasonal <span className="text-khaki-500">Promotions!</span>
        </p>
        <p className="font-[500] xl:text-xl text-sm text-justify xl:leading-[25px] leading-[17.5px]">
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
        <Link href={"/products"} className="button xl:hover:bg-grey-400 bg-khaki-500 xl:bg-grey-500 font-bold text-white xl:text-grey-500 hover:bg-khaki-700 duration-300">
          EXPLORE NOW
        </Link>
      </div>
    </div>
  );
}
