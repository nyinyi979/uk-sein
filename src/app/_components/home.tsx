import ProductShowCase from "./productShowCase";
import QualityAssureRow from "../components/qualityAssurance";
import DiscountBanner from "../components/discountBanner";
import PromotionBanner from "../components/promotionBanner";
import MainProductsCarousel from "./mainCarousel/carousel";
import TopProductsCarousel from "./topProducts/productCarousel";
import ClientWorkdsCarousel from "./clientWords/clientWordsCarousel";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20 px-[125px]">
      <MainProductsCarousel />
      <QualityAssureRow />
      <ProductShowCase />
      <DiscountBanner imgURL="/images/promotion1.png" percent="40" />
      <TopProductsCarousel similarProduct={false} fetchURL="" />
      <PromotionBanner />
      <ClientWorkdsCarousel />
    </div>
  );
}
