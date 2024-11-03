import PortfolioCard from "./PortfolioCard";
import Portfolio8 from "../images/portfolio-8.jpg";
import Portfolio9 from "../images/portfolio-9.jpg";
import Portfolio10 from "../images/portfolio-10.jpg";
import Portfolio11 from "../images/portfolio-11.jpg";
import Portfolio12 from "../images/portfolio-12.jpg";
import Portfolio13 from "../images/portfolio-13.jpg";
import Portfolio14 from "../images/portfolio-7.jpg";
import Portfolio15 from "../images/portfolio-15.jpg";
import Portfolio16 from "../images/portfolio-16.jpg";
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
