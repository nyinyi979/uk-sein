import SearchBar from "@/app/components/searchBar";

export default function OrderTitle() {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col xl:gap-2.5 gap-1.5">
        <p className="font-sora font-bold xl:text-5xl text-[32px]">My Orders</p>
        <p className="font-semibold xl:text-lg text-grey-100">
          Acccount - <span className="text-grey-500">Order History</span>
        </p>
      </div>
      <div className="xl:w-[430px] w-[280px] ml-auto">
        <SearchBar
          onSearch={(s) => {}}
          width="w-full"
          placeholder="Search by keyword or order..."
        />
      </div>
    </div>
  );
}
