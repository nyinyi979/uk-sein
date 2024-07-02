import Image from "next/image";
import SmallCard from "./smallCard";
import TableImage from "./images/table.png";

export default function Pillows() {
  return (
    <SmallCard
      bgClass="bg-[#F3F3F3]"
      heading="Table"
      href="/products"
      linkText="GET 20% PROMO"
      textClass="text-white xl:text-grey-500"
      linkClass="text-white xl:text-grey-500"
      pathClass="fill-white"
      content="Best quality crafted table available for your living room"
    >
      <div className="absolute w-full h-full top-0 right-0">
        <Image
          src={TableImage}
          alt="table"
          fill
          sizes="100%"
          className="w-full h-full object-cover xl:brightness-100 brightness-50"
        />
      </div>
    </SmallCard>
  );
}
