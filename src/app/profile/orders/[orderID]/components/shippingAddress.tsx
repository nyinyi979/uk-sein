import OrderDetailCard from "./orderDetailCard";
import { addressInOrder } from "@/app/types/type";

export default function ShippingAddress({
  address,
  state,
  township,
}: addressInOrder) {
  return (
    <OrderDetailCard heading="Shipping Address">
      <div className="flex flex-col md:gap-5 gap-3 font-semibold xl:text-lg md:text-base text-lg">
        <p>{address}</p>
        <p>{township}</p>
        <p>{state}</p>
      </div>
    </OrderDetailCard>
  );
}
