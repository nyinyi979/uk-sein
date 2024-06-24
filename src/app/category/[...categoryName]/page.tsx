import Category from "./components/category";

export default function ({ params }: { params: { categoryName: string } }) {
  return <Category params={params} />;
}
