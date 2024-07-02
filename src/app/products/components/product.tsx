import PromotionBanner from "@/app/_components/promotionBanner";
import Categories from "./categories";
import TopProductsCarousel from "@/app/components/topProducts/productCarousel";

export default function Products() {
  return (
    <div className="xl:w-[1192px] md:w-[668px] w-[393px] mx-auto flex flex-col xl:gap-20 gap-10 xl:mx-auto xl:py-20 py-10 md:px-0 px-5">
      <Categories />
      <PromotionBanner />
      <TopProductsCarousel similarProduct={false} fetchURL="" />
    </div>
  );
}
