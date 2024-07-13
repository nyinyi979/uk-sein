import Banner from "./header/banner";
import NavBar from "./header/navbar";

export default function Header({
  searchSide = false,
}: {
  searchSide?: boolean;
}) {
  return (
    <>
      <Banner searchSide={searchSide} />
      <NavBar />
    </>
  );
}
