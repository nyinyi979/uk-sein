export default function ProfileTitle() {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-sora font-bold xl:text-5xl md:text-[32px] text-lg">
        My Profile
      </p>
      <p className="font-semibold xl:text-lg md:text-base text-sm">
        <span className="text-grey-100">Account - </span> My Profile - Personal
        Information
      </p>
    </div>
  );
}
