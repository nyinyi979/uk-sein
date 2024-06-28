import Link from "next/link";

export default function QuickLinks() {
  const links = ["HOME", "PRODUCTS", "PORTFOLIO", "ABOUT US", "CONTACT"];
  const actualLinks = ["/", "products", "portfolio", "about-us", "contact"];
  return (
    <div className="xl:w-fit w-[96px] flex flex-col gap-5">
      <p className="font-sora font-semibold xl:text-lg text-khaki-500">
        Quick Links
      </p>
      <div className="flex flex-col xl:gap-5 gap-3">
        {links.map((link, ind) => (
          <Link
            key={link}
            href={actualLinks[ind]}
            className="hover:text-khaki-500 xl:font-normal font-semibold xl:text-base text-xs duration-300"
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}
