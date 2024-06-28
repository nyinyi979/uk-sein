import Image from "next/image";
import Portfolio5 from "../images/portfolio-5.png";
import Portfolio6 from "../images/portfolio-6.png";
import Portfolio7 from "../images/portfolio-7.png";
export default function OurRecentProjects() {
  const arr = [
    {
      id: "orp1",
      name: "A's Thai Spa",
      description:
        "To expand its presence and offer customers an immersive shopping experience.",
      img: Portfolio5,
    },
    {
      id: "orp2",
      name: "Dream Floral Service & Event Decoration",
      description:
        "To expand its presence and offer customers an immersive shopping experience.",
      img: Portfolio6,
    },
    {
      id: "orp3",
      name: "Dior By Heart",
      description:
        "To expand its presence and offer customers an immersive shopping experience.",
      img: Portfolio7,
    },
  ];
  return (
    <div className="flex flex-col gap-[50px]">
      <p className="font-sora font-bold text-5xl text-center">
        Our Recent Projects
      </p>
      <div className="xl:grid w-fit hidden grid-cols-3 gap-5 mx-auto">
        {arr.map((a) => (
          <div key={a.id} className="flex flex-col gap-6">
            <div className="size-[374px] relative rounded-[10px]">
              <Image
                src={a.img}
                alt={a.name}
                fill
                sizes="100%"
                className="w-full h-full bg-cover"
              />
            </div>
            <div className="flex flex-col gap-6">
              <p className="w-[278px] h-[60px] font-sora font-bold text-2xl">
                {a.name}
              </p>
              <p className="font-normal leading-[22.5px] text-justify text-lg">
                {a.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
