import React from "react";
import SearchBarForSmallScreen from "@/components/header/searchbarComponents/SearchBarForSmallScreen";

export default function SearchPage() {
  return (
    <div className="xl:[1192px] md:w-[75%] sm:w-[90%] w-full mx-auto md:py-10 py-5">
      <SearchBarForSmallScreen />
    </div>
  );
}
