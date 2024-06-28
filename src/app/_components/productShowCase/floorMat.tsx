import Image from "next/image";
import FloorMatImage from "./images/floorMat.png";
import Link from "next/link";
export default function FloorMat() {
  return (
    <div className="img-scale w-full relative flex py-16 px-12 rounded-3xl overflow-hidden z-[2]">
      <div className="flex flex-col xl:gap-6 gap-[16px] mt-auto">
        <div>
          <p className="font-bold font-sora xl:text-[56px] text-[32px] leading-[70.56px]">
            Floor Mat
          </p>
          <p className="xl:font-[500] font-normal xl:text-sm">
            Best quality floor mat available for your room
          </p>
        </div>
        <Link
          href={"/products"}
          className="showcase-button xl:bg-khaki-500 xl:text-white text-black xl:text-sm text-lg xl:hover:bg-khaki-700"
        >
          EXPLORE NOW
          <svg
            className="xl:hidden mt-1"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 1.38886V12.9441C16 13.1798 15.9064 13.4059 15.7397 13.5726C15.573 13.7393 15.3469 13.8329 15.1111 13.8329C14.8754 13.8329 14.6493 13.7393 14.4826 13.5726C14.3159 13.4059 14.2223 13.1798 14.2223 12.9441V3.53435L1.51823 16.2395C1.35144 16.4063 1.12523 16.5 0.889356 16.5C0.653484 16.5 0.427273 16.4063 0.260486 16.2395C0.0936996 16.0727 0 15.8465 0 15.6106C0 15.3748 0.0936996 15.1486 0.260486 14.9818L12.9656 2.27772H3.55594C3.3202 2.27772 3.09411 2.18407 2.92742 2.01738C2.76073 1.85069 2.66708 1.6246 2.66708 1.38886C2.66708 1.15312 2.76073 0.927035 2.92742 0.760342C3.09411 0.593648 3.3202 0.5 3.55594 0.5H15.1111C15.3469 0.5 15.573 0.593648 15.7397 0.760342C15.9064 0.927035 16 1.15312 16 1.38886Z"
              className="fill-grey-500"
            />
          </svg>
        </Link>
      </div>
      <div className="w-full h-full absolute right-0 top-0 z-[-1]">
        <Image
          src={FloorMatImage}
          alt="floorMat"
          fill
          sizes="100%"
          className="w-full h-full bg-cover"
        />
      </div>
    </div>
  );
}
