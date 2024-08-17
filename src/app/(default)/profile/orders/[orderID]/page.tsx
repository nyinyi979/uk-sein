import Order from "./components/Order";

export default function ({ params }: { params: { orderID: string } }) {
  return <Order params={params} />;
}
