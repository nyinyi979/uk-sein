import Image from "next/image";
import BackArr from "@/app/svg/backArrow.svg";
import { useRouter } from "next/navigation";
export default function ProductTitle({ category }: { category: string }) {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-2.5 my-[50px]">
      <button
        onClick={() => router.back()}
        className="mr-auto text-khaki-500 hover:text-khaki-700"
      >
        <Image
          src={BackArr}
          alt="back arrow"
          width={0}
          height={0}
          className="w-auto h-auto inline-block mx-2 -mt-1"
        />{" "}
        Back to Products
      </button>
      <p className="font-semibold">
        <span>Categories - </span> {category}
      </p>
    </div>
  );
}
