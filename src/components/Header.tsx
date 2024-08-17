import Banner from "./header/Banner";
import NavBar from "./header/Navbar";

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
