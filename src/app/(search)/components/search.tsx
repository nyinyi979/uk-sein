import ProductWithFilters from "@/components/productWithFilters/productWithFilters";
import SearchBarForSmallScreen from "@/components/header/searchbarComponents/searchBarForSmallScreen";
import { useSearchParams } from "next/navigation";
import SearchFooter from "./footer";

export default function SearchPage() {
  const searchParams = useSearchParams();
  return (
    <div className="h-fit">
      <SearchBarForSmallScreen />
      {searchParams.get("query") !== null && (
        <ProductWithFilters
          params={{ categoryName: searchParams.get("query")! }}
          searched
        />
      )}
      <SearchFooter />
    </div>
  );
}
