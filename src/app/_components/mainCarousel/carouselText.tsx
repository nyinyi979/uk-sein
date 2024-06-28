import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function CarouselText({ slide }: { slide: number }) {
  const textClass =
    "w-full absolute font-bold xl:text-[80px] text-[56px] xl:leading-[120px] leading-[58px] text-center text-white";
  return (
    <>
      <AnimatePresence>
        {slide === 0 && (
          <motion.p
            animate={{ translateY: [100, 0], opacity: [0, 1] }}
            exit={{
              translateY: 100,
              opacity: 0,
              transition: {
                stiffness: 19.75,
                mass: 1,
                damping: 6.67,
                delay: 0.3,
              },
            }}
            transition={{
              stiffness: 19.75,
              mass: 1,
              damping: 6.67,
              delay: 0.3,
            }}
            className={`xl:top-[10%] top-[20%] ${textClass} text-white z-20`}
          >
            Your Home <br />
            Your Style <br />
            Our Crafts <br />
          </motion.p>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {slide === 1 && (
          <motion.p
            animate={{ translateY: [-100, 0], opacity: [0, 1] }}
            exit={{
              translateY: 100,
              opacity: 0,
              transition: {
                stiffness: 19.75,
                mass: 1,
                damping: 6.67,
                delay: 0.6,
              },
            }}
            transition={{
              stiffness: 19.75,
              mass: 1,
              damping: 6.67,
              delay: 0.5,
            }}
            className={`xl:top-[15%] top-[20%] flex flex-col gap-8 ${textClass} text-white z-20`}
          >
            Transform Spaces <br />
            with Local Flair
            <Link
              href={"/products"}
              className="w-fit mx-auto py-[18px] px-[28px] rounded-[15px] bg-khaki-500 font-semibold text-white text-base hover:bg-khaki-700 duration-300"
            >
              Shop Now
            </Link>
          </motion.p>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {slide === 2 && (
          <motion.p
            animate={{
              translateY: [-100, 0],
              opacity: [0, 1],
            }}
            exit={{
              translateY: -100,
              opacity: 0,
              transition: {
                stiffness: 19.75,
                mass: 1,
                damping: 6.67,
                delay: 0.3,
              },
            }}
            transition={{
              stiffness: 19.75,
              mass: 1,
              damping: 6.67,
              delay: 0.6,
            }}
            className={`xl:top-[15%] top-[20%] flex flex-col gap-8 ${textClass} z-20`}
          >
            Elevate Your Home <br />
            with Local Flair
            <Link
              href={"/products"}
              className="w-fit mx-auto py-[18px] px-[28px] rounded-[15px] bg-khaki-500 font-semibold text-white text-base hover:bg-khaki-700 duration-300"
            >
              Shop Now
            </Link>
          </motion.p>
        )}
      </AnimatePresence>
    </>
  );
}
