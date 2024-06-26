import { customerInOrder } from "@/app/types/type";
import Profile from "../images/calendar.svg";
import Email from "../images/calendar.svg";
import Phone from "../images/calendar.svg";
import OrderDetailCard from "./orderDetailCard";
import Image from "next/image";

export default function CustomerDetails({
  email,
  name,
  phoneNo,
}: customerInOrder) {
  return (
    <OrderDetailCard heading="Customer Details">
      <div className="flex flex-col gap-[18px]">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-3">
            <div className="w-[18px] h-5 relative">
              <Image
                src={Profile}
                alt="profile"
                fill
                sizes="100%"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-700 text-lg text-grey-100">Name</p>
          </div>
          <p className="font-700 text-lg">{name}</p>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-3">
            <div className="w-[18px] h-5 relative">
              <Image
                src={Email}
                alt="profile"
                fill
                sizes="100%"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-700 text-lg text-grey-100">Email</p>
          </div>
          <p className="font-700 text-lg">{email}</p>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-3">
            <div className="w-[18px] h-5 relative">
              <Image
                src={Phone}
                alt="phone no"
                fill
                sizes="100%"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-700 text-lg text-grey-100">Phone no</p>
          </div>
          <p className="font-700 text-lg">{phoneNo}</p>
        </div>
      </div>
    </OrderDetailCard>
  );
}
