import Image from "next/image";
import Thumnbail from "../images/img.svg";
import React from "react";
export default function ImageUpload({setFile}:{setFile:(f: File)=>void}) {
  const [imgData, setImgData] = React.useState<string|null>(null);
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) =>{
    if(e.target.files){
      console.log(e.target.files)
      setFile(e.target.files[0]);
      var reader  = new FileReader();
      reader.onload = function(){
        setImgData((reader.result) as string);
      }
      if(e.target.files[0]) reader.readAsDataURL(e.target.files[0]);
    }
  }
  return (
    <div className="flex flex-col gap-[14px]">
      <label htmlFor="profile">
        <p className="font-semibold pb-3">Profile Image</p>
        <div className="relative size-[120px] rounded-xl overflow-hidden">
          {imgData!==null&&<img src={imgData} alt="" className="bg-[#0000001A] w-full h-full object-cover" />}
          {imgData===null&&<div className="bg-[#0000001A] w-full h-full hover:bg-grey-50 duration-300" />}
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
      <input type="file" name="profile" id="profile" className="hidden" onChange={handleFileUpload}/>
    </div>
  );
}
