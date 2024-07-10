import Banner from "./header/banner";
import NavBar from "./header/navbar";

export default function Header() {
  return (
    <div className="w-full relative">
      <Banner />
      <NavBar />
    </div>
  );
}
