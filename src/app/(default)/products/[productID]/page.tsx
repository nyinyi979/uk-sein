import type { Metadata, ResolvingMetadata } from "next";
import Product from "./components/Product";

export default function ({ params }: { params: { productID: string } }) {
  return <Product params={params} />;
}

type Props = {
  params: { productID: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const id = params.productID;

  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: "Sample product",
    openGraph: {
      images: ["/sampleDiscount.png", ...previousImages],
    },
  };
}
