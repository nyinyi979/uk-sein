import SearchBar from "@/app/components/searchBar";

export default function OrderTitle() {
  return (
    <div className="px-[125px]">
      <div className="flex flex-row">
        <div className="flex flex-col gap-2.5">
          <p className="font-sora font-bold text-5xl">My Orders</p>
          <p className="font-semibold text-lg text-grey-100">
            Acccount -<span className="text-grey-500">Order History</span>
          </p>
        </div>
        <div className="w-[430px] ml-auto">
          <SearchBar onSearch={(s)=>{}} width="w-full"/>
        </div>
      </div>
    </div>
  );
}
