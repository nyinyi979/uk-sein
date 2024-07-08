import Home from "./images/home.svg";
import Products from "./images/product.svg";
import Portfolio from "./images/portfolio.svg";
import AboutUs from "./images/aboutUs.svg";
import Contact from "./images/contact.svg";
import HyperLink from "./link";

export default function NavigationLinks({ hide }: { hide: () => void }) {
  const navLinks = [
    {
      url: "/",
      img: Home,
      name: "Home",
    },
    {
      url: "/products",
      img: Products,
      name: "Products",
    },
    {
      url: "/portfolio",
      img: Portfolio,
      name: "Portfolio",
    },
    {
      url: "/about-us",
      img: AboutUs,
      name: "About Us",
    },
    {
      url: "/contact",
      img: Contact,
      name: "Contact Us",
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
