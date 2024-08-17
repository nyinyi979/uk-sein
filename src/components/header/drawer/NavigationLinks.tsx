import Home from "./images/home.svg";
import Products from "./images/product.svg";
import Portfolio from "./images/portfolio.svg";
import AboutUs from "./images/aboutUs.svg";
import Contact from "./images/contact.svg";
import HyperLink from "./Link";
import { useTranslations } from "next-intl";

export default function NavigationLinks({ hide }: { hide: () => void }) {
  const t = useTranslations("main-pages");
  const navLinks = [
    {
      url: "/",
      img: Home,
      name: t("home"),
    },
    {
      url: "/products",
      img: Products,
      name: t("products"),
    },
    {
      url: "/portfolio",
      img: Portfolio,
      name: t("portfolio"),
    },
    {
      url: "/about-us",
      img: AboutUs,
      name: t("about-us"),
    },
    {
      url: "/contact",
      img: Contact,
      name: t("contact"),
    },
  ];
  return (
    <div className="flex flex-col gap-1.5 border-b border-dotted border-grey-50">
      {navLinks.map((link) => (
        <HyperLink {...link} hide={hide} key={link.url} />
      ))}
    </div>
  );
}
