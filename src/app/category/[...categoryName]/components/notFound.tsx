import Image from "next/image";

export default function NotFoundError() {
  return (
    <div className="col-span-3 w-1/2 mx-auto py-[120px]">
      <div className="size-[120px] mx-auto relative">
        <Image
          src={"/images/error.png"}
          alt="error"
          fill
          sizes="100%"
          className="w-full h-full bg-cover"
        />
      </div>
      <p className="py-5 font-semibold text-center text-grey-200">
        Sorry! No Data Found from your filter search! <br /> Try to search
        something else.
      </p>
    </div>
  );
}
