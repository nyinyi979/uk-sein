import ProductShowCase from "./productShowCase";
import QualityAssureRow from "../../components/qualityAssurance";
import DiscountBanner from "../../components/banner/discountBanner";
import PromotionBanner from "../../components/banner/promotionBanner";
import MainProductsCarousel from "./mainCarousel/carousel";
import TopProductsCarousel from "./topProducts/productCarousel";
import ClientWorkdsCarousel from "./clientWords/clientWordsCarousel";

export default function Home() {
  return (
    <div className="xl:w-[1190px] md:w-[662px] w-[393px] flex flex-col xl:gap-20 md:gap-10 gap-8 pb-20 mx-auto xl:px-0">
      <MainProductsCarousel />
      <QualityAssureRow className="md:block hidden" />
      <ProductShowCase />
      <QualityAssureRow className="md:hidden" />
      <DiscountBanner imgURL="/images/promotion1.png" percent="40" />
      <TopProductsCarousel similarProduct={false} fetchURL="" />
      <PromotionBanner />
      <ClientWorkdsCarousel />
    </div>
  );
}
