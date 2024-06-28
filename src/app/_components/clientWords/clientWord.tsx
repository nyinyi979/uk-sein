import { clientWord } from "@/app/types/type";
import Image from "next/image";

export default function ClientWord({
  wordID,
  boughtMessage,
  recommendMessage,
  profileURL,
  clientName,
  clientRole,
}: clientWord) {
  return (
    <div className="shadow-client flex flex-col gap-6 p-10">
      <p className="pb-[18px] pl-6 border-l-[3px] border-l-khaki-500 font-[500] xl:text-xl leading-5 xl:leading-8">
        {boughtMessage}
        <br />
        {recommendMessage}
      </p>
      <div className="flex flex-row gap-3">
        <div className="size-[60px] relative rounded-full">
          <Image
            src={profileURL}
            alt="client photo"
            fill
            sizes="100%"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="flex flex-col xl:gap-1 gap-0.5">
          <span className="font-sora text-xl">{clientName}</span>
          <span className="text-sm text-grey-300">{clientRole}</span>
        </p>
      </div>
    </div>
  );
}
