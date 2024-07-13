"use client"
import React from "react";
import ProductTitle from "./title";
import ProductImages from "./image";
import ProductDetail from "./details";
import ProductDescription from "./description";
import ProductNamePrice from "./namePrice";
import ProductAddToCart from "./addToCart";
import ProductRatings from "./ratings";
import ProductReviews from "./reviews";
import ProductsCarousel from "@/components/template/productCarousel";
import { productDetails } from "@/types/type";

export default function ProductDetails({
  params,
}: {
  params: { productID: string };
}) {
  const [productDetails, setProductDetails] = React.useState<productDetails>({
    itemID: "123",
    category: "Table",
    description: `Enhance your living space with our elegant rattan chair, a perfect blend of traditional craftsmanship and modern design. Made from high-grade, sustainably sourced rattan, it offers durability, comfort, and eco-friendliness. The ergonomic design features a curved backrest and spacious seat, while its versatile style complements various interiors. Lightweight and easy to move, this low-maintenance chair is ideal for any room. Upgrade your decor with this timeless, natural piece today.
                    Its versatile style complements various interiors, from bohemian to modern. Lightweight and easy to move, this low-maintenance chair is ideal for any room or outdoor setting. Upgrade your decor with this timeless and natural piece today.`,
    engName: "Kyaw Mhe Zakar Set",
    myName: "ကျောမှီဇကာထိုင်ခုံအစုံ",
    price: 270000,
    rating: 4.8,
    ratings: {
      5: 10,
      4: 3,
      3: 3,
      2: 0,
      1: 0,
    },
    colors: ["Red", "Blue"],
    imageURLs: ["/sampleDiscount.png", "/sampleProduct.png"],
    materials: ["Wood", "Steel"],
    reviews: [
      {
        id: "review1",
        date: "17 Jun 2024",
        rating: 4,
        review: `I recently purchased several pieces from [Furniture Brand], and I couldn't be more pleased. The quality and craftsmanship are outstanding, with each item showcasing attention to detail and durability. The designs are both stylish and functional, fitting seamlessly into my home's decor. Customer service was excellent, providing timely updates and ensuring a smooth delivery process. Overall, [Furniture Brand] has exceeded my expectations, and I highly recommend them for anyone looking to elevate their home furnishings.`,
        user: {
          username: "Jessica",
          imgURL: "/sampleProduct.png",
        },
      },
      {
        id: "review2",
        date: "17 Jun 2024",
        rating: 4,
        review: `I recently purchased several pieces from [Furniture Brand], and I couldn't be more pleased. The quality and craftsmanship are outstanding, with each item showcasing attention to detail and durability. The designs are both stylish and functional, fitting seamlessly into my home's decor. Customer service was excellent, providing timely updates and ensuring a smooth delivery process. Overall, [Furniture Brand] has exceeded my expectations, and I highly recommend them for anyone looking to elevate their home furnishings.`,
        user: {
          username: "Jessica",
          imgURL: "/sampleProduct.png",
        },
      },
      {
        id: "review3",
        date: "17 Jun 2024",
        rating: 4,
        review: `I recently purchased several pieces from [Furniture Brand], and I couldn't be more pleased. The quality and craftsmanship are outstanding, with each item showcasing attention to detail and durability. The designs are both stylish and functional, fitting seamlessly into my home's decor. Customer service was excellent, providing timely updates and ensuring a smooth delivery process. Overall, [Furniture Brand] has exceeded my expectations, and I highly recommend them for anyone looking to elevate their home furnishings.`,
        user: {
          username: "Jessica",
          imgURL: "/sampleProduct.png",
        },
      },
      {
        id: "review4",
        date: "17 Jun 2024",
        rating: 4,
        review: `I recently purchased several pieces from [Furniture Brand], and I couldn't be more pleased. The quality and craftsmanship are outstanding, with each item showcasing attention to detail and durability. The designs are both stylish and functional, fitting seamlessly into my home's decor. Customer service was excellent, providing timely updates and ensuring a smooth delivery process. Overall, [Furniture Brand] has exceeded my expectations, and I highly recommend them for anyone looking to elevate their home furnishings.`,
        user: {
          username: "Jessica",
          imgURL: "/sampleProduct.png",
        },
      },
    ],
    sizes: ["12 x 14 x 16"],
    whiteListed: false,
  });
  const [activeDetails, setActiveDetails] = React.useState({
    color: "",
    size: "",
    material: "",
    count: 0,
  });
  const incrementCounts = () => {
    setActiveDetails({ ...activeDetails, count: activeDetails.count + 1 });
  };
  const decrementCounts = () => {
    if (activeDetails.count - 1 > 0)
      setActiveDetails({ ...activeDetails, count: activeDetails.count - 1 });
  };
  const setActiveColor = (clr: string) => {
    setActiveDetails({ ...activeDetails, color: clr });
  };
  const setActiveSize = (size: string) => {
    setActiveDetails({ ...activeDetails, size: size });
  };
  const setActiveMaterial = (mat: string) => {
    setActiveDetails({ ...activeDetails, material: mat });
  };
  return (
    <div className="xl:w-[1192px] md:w-[664px] w-[393px] mx-auto xl:py-20 py-10 md:px-0 px-5">
      <ProductTitle category={productDetails.category} />
      <div className="w-full flex flex-col gap-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col md:gap-[62px] gap-8">
            <ProductImages
              category={productDetails.category}
              imgURLs={productDetails.imageURLs}
            />
            <ProductDescription description={productDetails.description} />
          </div>
          <div className="flex flex-col xl:gap-8 md:gap-6 gap-[18px]">
            <ProductNamePrice
              engName={productDetails.engName}
              itemID={productDetails.itemID}
              myName={productDetails.myName}
              price={productDetails.price}
              rating={Math.floor(productDetails.rating)}
            />
            <ProductDetail
              colors={productDetails.colors}
              materials={productDetails.materials}
              sizes={productDetails.sizes}
              activeColor={activeDetails.color}
              activeMaterial={activeDetails.material}
              activeSize={activeDetails.size}
              setActiveColor={setActiveColor}
              setActiveMaterial={setActiveMaterial}
              setActiveSize={setActiveSize}
              count={activeDetails.count}
              incrementCounts={incrementCounts}
              decrementCounts={decrementCounts}
            />
            <ProductAddToCart
              productID={productDetails.itemID}
              whiteListed={productDetails.whiteListed}
            />
          </div>
        </div>
        <ProductRatings
          rating={productDetails.rating}
          ratings={productDetails.ratings}
        />
        <ProductReviews reviews={productDetails.reviews} />
        <ProductsCarousel fetchURL="" similarProduct />
      </div>
    </div>
  );
}