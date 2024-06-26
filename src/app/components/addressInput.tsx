export default function AddresssInput({
  address,
  setAddress,
}: {
  address: string;
  setAddress: (n: string) => void;
}) {
  return (
    <div className="flex flex-col gap-[14px]">
      <label htmlFor="add" className="font-semibold">
        Address
      </label>
      <textarea
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        id="add"
        placeholder="Address"
        className="w-full h-[150px] p-5 outline-none rounded-xl border border-grey-100 focus:border-grey-500 placeholder:text-grey-100 resize-none duration-300"
      />
    </div>
  );
}
