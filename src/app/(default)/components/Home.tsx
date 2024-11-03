import ProductShowCase from "./ProductShowCase";
import MainProductsCarousel from "./mainCarousel/Carousel";
// import ClientWorkdsCarousel from "./clientWords/ClientWordsCarousel";
import ProductsCarousel from "@/components/template/ProductCarousel";
import QualityAssureRow from "@/components/QualityAssurance";

export default function Home() {
  return (
    <div className="xl:w-[1190px] md:w-[85%] sm:w-[90%] w-full flex flex-col xl:gap-20 md:gap-10 gap-8 pb-20 mx-auto">
      <MainProductsCarousel />
      <QualityAssureRow className="md:block hidden" />
      <ProductShowCase />
      <QualityAssureRow className="md:hidden" />
      <ProductsCarousel
        similarProduct={false}
        fetchURL="product/top-product/"
      />
      {/* <ClientWorkdsCarousel /> */}
    </div>
  );
}
