import { useLocale, useTranslations } from "next-intl";
import { order } from "@/types/order";
import { cartItem } from "@/store/clientData";

export default function ProductTable({ order }: { order: order }) {
  const isUSD = Number(order.total_usd) > 0;
  const t = useTranslations("orders");
  return (
    <div className="flex flex-col md:py-6 px-[28px] md:bg-white md:shadow-dropdown">
      <p className="py-2 font-sora font-semibold text-2xl">{t("products")}</p>
      <div className="md:py-5 py-4">
        <div className="md:flex hidden flex-row gap-2.5 font-bold text-grey-200 border-b border-white-700 xl:text-base text-xs">
          <p className="xl:w-[350px] w-[180px]">{t("product")} </p>
          <p className="xl:w-[200px] w-[150px] xl:text-left text-center">
            {t("CATEGORY")}
          </p>
          <p className="xl:w-[130px] w-[80px] ">QUANTITY</p>
          <p className="xl:w-[250px] w-[100px] xl:text-right text-center">
            {t("unit-price")}
          </p>
          <p className="xl:w-[250px] w-[100px] text-right">{t("TOTAL")}</p>
        </div>
        <div>
          {order.products.map((p) => (
            <ProductRow key={p.variation_product + p.created_at} {...p} isUSD={isUSD}/>
          ))}
        </div>
        <div className="md:block flex">
          <p className="xl:w-[680px] md:w-[280px] md:block hidden"></p>
          <p className="font-semibold xl:text-lg text-right">
            {t("grand-total")}
          </p>
          <p className="ml-auto font-bold xl:text-xl text-lg text-right">
            {isUSD ? Number(order.total_usd).toLocaleString() : Number(order.total).toLocaleString()} {isUSD ? "$" : "MMK"}
          </p>
        </div>
      </div>
    </div>
  );
}
function ProductRow({
  categories,
  image,
  name,
  mm_name,
  regular_price,
  quantity,
  subtotal,
  code,
  isUSD,
}: productRow) {
  const locale = useLocale();
  const t = useTranslations();
  return (
    <div className="flex md:flex-row flex-col md:gap-2.5 gap-4 md:py-6 pb-6 border-b border-grey-50 text-nowrap">
      <div className="xl:w-[350px] md:w-[180px] w-full flex flex-row md:gap-[18px] gap-1.5">
        <div className="xl:size-[65px] size-12 ">
          <div className="xl:w-[54px] w-[40px] xl:h-[52px] h-[38px] font-bold relative">
            {code}
          </div>
        </div>
        <div className="flex flex-col xl:gap-2.5 gap-1.5 whitespace-nowrap overflow-hidden text-ellipsis">
          <p className="font-bold xl:text-lg md:text-sm text-lg">
            {locale === "en" ? name : mm_name}
          </p>
          <p className="font-normal text-xs">
            {locale === "en" ? mm_name : name}
          </p>
        </div>
      </div>
      <p className="xl:w-[200px] md:w-[150px] w-full md:block flex xl:text-left text-center">
        <span className="md:hidden font-semibold text-grey-200">
          {t("category.category")}
        </span>
        <span className="ml-auto xl:text-base md:text-sm text-lg">
          {categories[0]}
        </span>
      </p>
      <p className="xl:w-[130px] md:w-[80px] w-full md:block flex xl:text-left text-center">
        <span className="md:hidden font-semibold text-grey-200">
          {t("orders.QUANTITY")}
        </span>
        <span className="ml-auto xl:text-base md:text-sm text-lg">
          {quantity}x
        </span>
      </p>
      <p className="xl:w-[250px] md:w-[250px] w-full md:block flex text-right">
        <span className="md:hidden font-semibold text-grey-200">
          {t("orders.price")}
        </span>
        <span className="ml-auto md:font-bold font-semibold xl:text-base md:text-sm text-lg">
          {regular_price.toLocaleString()} MMK
        </span>
      </p>
      <p className="xl:w-[250px] md:w-[100px] w-full md:block flex">
        <span className="md:hidden font-semibold text-grey-200">
          {t("orders.total")}
        </span>
        <span className="md:block ml-auto font-bold xl:text-base md:text-sm text-lg text-right md:text-grey-500 text-khaki-500">
          {subtotal.toLocaleString()} MMK
        </span>
      </p>
    </div>
  );
}

interface productRow extends cartItem{
  isUSD: boolean
}