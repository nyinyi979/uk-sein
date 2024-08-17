import Profile from "./images/profile.svg";
import Orders from "./images/orders.svg";
import Wishlist from "./images/wishlist.svg";
import HyperLink from "./Link";
import { useTranslations } from "next-intl";
export default function ProfileLinks({ hide }: { hide: () => void }) {
  const t = useTranslations("main-pages");
  const profileLinks = [
    {
      url: "/profile",
      img: Profile,
      name: t("my-profile"),
    },
    {
      url: "/profile/orders",
      img: Orders,
      name: t("my-order"),
    },
    {
      url: "/profile/wishlists",
      img: Wishlist,
      name: t("wishlists"),
    },
  ];
  return (
    <div className="flex flex-col gap-1.5">
      {profileLinks.map((link) => (
        <HyperLink key={link.url} {...link} hide={hide} />
      ))}
    </div>
  );
}
