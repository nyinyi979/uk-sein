"use client";
import React from "react";
import axios from "axios";
import ProductTitle from "./Title";
import ProductImages from "./Image";
import ProductDetail from "./Details";
import ProductDescription from "./Description";
import ProductNamePrice from "./NamePrice";
import ProductRatings from "./Ratings";
import ProductReviews from "./Reviews";
import ProductsCarousel from "@/components/template/ProductCarousel";
import ProductAddToCart from "./AddToCart";
import { product, review } from "@/types/type";
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
  });
  const [review, setReview] = React.useState<{
    reviews: review[];
    loading: boolean;
  }>({
    loading: true,
    reviews: [],
  });
  const [loading, setLoading] = React.useState(true);
  const [variantProps, setVariantProps] = React.useState({
    size: "",
    material: "",
    color: "",
  });
  const [activeVariant, setActiveVariant] = React.useState(0);
  const [quantity, setQuantity] = React.useState(0);
  const updateQuantity = (quantity: number) => {
    setQuantity(quantity);
  };
  const ratings = React.useMemo(() => {
    const ratings = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };
    let overall = 0;
    review.reviews.map((r) => {
      const num = r.number_of_stars ? Math.floor(Number(r.number_of_stars)) : 1;
      switch (num) {
        case 1:
          ratings[1] += 1;
          break;
        case 2:
          ratings[2] += 1;
          break;
        case 3:
          ratings[3] += 1;
          break;
        case 4:
          ratings[4] += 1;
          break;
        case 5:
          ratings[5] += 1;
          break;
        default:
      }
    });
    overall =
      (5 * ratings[5] +
        4 * ratings[4] +
        3 * ratings[3] +
        2 * ratings[2] +
        1 * ratings[1]) /
      (ratings[1] + ratings[2] + ratings[3] + ratings[4] + ratings[5]);
    return {
      rating: Number(overall.toFixed(2)),
      ratings: ratings,
    };
  }, [review]);
  React.useEffect(() => {
    setLoading(true);
    const url = `product/?id=${params.productID}`;
    axios
      .get(url)
      .then((data) => {
        setProduct(data.data);
        setLoading(false);
        axios
          .get("product/review/", { params: { id: data.data.id } })
          .then((data) => {
            console.log(data);
            setReview({
              reviews: data.data,
              loading: false,
            });
          })
          .catch((err) => {
            showErrorAlert({ text: "Something went wrong fetching reviews!" });
          });
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
                price={
                  Number(product.variations[activeVariant].regular_price) -
                  Number(product.variations[activeVariant].discount)
                }
                rating={ratings.rating}
              />
              <ProductDetail
                quantity={quantity}
                setQuantity={updateQuantity}
                setVariantProps={setVariantProps}
                variantProps={variantProps}
                variations={product.variations}
                activeVariant={activeVariant}
                setActiveVariant={setActiveVariant}
              />
              <ProductAddToCart
                product={product}
                wishlisted
                activeVariant={activeVariant}
                quantity={quantity}
              />
            </div>
          </div>
          {review.loading ? (
            <ReviewLoading />
          ) : (
            <>
              <ProductRatings {...ratings} />
              <ProductReviews
                reviews={review.reviews}
                id={product.id}
                addReviews={(nr) => {
                  const newReviews = [...review.reviews];
                  newReviews.push(nr);
                  setReview({ ...review, reviews: newReviews });
                }}
              />
            </>
          )}
          <ProductsCarousel fetchURL="" similarProduct />
        </div>
      )}
    </div>
  );
}
const ReviewLoading = () => {
  return (
    <>
      <div className="w-full h-40 flex md:flex-row flex-col xl:justify-between xl:gap-0 gap-[60px] xl:py-[42px] py-6 xl:px-[72px] md:px-[50px] px-2 rounded-[15px] bg-white shadow-rating animate-pulse"></div>
      <div className="h-20 flex flex-col gap-[14px] pb-6 border-b border-grey-200 border-dotted bg-grey-50 animate-pulse"></div>
      <div className="h-20 flex flex-col gap-[14px] pb-6 border-b border-grey-200 border-dotted bg-grey-50 animate-pulse"></div>
      <div className="h-20 flex flex-col gap-[14px] pb-6 border-b border-grey-200 border-dotted bg-grey-50 animate-pulse"></div>
    </>
  );
};
