import { motion } from "framer-motion";
import Image from "next/image";
import Confirmed from "../images/confirmed.png";
import Link from "next/link";
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
          className="w-full h-full bg-cover"
        />
      </div>
      <p className="font-[500] text-center text-lg leading-[22.5px] text-grey-400">
        Your order has been registered successfully! <br />
        Our team will review your payment and reply <br />
        to you as soon as possible.
      </p>
      <div className="flex flex-row gap-6">
        <Link href={"/products"} className="black-button font-bold">
          GO BACK
        </Link>
        <Link
          href={"/orders"}
          className="button bg-khaki-500 font-bold text-white hover:bg-khaki-700 duration-300"
        >
          ORDER HISTORY
        </Link>
      </div>
    </motion.div>
  );
}
