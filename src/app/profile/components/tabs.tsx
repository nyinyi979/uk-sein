export default function ProfileTabs({
  page,
  updatePage,
}: {
  page: number;
  updatePage: (p: number) => void;
}) {
  return (
    <div className="flex flex-row">
      <button
        disabled={page === 0}
        onClick={() => updatePage(0)}
        className="py-5 px-[72px] font-bold text-lg disabled:border-b-[1.5px] disabled:border-khaki-500 disabled:text-khaki-500 hover:bg-khaki-50 duration-300"
      >
        Personal Information
      </button>
      <button
        disabled={page === 1}
        onClick={() => updatePage(1)}
        className="py-5 px-[72px] font-bold text-lg disabled:border-b-[1.5px] disabled:border-khaki-500 disabled:text-khaki-500 hover:bg-khaki-50 duration-300"
      >
        Change Password
      </button>
    </div>
  );
}
