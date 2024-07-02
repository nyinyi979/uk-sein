export default function LoginHeader() {
  return (
    <div className="flex flex-col gap-2.5">
      <p className="font-sora font-bold xl:text-[42px] text-[32px]">
        Welcome back👋
      </p>
      <p className="font-normal xl:text-lg text-sm text-grey-200">
        Enter your account details to login to the system.
      </p>
    </div>
  );
}
