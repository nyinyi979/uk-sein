import BagsImage from "./images/bags.png";
import Image from "next/image";
import SmallCard from "./smallCard";

export default function Bags() {
  return (
    <SmallCard
      bgClass="bg-khaki-200"
      heading="Bags"
      href="/products"
      linkText="GET 20% PROMO"
      pathClass="fill-grey-500"
      content="Best quality crafted table available for your living room"
    >
      <div className="xl:w-[255px] xl:h-[290px] w-[142px] h-[164px] absolute top-0 right-0">
        <Image
          src={BagsImage}
          alt="bags"
          fill
          sizes="100%"
          className="w-full h-full object-cover"
        />
      </div>
    </SmallCard>
  );
}
