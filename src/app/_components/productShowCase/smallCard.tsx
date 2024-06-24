import Link from "next/link";
import React from "react";

export default function SmallCard({
  content,
  heading,
  children,
  href,
  linkText,
  bgClass,
}: {
  heading: string;
  content: string;
  href: string;
  linkText: string;
  bgClass: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`img-scale relative bottom-row-container ${bgClass}`}>
      <div className="z-[2] w-[246px] flex flex-col gap-6">
        <div>
          <p className="font-sora font-bold text-[40px]">{heading}</p>
          <p className="font-[500] text-sm leading-5">{content}</p>
        </div>
        <Link href={href} className="black-button">
          {linkText}
        </Link>
      </div>
      {children}
    </div>
  );
}
