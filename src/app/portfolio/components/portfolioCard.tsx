import Image, { StaticImageData } from "next/image";

export default function PortfolioCard({
  content,
  heading,
  children,
  imgs,
  leftIsBigger = true,
}: {
  heading: string;
  content: string;
  imgs: StaticImageData[];
  leftIsBigger?: boolean;
  children?: React.ReactNode;
}) {
  const OneSection = (
    <div className="xl:w-[671px] w-[664px] xl:h-auto h-[260px] relative rounded-3xl overflow-hidden">
      <Image
        src={imgs[0]}
        alt="a's thai spa 1"
        fill
        sizes="100%"
        className="w-full h-full object-cover"
      />
    </div>
  );
  const TwoSection = (
    <div className="xl:w-[467px] w-[664px] flex xl:flex-col xl:gap-0 gap-2.5 justify-between">
      <div className="w-full xl:h-[276px] h-[240px] relative rounded-3xl overflow-hidden">
        <Image
          src={imgs[1]}
          alt="a's thai spa 2"
          fill
          sizes="100%"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full xl:h-[276px] h-[240px] relative rounded-3xl overflow-hidden">
        <Image
          src={imgs[2]}
          alt="a's thai spa 3"
          fill
          sizes="100%"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
  return (
    <div className="flex flex-col gap-[50px] pb-[60px] border-b border-dotted border-[#BABABA]">
      <div className="flex flex-col gap-[18px]">
        <p className="font-bold font-sora text-5xl">{heading}</p>
        <p className="font-[500] text-lg leading-[22.5px] text-justify">
          {content}
        </p>
      </div>
      <div className="xl:h-[570px] flex xl:flex-row flex-col xl:gap-0 gap-2.5 xl:justify-between">
        {leftIsBigger ? OneSection : TwoSection}
        {leftIsBigger ? TwoSection : OneSection}
      </div>
    </div>
  );
}
