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
    <div className="xl:w-[671px] md:w-[664px] sm:w-[340px] w-full xl:h-auto md:h-[260px] h-[200px] mx-auto relative rounded-3xl overflow-hidden">
      <Image
        src={imgs[0]}
        alt="image"
        fill
        sizes="100%"
        className="size-full object-cover"
      />
    </div>
  );
  const TwoSection = (
    <div className="xl:w-[467px] md:w-[664px] sm:w-[340px] w-full flex xl:flex-col xl:gap-0 gap-2.5 justify-between mx-auto">
      <div className="w-full xl:h-[276px] md:h-[240px] h-[170px] relative rounded-3xl overflow-hidden">
        <Image
          src={imgs[1]}
          alt="image"
          fill
          sizes="100%"
          className="size-full object-cover"
        />
      </div>
      <div className="w-full xl:h-[276px] md:h-[240px] h-[170px] relative rounded-3xl overflow-hidden">
        <Image
          src={imgs[2]}
          alt="image"
          fill
          sizes="100%"
          className="size-full object-cover"
        />
      </div>
    </div>
  );
  return (
    <div className="flex flex-col gap-[50px] pb-[60px] border-b border-dotted border-[#BABABA] sm:px-0 px-2">
      <div className="flex flex-col gap-[18px]">
        <p className="font-bold font-sora xl:text-5xl text-2xl">{heading}</p>
        <p className="font-medium xl:text-lg text-sm xl:leading-[22.5px] leading-[17.5px] text-justify">
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
