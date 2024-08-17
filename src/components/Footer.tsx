import Image from "next/image";
import QuickLinks from "./footer/QuickLinks";
import ContactUs from "./footer/ContactUs";
import SocialLinks from "./footer/Social";
import UKSeinFooter from "./footer/images/UKSEINFooter.png";

export default function Footer() {
  return (
    <div className="w-full flex flex-col gap-8 mt-10 mx-auto xl:py-[50px] xl:px-[125px] px-7 md:py-10 py-8 shadow-footer">
      <div className="w-[90%] flex md:flex-row flex-col align-middle xl:justify-center justify-between xl:gap-[121px] md:gap-0 gap-8 mx-auto pb-10 border-b border-dotted border-grey-300">
        <div className="xl:w-[238px] xl:h-[220px] md:w-[107.84px] w-[161px] md:h-[100px] h-[150px] relative">
          <Image
            src={UKSeinFooter}
            alt="uk sein logo"
            fill
            sizes="100%"
            className="size-full object-contain"
            priority
          />
        </div>
        <div className="flex flex-row xl:gap-[121px] md:gap-16 gap-10 sm:flex-nowrap flex-wrap">
          <QuickLinks />
          <ContactUs />
        </div>
        <SocialLinks />
      </div>
      <p className="font-lex text-center text-grey-200 xl:text-base md:text-sm text-xs">
        © 2024 UK Sein Furniture & Local Crafts. All rights reserved.
      </p>
    </div>
  );
}
