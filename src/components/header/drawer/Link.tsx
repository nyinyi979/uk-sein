import Image from "next/image";
import Link from "next/link";

export default function HyperLink({
  img,
  name,
  hide,
  url,
}: {
  name: string;
  img: any;
  url: string;
  hide: () => void;
}) {
  return (
    <Link
      key={name}
      href={url}
      onClick={hide}
      className="w-[230px] h-fit flex flex-row gap-[18px] py-2.5 px-[10px] rounded-[15px] hover:bg-khaki-50 duration-300"
    >
      <div className="md:size-[38px] flex items-center justify-center bg-khaki-50 rounded-full">
        <div className="w-[18px] h-[18px] relative flex items-center justify-center">
          <Image
            src={img}
            alt={name}
            fill
            sizes="100%"
            className="size-full object-contain"
          />
        </div>
      </div>
      <span className="font-semibold md:text-lg md:mt-1">{name}</span>
    </Link>
  );
}
