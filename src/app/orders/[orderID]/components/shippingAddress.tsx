import { addressInOrder } from "@/app/types/type";
import OrderDetailCard from "./orderDetailCard";

export default function ShippingAddress({
  address,
  state,
  township,
}: addressInOrder) {
  return (
    <OrderDetailCard heading="Shipping Address">
      <div className="flex flex-col gap-5 font-semibold text-lg">
        <p>{address}</p>
        <p>{township}</p>
        <p>{state}</p>
      </div>
    </OrderDetailCard>
  );
}
