import Label from "./label";

export default function PasswordInput({
  id,
  displayedLabel,
  password,
  setPassword,
}: {
  id: string;
  password: string;
  displayedLabel: string;
  setPassword: (pw: string) => void;
}) {
  return (
    <div className="flex flex-col gap-[14px]">
      <Label htmlFor={id}>{displayedLabel}</Label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id={id}
        name={id}
        type="password"
        placeholder="Password"
        className="input"
      />
    </div>
  );
}
