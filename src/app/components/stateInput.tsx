import { state } from "@/app/types/type";
import React from "react";
import Arrow from "./images/arrow.svg";
import Image from "next/image";
export default function StateInput({
  state,
  setState,
}: {
  state: state;
  setState: (s: state) => void;
}) {
  const allStates = React.useRef<state[]>([
    "Yangon (ရန်ကုန်တိုင်း)",
    "Ayeyarwady (ဧရာဝတီတိုင်း)",
    "Bago (ပဲခူးတိုင်း)",
    "Chin State (ချင်းပြည်နယ်)",
    "East Shan State (အရှေ့ရှမ်းပြည်နယ်)",
    "Kayah State (ကယားပြည်နယ်)",
    "Mandalay (မန္တလေးတိုင်း)",
    "Mon State (မွန်ပြည်နယ်)",
    "North Shan State (ရှမ်းပြည်နယ်မြောက်ပိုင်း )",
    "Rakhine State (ရခိုင်ပြည်နယ်)",
    "Sagaing (စစ်ကိုင်းတိုင်း)",
    "South Shan State (တောင်ပိုင်းရှမ်းပြည်နယ်)",
    "Tanintharyi (တနင်္သာရီတိုင်း)",
  ]);
  return (
    <div className="w-full flex flex-col gap-[14px] relative">
      <label htmlFor="gender" className="font-semibold">
        State
      </label>
      <select
        name="gender"
        id="gender"
        className={`input ${state == "" && "text-grey-100"}`}
        onChange={(e) => setState(e.target.value as state)}
        defaultValue={state}
      >
        <option value={""} className="hidden">
          Select State/Region
        </option>
        {allStates.current.map((st) => (
          <option key={st} value={st}>
            {st}
          </option>
        ))}
      </select>
      <span className="w-[18px] h-2.5 absolute right-6 top-[70px]">
        <Image
          src={Arrow}
          alt="arrow"
          fill
          sizes="100%"
          className="w-full h-full bg-cover"
        />
      </span>
    </div>
  );
}
