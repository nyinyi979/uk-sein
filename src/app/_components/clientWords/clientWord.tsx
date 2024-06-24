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
    <div className="shadow-client p-10">
      <div className="pb-[18px] pl-6 border-l-[3px] border-l-khaki-500">
        {boughtMessage}
        <br />
        {recommendMessage}
      </div>
      <div className="flex flex-row gap-3">
        <Image
          src={profileURL}
          alt="client photo"
          width={60}
          height={60}
          className="rounded-full object-cover"
        />
        <p className="flex flex-col gap-1">
          <span className="font-sora text-xl">{clientName}</span>
          <span className="text-sm text-grey-300">{clientRole}</span>
        </p>
      </div>
    </div>
  );
}
