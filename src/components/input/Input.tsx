export default function Input({
  id,
  setValue,
  value,
  label,
  placeholder,
  required,
  type = "text",
}: {
  label?: string;
  required?: boolean;
  value: string;
  setValue: (val: string) => void;
  placeholder?: string;
  type?: "text" | "password" | "email" | "number";
  id: string;
}) {
  return (
    <div className="flex flex-col gap-[14px]">
      {label && (
        <label htmlFor={id} className="font-semibold xl:text-base text-sm">
          {label}
          {required && <span className="font-semibold text-red-500">*</span>}
        </label>
      )}
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id={id}
        type={type}
        placeholder={placeholder}
        className="input"
        min={0}
        onScroll={(ev) => {
          ev.currentTarget.blur();
        }}
        onWheel={(ev) => {
          ev.currentTarget.blur();
        }}
      />
    </div>
  );
}
