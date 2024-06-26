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
      <label htmlFor={id} className="font-semibold">
        {displayedLabel}
      </label>
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
