import React from "react";
import Image from "next/image";
import Thumnbail from "@/svg/img.svg";
import { useTranslations } from "next-intl";

export default function ImageUpload({
  setFile,
  imgURL,
}: {
  setFile: (f: File) => void;
  imgURL?: string;
}) {
  const [imgData, setImgData] = React.useState<string | null>(null);
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      var reader = new FileReader();
      reader.onload = function () {
        setImgData(reader.result as string);
      };
      if (e.target.files[0]) reader.readAsDataURL(e.target.files[0]);
    }
  };
  const t = useTranslations("input");
  return (
    <div className="flex flex-col gap-[14px]">
      <label htmlFor="profile">
        <p className="font-semibold pb-3">{t("profile")}</p>
        <div className="size-[120px] relative rounded-xl overflow-hidden">
          {imgData !== null && (
            <img
              src={imgData}
              alt=""
              className="bg-[#0000001A] size-full object-cover"
            />
          )}
          {imgURL && (
            <img
              src={imgURL}
              alt=""
              className="bg-[#0000001A] size-full object-cover"
            />
          )}
          {imgData === null && (
            <div className="bg-[#0000001A] size-full hover:bg-grey-50 duration-300" />
          )}
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
      <input
        type="file"
        name="profile"
        id="profile"
        className="hidden"
        onChange={handleFileUpload}
      />
    </div>
  );
}
