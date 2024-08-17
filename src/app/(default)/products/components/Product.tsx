import PromotionBanner from "@/components/banner/PromotionBanner";
import Categories from "./Categories";
import ProductsCarousel from "@/components/template/ProductCarousel";

export default function Products() {
  return (
    <div className="xl:w-[1192px] md:w-[85%] sm:w-[90%] w-full mx-auto flex flex-col xl:gap-20 gap-10 xl:mx-auto xl:py-20 py-10">
      <Categories />
      <PromotionBanner />
      <ProductsCarousel similarProduct={false} fetchURL="" />
    </div>
  );
}
