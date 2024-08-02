import PromotionBanner from "@/components/banner/promotionBanner";
import Categories from "./categories";
import ProductsCarousel from "@/components/template/productCarousel";

export default function Products() {
  return (
    <div className="xl:w-[1192px] md:w-[85%] sm:w-[90%] w-full mx-auto flex flex-col xl:gap-20 gap-10 xl:mx-auto xl:py-20 py-10">
      <Categories />
      <PromotionBanner />
      <ProductsCarousel similarProduct={false} fetchURL="" />
    </div>
  );
}
