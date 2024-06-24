export default function NameInput({
  name,
  setName,
}: {
  name: string;
  setName: (n: string) => void;
}) {
  return (
    <div className="flex flex-col gap-[14px]">
      <label htmlFor="name" className="font-semibold">
        Name
      </label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        id="name"
        type="text"
        placeholder="Your name"
        className="input"
      />
    </div>
  );
}
