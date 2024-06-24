import Image from "next/image";
import Thumnbail from "../images/img.svg";
export default function ImageUpload() {
  return (
    <div className="flex flex-col gap-[14px]">
      <label htmlFor="profile">
        <p className="font-semibold pb-3">Profile Image</p>
        <div className="relative size-[120px] rounded-xl overflow-hidden">
          {/* <img src="" alt="" className="bg-[#0000001A] w-full h-full object-cover" /> */}
          <div className="bg-[#0000001A] w-full h-full hover:bg-grey-50 duration-300" />
          <Image
            src={Thumnbail}
            alt="thumbnail"
            width={24}
            height={24}
            priority
            className="w-auto h-auto absolute left-12 top-12"
          />
        </div>
      </label>
      <input type="file" name="profile" id="profile" className="hidden" />
    </div>
  );
}
