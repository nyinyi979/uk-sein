import PromotionBanner from "@/app/components/promotionBanner";
import Categories from "./categories";
import TopProductsCarousel from "@/app/_components/topProducts/productCarousel";

export default function Products() {
  return (
    <div className="px-[125px]">
      <p className="font-sora text-5xl font-bold my-10">Product Categories</p>
      <Categories />
      <PromotionBanner />
      <TopProductsCarousel />
    </div>
  );
}
