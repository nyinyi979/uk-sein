import Order from "./components/order";

export default function ({ params }: { params: { orderID: string } }) {
  return <Order params={params} />;
}
