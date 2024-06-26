export default function PhoneNoInput({
  phone,
  setPhone,
}: {
  phone: string;
  setPhone: (m: string) => void;
}) {
  return (
    <div className="flex flex-col gap-[14px]">
      <label htmlFor="ph-no" className="font-semibold">
        Phone Number
      </label>
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        id="ph-no"
        type="text"
        placeholder="Phone number"
        className="input"
      />
    </div>
  );
}
