import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

export default function CarouselText({ slide }: { slide: number }) {
  const locale = useLocale();
  const textClass = `w-full absolute font-bold ${locale === "en" ? "xl:leading-[120px] md:leading-[58px] leading-8 xl:text-[80px] md:text-[56px] text-[32px]" : "xl:leading-[120px] md:leading-[70px] leading-10 xl:text-[76px] md:text-[46px] text-[28px]"} text-left text-white z-[2]`;
  const btnClass =
    "w-fit mx-auto md:py-[18px] py-3 md:px-[28px] px-4 rounded-[15px] bg-khaki-500 font-semibold text-white text-base hover:bg-khaki-700 duration-300";
  const t = useTranslations();
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
            className={`xl:w-[70%] ssm:w-[60%] md:w-[77%] w-[80%] xl:left-[15%] md:left-[13%] ssm:left-[20%] left-[0%] whitespace-pre xl:top-[10%] top-[20%] ${textClass} text-white  drop-shadow-[0_0px_2px_rgba(0,0,0,0.7)]`}
          >
            {t("home.main-carousel.carousel-text1")}
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
            className={`xl:w-[70%] ssm:w-[60%] md:w-[77%] w-[80%] xl:left-[15%] md:left-[13%] ssm:left-[20%] left-[0%] ${locale === "en" ? "xl:top-[15%] md:top-[20%]" : "xl:top-[5%] md:top-[10%]"} top-[25%] flex flex-col md:gap-8 gap-3 ${textClass} text-white drop-shadow-[0_0px_2px_rgba(0,0,0,0.7)]`}
          >
            {t("home.main-carousel.carousel-text2")}
            <Link href={"/products"} className={btnClass}>
              {t("common-phrases.shop-now")}
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
            className={`xl:w-[70%] ssm:w-[60%] md:w-[77%] w-[80%] xl:left-[15%] md:left-[13%] ssm:left-[20%] left-[0%] ${locale === "en" ? "xl:top-[15%] md:top-[20%]" : "xl:top-[5%] md:top-[10%]"} top-[25%] flex flex-col xl:gap-8 gap-3 ${textClass}  drop-shadow-[0_0px_2px_rgba(0,0,0,0.7)]`}
          >
            {t("home.main-carousel.carousel-text3")}
            <Link href={"/products"} className={btnClass}>
              {t("common-phrases.shop-now")}
            </Link>
          </motion.p>
        )}
      </AnimatePresence>
    </>
  );
}
