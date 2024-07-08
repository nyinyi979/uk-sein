import Profile from "./images/profile.svg";
import Orders from "./images/orders.svg";
import Wishlist from "./images/wishlist.svg";
import HyperLink from "./link";
export default function ProfileLinks({ hide }: { hide: () => void }) {
  const profileLinks = [
    {
      url: "/profile",
      img: Profile,
      name: "My Profile",
    },
    {
      url: "/profile/orders",
      img: Orders,
      name: "My Orders",
    },
    {
      url: "/profile/wishlists",
      img: Wishlist,
      name: "Wishlists",
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
