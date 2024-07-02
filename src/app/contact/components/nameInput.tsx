export default function NameInput({
  name,
  setName,
}: {
  name: string;
  setName: (name: string) => void;
}) {
  return (
    <div className="flex flex-col gap-[15px]">
      <label htmlFor="name" className="font-sora font-semibold">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(ev) => setName(ev.target.value)}
        className="h-[72px] px-6 rounded-[10px] bg-white-500 outline-none border border-transparent focus:border-grey-500 placeholder:text-grey-100 duration-300"
      />
    </div>
  );
}
