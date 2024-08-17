export default function AboutUsCard({
  year,
  children,
  title,
  description,
}: {
  year: string;
  children: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="relative xl:pb-[100px] pb-[60px] xl:pl-[60px] sm:pl-8 border-l border-khaki-500">
      <div className="py-[20px] px-10 bg-white rounded-[15px] shadow-aboutus">
        <div className="xl:w-[1010px] w-full flex flex-col gap-[18px]">
          <p className="font-sora font-bold xl:text-4xl text-lg">{year}</p>
          {children}
          <p className="font-sora font-bold md:text-2xl">{title}</p>
          <p className="font-normal xl:text-lg text-sm text-justify md:leading-[22.5px] leading-[17.5px]">
            {description}
          </p>
        </div>
      </div>
      <div className="xl:size-[25px] size-[18px] absolute xl:-left-[13px] -left-2.5 xl:top-5 md:top-10 top-8 rounded-[5px] bg-khaki-500" />
    </div>
  );
}
