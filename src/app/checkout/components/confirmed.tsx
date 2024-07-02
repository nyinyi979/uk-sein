import Image from "next/image";
import Confirmed from "../images/confirmed.png";
import Link from "next/link";
import { motion } from "framer-motion";

export default function OrderConfirmed() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col gap-[60px] pt-[18px]"
      layout
    >
      <p className="font-sora font-semibold text-2xl">Ordered Successfully!</p>
      <div className="w-full h-[200px] relative">
        <Image
          src={Confirmed}
          alt="confirmed"
          fill
          sizes="100%"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="font-medium text-center md:text-lg text-sm leading-[22.5px] text-grey-400">
        Your order has been registered successfully! <br />
        Our team will review your payment and reply <br />
        to you as soon as possible.
      </p>
      <div className="flex xl:flex-row flex-col gap-6">
        <Link
          href={"/products"}
          className="xl:w-fit w-[340px] mx-auto xl:h-[50px] h-[56px] xl:py-4 py-[18px] px-7 rounded-xl bg-grey-500 font-bold text-white text-sm text-center hover:bg-grey-300 duration-300"
        >
          GO BACK
        </Link>
        <Link
          href={"/orders"}
          className="xl:w-fit w-[340px] mx-auto xl:h-[50px] h-[56px] block xl:py-4 py-[18px] px-7 rounded-xl bg-khaki-500 font-bold text-white text-sm text-center hover:bg-khaki-700 duration-300"
        >
          ORDER HISTORY
        </Link>
      </div>
    </motion.div>
  );
}
