import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

export default function SmallCard({
  content,
  heading,
  children,
  href,
  linkText,
  bgClass,
  linkClass,
  pathClass,
  textClass,
}: {
  heading: string;
  content: string;
  href: string;
  linkText: string;
  bgClass: string;
  textClass?: string;
  linkClass?: string;
  pathClass: string;
  children?: React.ReactNode;
}) {
  const t = useTranslations("product-showcase");
  return (
    <div
      className={`img-scale w-full ssm:h-full h-fit relative flex xl:py-14 py-7 xl:pl-8 px-6 rounded-3xl overflow-hidden ${bgClass}`}
    >
      <div className="z-[2] xl:w-[246px] w-[200px] flex flex-col xl:gap-6 md:gap-2.5 gap-4">
        <div className="flex flex-col xl:gap-3 gap-1.5">
          <p
            className={`font-sora font-bold xl:text-[40px] text-lg ${textClass}`}
          >
            {heading}
          </p>
          <p
            className={`xl:font-medium font-normal xl:text-sm text-xs xl:leading-5 leading-[15px] ${textClass}`}
          >
            {content}
          </p>
        </div>
        <Link
          href={href}
          className="showcase-button xl:text-sm xl:bg-grey-500 xl:hover:bg-grey-400 xl:text-white"
        >
          <p className="xl:block hidden">{linkText}</p>
          <p className={`xl:hidden text-sm ${linkClass}`}>{t("explore-now")}</p>
          <svg
            className="xl:hidden size-3 mt-1"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 1.38886V12.9441C16 13.1798 15.9064 13.4059 15.7397 13.5726C15.573 13.7393 15.3469 13.8329 15.1111 13.8329C14.8754 13.8329 14.6493 13.7393 14.4826 13.5726C14.3159 13.4059 14.2223 13.1798 14.2223 12.9441V3.53435L1.51823 16.2395C1.35144 16.4063 1.12523 16.5 0.889356 16.5C0.653484 16.5 0.427273 16.4063 0.260486 16.2395C0.0936996 16.0727 0 15.8465 0 15.6106C0 15.3748 0.0936996 15.1486 0.260486 14.9818L12.9656 2.27772H3.55594C3.3202 2.27772 3.09411 2.18407 2.92742 2.01738C2.76073 1.85069 2.66708 1.6246 2.66708 1.38886C2.66708 1.15312 2.76073 0.927035 2.92742 0.760342C3.09411 0.593648 3.3202 0.5 3.55594 0.5H15.1111C15.3469 0.5 15.573 0.593648 15.7397 0.760342C15.9064 0.927035 16 1.15312 16 1.38886Z"
              className={pathClass}
            />
          </svg>
        </Link>
      </div>
      {children}
    </div>
  );
}
