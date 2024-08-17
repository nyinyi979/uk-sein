export default function MediumCard({
  content,
  heading,
  children,
  image,
}: {
  heading: string;
  content: string;
  image?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`img-scale xl:w-full w-full xl:h-full md:h-[200px] h-[140px] relative flex md:py-10 py-3 xl:pl-8 px-6 rounded-3xl overflow-hidden bg-white-700`}
    >
      <div className="z-[2] w-[217px] flex flex-col xl:gap-8 gap-4">
        <div className="flex flex-col gap-1.5">
          <p className="font-sora font-bold xl:text-[40px] md:text-2xl text-lg xl:leading-[54px] md:leading-[30px] text-khaki-500">
            {heading}
          </p>
          <p className="xl:font-medium font-normal xl:text-sm text-xs leading-5">
            {content}
          </p>
        </div>
        {children}
      </div>
      {image}
    </div>
  );
}
