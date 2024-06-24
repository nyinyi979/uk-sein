export default function MailInput({
  mail,
  setMail,
}: {
  mail: string;
  setMail: (m: string) => void;
}) {
  return (
    <div className="flex flex-col gap-[14px]">
      <label htmlFor="mail" className="font-semibold">
        Email
      </label>
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
