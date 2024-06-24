import Link from "next/link";

export default function QuickLinks() {
  const links = ["HOME", "PRODUCTS", "PORTFOLIO", "ABOUT US", "CONTACT"];
  const actualLinks = ["/", "products", "portfolio", "about-us", "contact"];
  return (
    <div className="flex flex-col gap-5">
      <p className="font-sora font-semibold text-lg text-khaki-500">
        Quick Links
      </p>
      <div className="flex flex-col gap-5">
        {links.map((link, ind) => (
          <Link
            key={link}
            href={actualLinks[ind]}
            className="hover:text-khaki-500 duration-300"
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}
