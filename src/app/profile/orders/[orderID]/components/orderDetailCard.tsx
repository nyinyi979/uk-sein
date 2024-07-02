export default function OrderDetailCard({
  heading,
  children,
}: {
  heading: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="xl:w-[376px] w-[316px] h-fit flex flex-col gap-8 p-6 rounded-[5px] shadow-orderDetail">
      <p className="font-sora font-semibold xl:text-2xl text-lg">{heading}</p>
      {children}
    </div>
  );
}
