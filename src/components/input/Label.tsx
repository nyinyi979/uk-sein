export default function Label({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="font-semibold xl:text-base text-sm">
      {children}
    </label>
  );
}
