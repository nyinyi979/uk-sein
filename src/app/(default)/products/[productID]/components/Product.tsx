"use client";
import React from "react";
import ProductTitle from "./Title";
import ProductImages from "./Image";
import ProductDetail from "./Details";
import ProductDescription from "./Description";
import ProductNamePrice from "./NamePrice";
import ProductAddToCart from "./AddToCart";
import ProductRatings from "./Ratings";
import ProductReviews from "./Reviews";
import ProductsCarousel from "@/components/template/ProductCarousel";
import { product } from "@/types/type";

import axios from "axios";
import { showErrorAlert } from "@/components/Alert";
export default function ProductDetails({
  params,
}: {
  params: { productID: string };
}) {
  const [product, setProduct] = React.useState<product>({
    categories: [],
    code: "",
    created_at: "",
    description: "",
    id: 0,
    images: [],
    mm_name: "",
    name: "",
    status: "",
    total_product: 0,
    updated_at: "2024",
    variations: [],
    reviews: [],
  });
  const [loading, setLoading] = React.useState(true);
  const [activeVariant, setActiveVariant] = React.useState(0);
  const [quantity, setQuantity] = React.useState(0);
  const updateQuantity = (quantity: number) => {
    setQuantity(quantity);
  };
  React.useEffect(() => {
    setLoading(true);
    const url = `product/?id=${params.productID}`;
    axios
      .get(url)
      .then((data) => {
        setProduct(data.data);
        setLoading(false);
      })
      .catch(() => {
        showErrorAlert({ text: "Something went wrong!" });
        setLoading(false);
      });
  }, []);
  return (
    <div className="xl:w-[1192px] md:w-[85%] sm:w-[90%] w-full mx-auto xl:py-20 py-10">
      <ProductTitle category={product.categories[0] || ""} />
      {loading ? (
        <div className="w-full py-72 bg-gray-100 animate-pulse"></div>
      ) : (
        <div className="w-full flex flex-col gap-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col md:gap-[62px] gap-8">
              <ProductImages
                category={product.categories[0] || ""}
                images={product.images}
              />
              <ProductDescription description={product.description} />
            </div>
            <div className="flex flex-col xl:gap-8 md:gap-6 gap-[18px]">
              <ProductNamePrice
                name={product.name}
                code={product.code}
                mm_name={product.mm_name}
                price={product.variations[activeVariant]?.regular_price || "0"}
                rating={5}
              />
              <ProductDetail
                activeVariant={activeVariant}
                quantity={quantity}
                setQuantity={updateQuantity}
                setActiveVariant={(n) => setActiveVariant(n)}
                variations={product.variations}
              />
              <ProductAddToCart
                product={product}
                wishlisted
                activeVariant={activeVariant}
                quantity={quantity}
              />
            </div>
          </div>
          <ProductRatings
            rating={3}
            ratings={{ "1": 2, "2": 3, "3": 4, "4": 4, "5": 2.4 }}
          />
          <ProductReviews reviews={product?.reviews || []} />
          <ProductsCarousel fetchURL="" similarProduct />
        </div>
      )}
    </div>
  );
}
