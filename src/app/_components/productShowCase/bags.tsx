import BagsImage from "./images/bags.png";
import Image from "next/image";
import SmallCard from "./smallCard";
export default function Bags() {
  return (
    <SmallCard
      bgClass="bg-khaki-200"
      heading="Table"
      href="/products"
      linkText="GET 20% PROMO"
      content="Best quality crafted table available for your living room"
    >
      <div className="w-[255px] h-[290px] absolute top-0 right-0">
        <Image
          src={BagsImage}
          alt="bags"
          fill
          sizes="100%"
          className="w-full h-full bg-cover"
        />
      </div>
    </SmallCard>
  );
}
