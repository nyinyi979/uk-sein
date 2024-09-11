import Link from "next/link";
import Image from "next/image";
import MediumCard from "./MediumCard";
import ChairsImage from "./images/chairs.jpg";
import { useTranslations } from "next-intl";

export default function Chairs() {
  const t = useTranslations("product-showcase");
  return (
    <MediumCard
      heading={t("chairs")}
      image={
        <div className="w-full h-full absolute bottom-0 md:-right-2 right-0">
          <Image
            src={ChairsImage}
            alt="chairs"
            fill
            sizes="100%"
            className="size-full object-cover object-left-bottom"
          />
        </div>
      }
      content={t("chairs-tag")}
    >
      <Link href={"/products"} className="chair-link">
        <svg
          className="mt-1 xl:block hidden"
          width="17"
          height="18"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 1.49997V14.4996C18 14.7648 17.8946 15.0191 17.7071 15.2067C17.5196 15.3942 17.2652 15.4995 17 15.4995C16.7348 15.4995 16.4805 15.3942 16.2929 15.2067C16.1054 15.0191 16.0001 14.7648 16.0001 14.4996V3.91364L1.708 18.207C1.52037 18.3946 1.26588 18.5 1.00052 18.5C0.735169 18.5 0.480682 18.3946 0.293047 18.207C0.105412 18.0193 0 17.7648 0 17.4995C0 17.2341 0.105412 16.9796 0.293047 16.792L14.5864 2.49994H4.00043C3.73522 2.49994 3.48088 2.39458 3.29335 2.20705C3.10582 2.01952 3.00046 1.76518 3.00046 1.49997C3.00046 1.23476 3.10582 0.980415 3.29335 0.792884C3.48088 0.605354 3.73522 0.5 4.00043 0.5H17C17.2652 0.5 17.5196 0.605354 17.7071 0.792884C17.8946 0.980415 18 1.23476 18 1.49997Z"
            fill="#DE9D62"
          />
        </svg>
        <p className="xl:block hidden">{t("chairs-for-everyone")}</p>
        <p className="xl:hidden block">{t("explore-now")}</p>
        <svg
          className="mt-1 xl:hidden"
          width="17"
          height="18"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 1.49997V14.4996C18 14.7648 17.8946 15.0191 17.7071 15.2067C17.5196 15.3942 17.2652 15.4995 17 15.4995C16.7348 15.4995 16.4805 15.3942 16.2929 15.2067C16.1054 15.0191 16.0001 14.7648 16.0001 14.4996V3.91364L1.708 18.207C1.52037 18.3946 1.26588 18.5 1.00052 18.5C0.735169 18.5 0.480682 18.3946 0.293047 18.207C0.105412 18.0193 0 17.7648 0 17.4995C0 17.2341 0.105412 16.9796 0.293047 16.792L14.5864 2.49994H4.00043C3.73522 2.49994 3.48088 2.39458 3.29335 2.20705C3.10582 2.01952 3.00046 1.76518 3.00046 1.49997C3.00046 1.23476 3.10582 0.980415 3.29335 0.792884C3.48088 0.605354 3.73522 0.5 4.00043 0.5H17C17.2652 0.5 17.5196 0.605354 17.7071 0.792884C17.8946 0.980415 18 1.23476 18 1.49997Z"
            fill="#DE9D62"
          />
        </svg>
      </Link>
    </MediumCard>
  );
}
