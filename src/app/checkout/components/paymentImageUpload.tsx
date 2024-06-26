import Image from "next/image";
import Thumnbail from "../../components/images/img.svg";
import React from "react";
export default function PaymentImageUpload({
  setFile,
}: {
  setFile: (f: File) => void;
}) {
  const [imgData, setImgData] = React.useState<string | null>(null);
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      console.log(e.target.files);
      setFile(e.target.files[0]);
      var reader = new FileReader();
      reader.onload = function () {
        setImgData(reader.result as string);
      };
      if (e.target.files[0]) reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <div className="flex flex-col gap-[14px]">
      <label htmlFor="payment">
        <p className="font-semibold pb-3">
          Payment <span className="text-red-500">*</span>
        </p>
        <div className="w-[180px] h-[300px] relative rounded-xl overflow-hidden">
          {imgData !== null && (
            <img
              src={imgData}
              alt=""
              className="bg-[#0000001A] w-full h-full object-cover"
            />
          )}
          {imgData === null && (
            <div className="bg-[#0000001A] w-full h-full hover:bg-grey-50 duration-300" />
          )}
          <Image
            src={Thumnbail}
            alt="thumbnail"
            width={24}
            height={24}
            priority
            className="w-auto h-auto absolute left-[75px] top-[130px]"
          />
        </div>
      </label>
      <input
        type="file"
        name="payment"
        id="payment"
        className="hidden"
        onChange={handleFileUpload}
      />
    </div>
  );
}
