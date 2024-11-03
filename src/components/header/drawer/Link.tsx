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
      <div className="md:size-[38px] px-3 py-2.5 bg-khaki-50 rounded-full">
        <div className="w-[13px] h-[14px] relative">
          <Image
            src={img}
            alt={name}
            fill
            sizes="100%"
            className="size-full object-cover"
          />
        </div>
      </div>
      <span className="font-semibold md:text-lg md:mt-1">{name}</span>
    </Link>
  );
}
