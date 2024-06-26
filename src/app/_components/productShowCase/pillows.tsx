import PillowImage from "./images/pillows.png";
import Image from "next/image";
import SmallCard from "./smallCard";
export default function Pillows() {
  return (
    <SmallCard
      bgClass="bg-white-700"
      heading="Pillows"
      href="/products"
      linkText="EXPLORE MORE"
      linkClass="text-khaki-500"
      pathClass="fill-khaki-500"
      content="Soft and tender pillows available for your bed"
    >
      <div className="w-full h-full absolute top-0 xl:right-0 -right-32">
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
