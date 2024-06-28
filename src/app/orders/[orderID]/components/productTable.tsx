import { productInOrder } from "@/app/types/type";
import Image from "next/image";

export default function ProductTable({
  products,
  totalPrice,
}: {
  products: productInOrder[];
  totalPrice: number;
}) {
  return (
    <div className="flex flex-col py-6 px-[28px] bg-white shadow-dropdown">
      <p className="py-2 font-sora font-semibold text-2xl">Products</p>
      <div className="py-5">
        <div className="flex flex-row gap-2.5 font-bold text-grey-200 border-b border-white-700 xl:text-base text-xs">
          <p className="xl:w-[350px] w-[180px]">PRDOUCT</p>
          <p className="xl:w-[200px] w-[150px] xl:text-left text-center">
            CATEGORY
          </p>
          <p className="xl:w-[130px] w-[80px] ">QUANTITY</p>
          <p className="xl:w-[250px] w-[100px] xl:text-right text-center">
            UNIT PRICE
          </p>
          <p className="xl:w-[250px] w-[100px] text-right">TOTAL</p>
        </div>
        <div>
          {products.map((p) => (
            <ProductRow key={p.productID} {...p} />
          ))}
        </div>
        <div>
          <p className="xl:w-[680px] w-[280px]"></p>
          <p className="font-semibold xl:text-lg text-right">Grand Total</p>
          <p className="font-bold xl:text-xl text-lg text-right">
            {totalPrice.toLocaleString()} MMK
          </p>
        </div>
      </div>
    </div>
  );
}
function ProductRow({
  category,
  engName,
  imgURL,
  myName,
  price,
  productID,
  quantity,
}: productInOrder) {
  return (
    <div className="flex flex-row gap-2.5 py-6 border-b border-grey-50 text-nowrap">
      <div className="xl:w-[350px] w-[180px] flex flex-row gap-[18px]">
        <div className="xl:size-[65px] size-12 bg-white-700">
          <div className="xl:w-[54px] w-[40px] xl:h-[52px] h-[38px] relative mx-[5px] my-[7px]">
            <Image
              src={imgURL}
              alt={engName}
              fill
              sizes="100%"
              className="w-full h-full bg-cover"
            />
          </div>
        </div>
        <div className="flex flex-col xl:gap-2.5 gap-1.5 whitespace-nowrap overflow-hidden text-ellipsis">
          <p className="font-bold xl:text-lg text-sm">{engName}</p>
          <p className="font-normal text-xs">{myName}</p>
        </div>
      </div>
      <p className="xl:w-[200px] w-[150px] xl:text-left text-center">
        {category}
      </p>
      <p className="xl:w-[130px] w-[80px] xl:text-left text-right">
        {quantity}
      </p>
      <p className="xl:w-[250px] w-[250px] font-bold xl:text-base text-sm text-right">
        {price.toLocaleString()} MMK
      </p>
      <p className="xl:w-[250px] w-[100px] font-bold xl:text-base text-sm text-right">
        {(price * quantity).toLocaleString()} MMK
      </p>
    </div>
  );
}
