import ProductWithFilters from "@/components/productWithFilters/ProductWithFilters";

export default function ({ params }: { params: { categoryName: string } }) {
  return <ProductWithFilters params={params} />;
}
