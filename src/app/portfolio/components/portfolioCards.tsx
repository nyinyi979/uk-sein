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
import { useTranslations } from "next-intl";

export default function PortfolioCards() {
  const t = useTranslations("portfolio");
  return (
    <>
      <PortfolioCard
        heading="A's Thai Spa"
        content={t("portfolio-card")}
        imgs={[Portfolio8, Portfolio9, Portfolio10]}
      />
      <PortfolioCard
        heading="Dream Floral Service & Event Decoration"
        content={t("portfolio-card")}
        imgs={[Portfolio11, Portfolio12, Portfolio13]}
        leftIsBigger={false}
      />
      <PortfolioCard
        heading="Dior By Heart"
        content={t("portfolio-card")}
        imgs={[Portfolio14, Portfolio15, Portfolio16]}
      />
    </>
  );
}
