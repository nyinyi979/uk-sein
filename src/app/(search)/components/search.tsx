import ProductWithFilters from "@/components/productWithFilters/productWithFilters";
import SearchBarForSmallScreen from "@/components/header/searchbarComponents/searchBarForSmallScreen";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const searchParams = useSearchParams();
  return (
    <>
      <SearchBarForSmallScreen />
      {searchParams.get("query") !== null && (
        <ProductWithFilters
          params={{ categoryName: searchParams.get("query")! }}
          searched
        />
      )}
    </>
  );
}
