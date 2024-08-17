import Image from "next/image";
import Link from "next/link";
import UkSeinFooter from "@/components/footer/images/UKSEINFooter.png";
export default function CheckoutFooter() {
  const links = [
    { name: "HOME", link: "/" },
    { name: "PRODUCTS", link: "/products" },
    { name: "PORTFOLIO", link: "/portfolio" },
    { name: "ABOUT US", link: "/about-us" },
    { name: "CONTACT", link: "/contact" },
  ];
  return (
    <div className="lg:w-[1180px] md:[768px] hidden md:flex flex-col lg:flex-row lg:justify-between gap-[18px] items-center mx-auto py-10">
      <div className="lg:size-[86px] size-[116px] relative">
        <Image
          src={UkSeinFooter}
          alt="footer"
          fill
          sizes="100%"
          className="size-auto object-cover"
        />
      </div>
      <div className="flex gap-[56px] p-2.5">
        {links.map((li) => (
          <Link
            key={li.link}
            href={li.link}
            className="font-sora font-normal hover:text-khaki-500 duration-300"
          >
            {li.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
