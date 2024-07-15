import ProductWithFilters from "@/components/productWithFilters/productWithFilters";
import SearchBarForSmallScreen from "@/components/header/searchbarComponents/searchBarForSmallScreen";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const searchParams = useSearchParams();
  return (
    <div className="xl:[1192px] md:w-[664px] sm:w-[370px] w-full mx-auto md:py-10 py-5 sm:px-0 px-2">
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
