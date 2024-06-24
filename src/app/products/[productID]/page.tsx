import Product from "./components/product";

export default function ({ params }: { params: { productID: string } }) {
  return <Product params={params} />;
}
