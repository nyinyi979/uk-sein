import MediumCard from "./mediumCard";
import BasketsImage from "./images/baskets.png";
import Link from "next/link";
import Image from "next/image";
export default function Baskets() {
  return (
    <MediumCard
      heading="Baskets"
      image={
        <div className="w-[423px] h-[223px] absolute bottom-0 -right-20">
          <Image
            src={BasketsImage}
            alt="baskets"
            fill
            sizes="100%"
            className="w-full h-full bg-cover"
          />
        </div>
      }
      content="Best quality basket available for your kitchen"
    >
      <Link href={"/products"} className="black-button">
        EXPLORE NOW
      </Link>
    </MediumCard>
  );
}
