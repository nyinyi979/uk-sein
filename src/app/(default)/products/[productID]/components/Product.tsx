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
import ProductAddToCart from "./AddToCart";
import useRatings from "@/components/template/useRatings";
import ProductsCarousel from "@/components/template/ProductCarousel";
import { product, review } from "@/types/type";
import { showErrorAlert } from "@/components/Alert";
import { useUserStore } from "@/store/clientData";
import { useReviewStore } from "@/store/review";

export default function ProductDetails({
  params,
}: {
  params: { productID: string };
}) {
  const { customer, setWishlists, token } = useUserStore();
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
  const { reviewsData, getReviews } = useReviewStore();
  const [review, setReview] = React.useState<{
    reviews: review[];
    loading: boolean;
  }>({
    loading: reviewsData[params.productID] ? false : true,
    reviews: reviewsData[params.productID] || [],
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
  const { rating, ratings } = useRatings({ reviews: review.reviews });
  React.useEffect(() => {
    setLoading(true);
    const url = `product/?id=${params.productID}`;
    axios
      .get(url)
      .then((data) => {
        setProduct(data.data);
        setLoading(false);
        getReviews(params.productID).then((val) => {
          setReview({ loading: false, reviews: val });
        });
      })
      .catch(() => {
        showErrorAlert({ text: "Something went wrong!" });
        setLoading(false);
      });
  }, []);
  React.useEffect(() => {
    if (token === null) return;
    axios
      .get("customer/wishlist/", { params: { cid: customer.id } })
      .then((data) => {
        setWishlists(data.data);
      })
      .catch(() => {
        showErrorAlert({ text: "Something went wrong fetching wishlists!" });
      });
  }, [token]);
  const images = React.useMemo(() => {
    const imgs: images[] = [];
    if (
      variantProps.color === "" &&
      variantProps.material === "" &&
      variantProps.size === ""
    )
      product.variations.map((v) => v.images.map((img) => imgs.push(img)));
    else imgs.push(product.variations[activeVariant].images[0]);
    return imgs;
  }, [product, variantProps]);

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
                images={images}
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
                rating={rating}
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
                activeVariant={activeVariant}
                quantity={quantity}
              />
            </div>
          </div>
          {review.loading ? (
            <ReviewLoading />
          ) : (
            <>
              <ProductRatings ratings={ratings} rating={rating} />
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
          <ProductsCarousel fetchURL="product/top-product/" similarProduct />
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

interface images {
  id: number;
  created_at: string;
  updated_at: string;
  image: string;
  variant: number;
}
