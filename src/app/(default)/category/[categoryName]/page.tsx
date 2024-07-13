import ProductWithFilters from "@/components/productWithFilters/productWithFilters";

export default function ({ params }: { params: { categoryName: string } }) {
  return <ProductWithFilters params={params} />;
}
