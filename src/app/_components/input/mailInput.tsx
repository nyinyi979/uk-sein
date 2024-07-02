import Label from "./label";

export default function MailInput({
  mail,
  setMail,
}: {
  mail: string;
  setMail: (m: string) => void;
}) {
  return (
    <div className="flex flex-col gap-[14px]">
      <Label htmlFor="email">Email</Label>
      <input
        value={mail}
        onChange={(e) => setMail(e.target.value)}
        id="email"
        type="email"
        placeholder="Email"
        className="input"
      />
    </div>
  );
}
