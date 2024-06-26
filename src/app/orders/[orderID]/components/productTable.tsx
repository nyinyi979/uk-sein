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
        <table cellPadding={20}>
          <thead>
            <tr className="font-bold text-grey-200 border-b border-white-700">
              <td className="w-[350px]">PRDOUCT</td>
              <td className="w-[200px]">CATEGORY</td>
              <td className="w-[130px]">QUANTITY</td>
              <td className="w-[250px] text-right">UNIT PRICE</td>
              <td className="w-[250px] text-right">TOTAL</td>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <ProductRow key={p.productID} {...p} />
            ))}
          </tbody>
          <tfoot className="font-sora">
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className="font-semibold text-lg text-right">Grand Total</td>
              <td className="font-bold text-xl text-right">
                {totalPrice.toLocaleString()} MMK
              </td>
            </tr>
          </tfoot>
        </table>
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
    <tr className="border-b border-grey-50">
      <td className="w-[350px]">
        <div className="flex flex-row gap-[18px]">
          <div className="w-[65px] h-[65px] bg-white-700">
            <div className="w-[54px] h-[52px] relative mx-[5px] my-[7px]">
              <Image
                src={imgURL}
                alt={engName}
                fill
                sizes="100%"
                className="w-full h-full bg-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="font-bold text-lg">{engName}</p>
            <p className="font-normal text-xs">{myName}</p>
          </div>
        </div>
      </td>
      <td className="text-center">{category}</td>
      <td className="text-right">{quantity}</td>
      <td className="text-right">{price.toLocaleString()} MMK</td>
      <td className="text-right">{(price * quantity).toLocaleString()} MMK</td>
    </tr>
  );
}
