import Image from "next/image";
import PortfolioCard from "./portfolioCard";
import Portfolio8 from "../images/portfolio-8.png";
import Portfolio9 from "../images/portfolio-9.png";
import Portfolio10 from "../images/portfolio-10.png";
import Portfolio11 from "../images/portfolio-11.png";
import Portfolio12 from "../images/portfolio-12.png";
import Portfolio13 from "../images/portfolio-13.png";
import Portfolio14 from "../images/portfolio-14.png";
import Portfolio15 from "../images/portfolio-15.png";
import Portfolio16 from "../images/portfolio-16.png";
export function PortfolioCard1() {
  return (
    <>
      <PortfolioCard
        heading="A's Thai Spa"
        content={`Introducing our latest furniture project, the "EcoHarmony Collection," where modern design meets sustainability. This groundbreaking line features an array of stylish, eco-friendly furniture crafted from sustainable materials like reclaimed wood and recycled metals. Each piece is meticulously designed to offer exceptional durability and comfort, ensuring that your home not only looks beautiful but also supports a healthier planet.
    From elegant dining sets to cozy sofas, the EcoHarmony Collection embodies a perfect balance of form and function. Our commitment to green practices means that every item in this collection is created with minimal environmental impact, using energy-efficient processes and eco-friendly finishes.`}
        imgs={[Portfolio8, Portfolio9, Portfolio10]}
      />
      <PortfolioCard
        heading="Dream Floral Service & Event Decoration"
        content={`Introducing our latest furniture project, the "EcoHarmony Collection," where modern design meets sustainability. This groundbreaking line features an array of stylish, eco-friendly furniture crafted from sustainable materials like reclaimed wood and recycled metals. Each piece is meticulously designed to offer exceptional durability and comfort, ensuring that your home not only looks beautiful but also supports a healthier planet.
From elegant dining sets to cozy sofas, the EcoHarmony Collection embodies a perfect balance of form and function. Our commitment to green practices means that every item in this collection is created with minimal environmental impact, using energy-efficient processes and eco-friendly finishes.`}
        imgs={[Portfolio11, Portfolio12, Portfolio13]}
        leftIsBigger={false}
      />
      <PortfolioCard
        heading="Dior By Heart"
        content={`Introducing our latest furniture project, the "EcoHarmony Collection," where modern design meets sustainability. This groundbreaking line features an array of stylish, eco-friendly furniture crafted from sustainable materials like reclaimed wood and recycled metals. Each piece is meticulously designed to offer exceptional durability and comfort, ensuring that your home not only looks beautiful but also supports a healthier planet.
From elegant dining sets to cozy sofas, the EcoHarmony Collection embodies a perfect balance of form and function. Our commitment to green practices means that every item in this collection is created with minimal environmental impact, using energy-efficient processes and eco-friendly finishes.`}
        imgs={[Portfolio14, Portfolio15, Portfolio16]}
      />
    </>
  );
}
