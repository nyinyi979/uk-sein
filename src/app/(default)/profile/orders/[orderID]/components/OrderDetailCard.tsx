export default function OrderDetailCard({
  heading,
  children,
  rightEle,
}: {
  heading: string;
  children?: React.ReactNode;
  rightEle?: React.ReactNode;
}) {
  return (
    <div className="xl:w-[376px] w-[316px] xl:h-[243px] h-fit flex flex-col gap-8 md:p-6 pb-8 px-6 rounded-[5px] xl:overflow-hidden md:shadow-orderDetail md:border-none border-b border-dotted border-grey-300">
      <div className="flex font-sora md:font-semibold font-bold xl:text-2xl text-lg">
        {heading}
        {rightEle && <div className="ml-auto">{rightEle}</div>}
      </div>
      {children}
    </div>
  );
}
