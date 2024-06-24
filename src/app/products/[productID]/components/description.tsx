export default function ProductDescription({
  description,
}: {
  description: string;
}) {
  return (
    <div className="w-full">
      <p className="font-sora font-semibold text-2xl">Description</p>
      <p className="font-normal text-justify leading-5">{description}</p>
    </div>
  );
}
