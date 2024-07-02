export default function MessageInput({
  message,
  setMessage,
}: {
  message: string;
  setMessage: (message: string) => void;
}) {
  return (
    <div className="flex flex-col gap-[15px]">
      <label htmlFor="message" className="font-sora font-semibold">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        placeholder="Message..."
        value={message}
        onChange={(ev) => setMessage(ev.target.value)}
        className="h-[180px] p-6 rounded-[10px] bg-white-500 outline-none border border-transparent focus:border-grey-500 placeholder:text-grey-100 duration-300"
      />
    </div>
  );
}
