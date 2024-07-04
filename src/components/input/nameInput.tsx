import Label from "./label";

export default function NameInput({
  name,
  setName,
}: {
  name: string;
  setName: (n: string) => void;
}) {
  return (
    <div className="flex flex-col gap-[14px]">
      <Label htmlFor="name">Name</Label>
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
