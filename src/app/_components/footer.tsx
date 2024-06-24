import Image from "next/image";
import Link from "next/link";
import QuickLinks from "./footer/quickLinks";
import ContactUs from "./footer/contactUs";
import SocialLinks from "./footer/social";
import UKSeinFooter from "./footer/images/UKSEINFooter.png";
export default function Footer() {
  return (
    <div className="shadow-footer mt-10 px-[130px] pt-20">
      <div className="flex flex-row align-middle justify-center gap-[121px] pb-10 border-b border-dotted border-grey-300">
        <div className="w-[238px] h-[220px] relative">
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
      <p className="font-lex text-center py-10">
        © 2024 UK Sein Furniture & Local Crafts. All rights reserved.
      </p>
    </div>
  );
}
