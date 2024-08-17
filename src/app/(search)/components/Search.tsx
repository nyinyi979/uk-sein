import ProductWithFilters from "@/components/productWithFilters/ProductWithFilters";
import SearchBarForSmallScreen from "@/components/header/searchbarComponents/SearchBarForSmallScreen";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const searchParams = useSearchParams();
  return (
    <div className="xl:[1192px] md:w-[75%] sm:w-[90%] w-full mx-auto md:py-10 py-5">
      <SearchBarForSmallScreen />
      {searchParams.get("query") !== null && (
        <ProductWithFilters
          params={{ categoryName: searchParams.get("query")! }}
          searched
        />
      )}
    </div>
  );
}
