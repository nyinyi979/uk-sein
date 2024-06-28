export default function ProductDescription({
  description,
}: {
  description: string;
}) {
  return (
    <div className="w-full flex flex-col gap-[18px]">
      <p className="font-sora font-semibold text-2xl">Description</p>
      <p className="font-normal text-justify xl:text-base text-xs xl:leading-5 leading-[15px]">
        {description}
      </p>
    </div>
  );
}
