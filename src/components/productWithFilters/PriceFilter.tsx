import { useTranslations } from "next-intl";

export default function PriceFilter({
  maximum,
  maximumPercent,
  minimum,
  minimumPercent,
  possibleMaximum,
  possibleMinimum,
  setMaximum,
  setMinimum,
  setMaximumInPercent,
  setMinimumInPercent,
}: {
  minimumPercent: string;
  minimum: number;
  possibleMinimum: number;
  maximumPercent: string;
  maximum: number;
  possibleMaximum: number;
  setMaximumInPercent: (max: string) => void;
  setMaximum: (max: string) => void;
  setMinimumInPercent: (min: string) => void;
  setMinimum: (min: string) => void;
}) {
  const t = useTranslations("category");
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-2.5 text-grey-300">
        <div className="flex flex-col gap-1.5">
          <p className="font-semibold text-[10px]">{t("minimum")}</p>
          <input
            type="number"
            value={minimum}
            min={possibleMinimum}
            max={possibleMaximum}
            onChange={(ev) => setMinimum(ev.target.value)}
            className="w-full p-2.5 rounded-[5px] outline-none border-[.5px] border-grey-300"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="font-semibold text-[10px]">{t("maximum")}</p>
          <input
            type="number"
            value={maximum}
            min={possibleMinimum}
            max={possibleMaximum}
            onChange={(ev) => setMaximum(ev.target.value)}
            className="w-full p-2.5 rounded-[5px] outline-none border-[.5px] border-grey-300"
          />
        </div>
      </div>
      <div className="w-full relative h-16">
        <div
          className="w-[99%] h-2 absolute top-0 bottom-0 m-auto rounded-md"
          style={{
            backgroundImage: `linear-gradient(to right, #919191 ${minimumPercent}% , #DE9D62 ${minimumPercent}% , #DE9D62 ${maximumPercent}%, #919191 ${maximumPercent}%)`,
          }}
        />
        <input
          type="range"
          name="price_min"
          id="price_min"
          value={minimumPercent}
          min={0}
          max={99.9}
          onChange={(ev) => setMinimumInPercent(ev.target.value)}
        />
        <input
          type="range"
          name="price_max"
          id="price_max"
          value={maximumPercent}
          min={0}
          max={99.9}
          onChange={(ev) => setMaximumInPercent(ev.target.value)}
        />
      </div>
    </div>
  );
}
