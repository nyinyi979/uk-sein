import PromotionBanner from "@/app/components/promotionBanner";
import Categories from "./categories";
import TopProductsCarousel from "@/app/_components/topProducts/productCarousel";

export default function Products() {
  return (
    <div className="xl:w-[1192px] flex flex-col xl:gap-20 gap-10 xl:mx-auto xl:px-0 px-[52px] xl:py-20 py-10">
      <Categories />
      <PromotionBanner />
      <TopProductsCarousel similarProduct={false} fetchURL="" />
    </div>
  );
}
