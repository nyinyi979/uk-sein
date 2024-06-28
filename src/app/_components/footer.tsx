import Image from "next/image";
import QuickLinks from "./footer/quickLinks";
import ContactUs from "./footer/contactUs";
import SocialLinks from "./footer/social";
import UKSeinFooter from "./footer/images/UKSEINFooter.png";
export default function Footer() {
  return (
    <div className="shadow-footer w-full flex flex-col gap-8 mt-10 mx-auto xl:py-[50px] xl:px-[125px] px-8 py-10">
      <div className="flex flex-row align-middle xl:justify-center justify-between xl:gap-[121px] pb-10 border-b border-dotted border-grey-300">
        <div className="xl:w-[238px] xl:h-[220px] w-[107.84px] h-[100px] relative">
          <Image
            src={UKSeinFooter}
            alt="uk sein logo"
            fill
            sizes="100%"
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <QuickLinks />
        <ContactUs />
        <SocialLinks />
      </div>
      <p className="font-lex text-center">
        © 2024 UK Sein Furniture & Local Crafts. All rights reserved.
      </p>
    </div>
  );
}
