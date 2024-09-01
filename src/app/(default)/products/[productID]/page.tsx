import type { Metadata, ResolvingMetadata } from "next";
import ProductDetails from "./components/Product";

export default function ({ params }: { params: { productID: string } }) {
  return <ProductDetails params={params} />;
}

type Props = {
  params: { productID: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params

  // fetch data
  const data = await fetch(
    `https://backend.uksein.com/api/product/?id=${params.productID}`,
  ).then((data) => data.json());

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = data.images[0]?.image || "";

  return {
    title: data.name,
    openGraph: {
      images: previousImages,
    },
  };
}
