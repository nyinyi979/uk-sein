import Image from "next/image";
import { clientWord } from "@/types/type";

export default function ClientWord({
  wordID,
  boughtMessage,
  recommendMessage,
  profileURL,
  clientName,
  clientRole,
}: clientWord) {
  return (
    <div className="w-fit h-fit flex flex-col gap-6 p-10">
      <p className="pb-[18px] pl-6 border-l-[3px] border-l-khaki-500 font-medium xl:text-xl md:text-base text-xs xl:leading-8 md:leading-5 leading-4">
        {boughtMessage}
        <br />
        {recommendMessage}
      </p>
      <div className="flex flex-row gap-3">
        <div className="md:size-[60px] size-[50px] relative rounded-full">
          <Image
            src={profileURL}
            alt="client photo"
            fill
            sizes="100%"
            className="size-full object-cover"
          />
        </div>
        <p className="flex flex-col xl:gap-1 gap-0.5">
          <span className="font-sora md:text-xl">{clientName}</span>
          <span className="md:text-sm text-xs text-grey-300">{clientRole}</span>
        </p>
      </div>
    </div>
  );
}
