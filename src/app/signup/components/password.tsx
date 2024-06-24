export function PasswordInput({
  password,
  setPassword,
}: {
  password: string;
  setPassword: (pw: string) => void;
}) {
  return (
    <div className="flex flex-col gap-[14px]">
      <label htmlFor="password" className="font-semibold">
        Password
      </label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="password"
        name="pw"
        type="password"
        placeholder="Password"
        className="input"
      />
    </div>
  );
}
export function RePasswordInput({
  password,
  setPassword,
}: {
  password: string;
  setPassword: (pw: string) => void;
}) {
  return (
    <div className="flex flex-col gap-[14px]">
      <label htmlFor="repassword" className="font-semibold">
        Confirm Password
      </label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="repassword"
        name="re-pw"
        type="password"
        placeholder="Password"
        className="input"
      />
    </div>
  );
}
