import Image from "next/image";
import BackArr from "@/app/svg/backArrow.svg";
import { useRouter } from "next/navigation";

export default function ProductTitle({ category }: { category: string }) {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-2.5 md:my-[50px] my-8">
      <button
        onClick={() => router.back()}
        className="flex flex-row gap-2.5 mr-auto md:text-base text-sm text-khaki-500 hover:text-khaki-700"
      >
        <div className="md:w-[25px] md:h-[21px] w-[19px] h-4 relative">
          <Image
            src={BackArr}
            alt="back arrow"
            fill
            sizes="100%"
            className="w-full h-full mt-0.5"
          />{" "}
        </div>
        Back to Products
      </button>
      <p className="font-semibold">
        <span>Categories - </span> {category}
      </p>
    </div>
  );
}
