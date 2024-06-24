import PillowImage from "./images/pillows.png";
import Image from "next/image";
import SmallCard from "./smallCard";
export default function Pillows() {
  return (
    <SmallCard
      bgClass="bg-[#F3F3F3]"
      heading="Pillows"
      href="/products"
      linkText="EXPLORE MORE"
      content="Soft and tender pillows available for your bed"
    >
      <div className="w-full h-full absolute top-0 right-0">
        <Image
          src={PillowImage}
          alt="pillows"
          fill
          sizes="100%"
          className="w-full h-full bg-cover"
        />
      </div>
    </SmallCard>
  );
}
