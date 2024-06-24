import Image from "next/image";
import AboutUsCard from "../components/aboutUsCard";
import AboutUs1 from "../images/about-us-1.png";
import AboutUs2 from "../images/about-us-2.png";
import AboutUs3 from "../images/about-us-3.png";
import AboutUs4 from "../images/about-us-4.png";
import AboutUs5 from "../images/about-us-5.png";
import AboutUs6 from "../images/about-us-6.png";
import AboutUs7 from "../images/about-us-7.png";
export default function AboutUsCards() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2.5 font-sora">
        <p className="font-normal text-2xl text-grey-400">Story of UK SEIN</p>
        <p className="font-normal text-5xl text-grey-500">OVER THE YEARS</p>
      </div>
      <div className="flex flex-col gap-0">
        <AboutUsCard
          year="2018"
          title="The Visionary Founder"
          description={`In a small, sunlit workshop, Alex Thompson sketched the blueprint for the "Eclipse Chair." Combining ergonomic curves with sustainable materials, this first piece embodied a perfect blend of comfort and style. Alex's dedication to quality and innovation quickly became evident as the Eclipse Chair garnered attention and praise. The chair's success was a testament to the brand’s philosophy: creating furniture that was both beautiful and environmentally responsible. This initial triumph laid a solid foundation for the brand's future, setting high expectations and promising a new standard in furniture design.`}
        >
          <div className="w-full h-[450px] relative rounded-[10px]">
            <Image
              src={AboutUs1}
              alt="About us 1"
              fill
              sizes="100%"
              className="w-full h-full rounded-[10px] object-cover"
            />
          </div>
        </AboutUsCard>
        <AboutUsCard
          year="2020"
          title="The Smart Furniture Revolution"
          description={`As technology advanced, the brand embraced the opportunity to integrate smart features into their designs. The launch of the "SmartLiving Series" marked a significant milestone, introducing furniture with built-in charging ports, wireless speakers, and adjustable lighting. The flagship product, the "IntelliSofa," became an instant favorite among tech-savvy customers, offering a seamless blend of comfort and modern convenience. This innovative approach not only enhanced the functionality of the furniture but also positioned the brand as a leader in the smart furniture market, attracting a new, younger audience eager for contemporary solutions.`}
        >
          <div className="w-[full] h-[450px] relative flex flex-row justify-between">
            <div className="w-[49%] h-full relative">
              <Image
                src={AboutUs2}
                alt="About us 2"
                fill
                sizes="50%"
                className="w-full h-full rounded-[10px] object-cover"
              />
            </div>
            <div className="w-[49%] h-full relative">
              <Image
                src={AboutUs3}
                alt="About us 3"
                fill
                sizes="50%"
                className="w-full h-full rounded-[10px] object-cover"
              />
            </div>
          </div>
        </AboutUsCard>
        <AboutUsCard
          year="2022"
          title="Opening Flagship Stores"
          description={`To expand its presence and offer customers an immersive shopping experience, the brand opened flagship stores in major cities. These stores showcased the entire range of products, allowing customers to see and feel the quality and craftsmanship firsthand. The flagship stores became destinations in themselves, beautifully designed to reflect the brand's aesthetic and values. This expansion not only boosted sales but also strengthened the brand’s reputation, making it a household name in the furniture industry. By bringing their vision directly to consumers, the brand solidified its position as a market leader and continued to grow its loyal customer base.`}
        >
          <div className="w-[full] h-[450px] relative flex flex-row justify-between">
            <div className="w-[32%] h-full relative">
              <Image
                src={AboutUs4}
                alt="About us 2"
                fill
                sizes="50%"
                className="w-full h-full rounded-[10px] object-cover"
              />
            </div>
            <div className="w-[32%] h-full relative">
              <Image
                src={AboutUs5}
                alt="About us 3"
                fill
                sizes="50%"
                className="w-full h-full rounded-[10px] object-cover"
              />
            </div>
            <div className="w-[32%] h-full relative">
              <Image
                src={AboutUs6}
                alt="About us 3"
                fill
                sizes="50%"
                className="w-full h-full rounded-[10px] object-cover"
              />
            </div>
          </div>
        </AboutUsCard>
        <AboutUsCard
          year="2024"
          title="Building Local Ties"
          description={`In its fourth year, the brand launched a community-driven initiative called "Furniture for All." This program focused on giving back to local communities through furniture donations and workshops on sustainable living. Partnering with non-profits, the brand provided comfortable, stylish furniture to shelters and community centers. Additionally, they hosted events where artisans and designers taught locals how to upcycle old furniture and make eco-friendly choices in their homes. The initiative not only helped those in need but also fostered a sense of community and environmental awareness. This commitment to social responsibility resonated deeply with customers, strengthening their loyalty and enhancing the brand's image as a socially conscious and caring company.`}
        >
          <div className="w-full h-[450px] relative rounded-[10px]">
            <Image
              src={AboutUs7}
              alt="About us 1"
              fill
              sizes="100%"
              className="w-full h-full rounded-[10px] object-cover"
            />
          </div>
        </AboutUsCard>
      </div>
    </div>
  );
}
