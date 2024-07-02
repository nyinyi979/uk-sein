import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function CarouselText({ slide }: { slide: number }) {
  const textClass =
    "w-full absolute font-bold xl:text-[80px] md:text-[56px] text-[32px] xl:leading-[120px] md:leading-[58px] leading-8 text-center text-white";
  const btnClass =
    "w-fit mx-auto md:py-[18px] py-3 md:px-[28px] px-4 rounded-[15px] bg-khaki-500 font-semibold text-white text-base hover:bg-khaki-700 duration-300";

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
            className={`xl:top-[10%] md:top-[20%] top-[30%] ${textClass} text-white z-20`}
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
            className={`xl:top-[15%] md:top-[20%] top-[25%] flex flex-col md:gap-8 gap-3 ${textClass} text-white z-20`}
          >
            Transform Spaces <br />
            with Local Flair
            <Link href={"/products"} className={btnClass}>
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
            className={`xl:top-[15%] md:top-[20%] top-[25%] flex flex-col xl:gap-8 gap-3 ${textClass} z-20`}
          >
            Elevate Your Home <br />
            with Local Flair
            <Link href={"/products"} className={btnClass}>
              Shop Now
            </Link>
          </motion.p>
        )}
      </AnimatePresence>
    </>
  );
}
