import Label from "./label";

export default function PhoneNoInput({
  phone,
  setPhone,
}: {
  phone: string;
  setPhone: (m: string) => void;
}) {
  return (
    <div className="flex flex-col gap-[14px]">
      <Label htmlFor="ph-no">Phone Number</Label>
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
