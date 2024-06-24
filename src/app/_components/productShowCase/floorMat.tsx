import Image from "next/image";
import FloorMatImage from "./images/floorMat.png";
import Link from "next/link";
export default function FloorMat() {
  return (
    <div className="img-scale w-full relative flex py-16 px-12 rounded-3xl overflow-hidden z-[2]">
      <div className="flex flex-col gap-6 mt-auto">
        <div>
          <p className="font-bold font-sora text-[56px] leading-[70.56px]">
            Floor Mat
          </p>
          <p className="font-[500] text-sm">
            Best quality floor mat available for your room
          </p>
        </div>
        <Link
          href={"/products"}
          className="button bg-khaki-500 text-white hover:bg-khaki-700"
        >
          EXPLORE NOW
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
