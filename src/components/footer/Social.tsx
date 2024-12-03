"use client";
import Image from "next/image";
import Link from "next/link";
import KPay from "./images/kpay.png";
import WavePay from "./images/wavepay.png";
import AyaPay from "./images/ayapay.png";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import axios, { MEDIA_URL } from "../../utils/axios";
import { showErrorAlert } from "../../components/Alert";


interface Payment {
  image: string;
  payment_name:string;
}

export default function SocialLinks() {
  const t = useTranslations("footer");
  const openInNewTab = (url: string): void => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const [payments, setPayments] = useState<Payment[]>([]);

  useEffect(() => {
    axios
      .get("payment-method/search/?query=")
      .then((data) => {
        setPayments(data.data);
      })
      .catch(() => {
        showErrorAlert({ text: "Something went wrong!" });
      });
  }, []);

  return (
    <div className="xl:w-fit w-[165px] flex flex-col xl:gap-[26px] md:gap-8 gap-[14px]">
      <div className="flex flex-col gap-[18px]">
        <p className="font-sora font-semibold xl:text-lg text-khaki-500">
          {t("social")}
        </p>
        <div className="flex flex-row flex-wrap gap-6">
          <button
            className="footer-link"
            onClick={() =>
              openInNewTab(
                "https://www.facebook.com/ukseinmmlocalcrafts?mibextid=LQQJ4d"
              )
            }
          >
            <svg
              width="10"
              height="18"
              viewBox="0 0 10 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.69244 17.9972V9.80115H9.45744L9.86844 6.59215H6.69244V4.54815C6.69244 3.62215 6.95044 2.98815 8.27944 2.98815H9.96344V0.12715C9.14444 0.03915 8.32044 -0.00285004 7.49644 0.000149963C5.05244 0.000149963 3.37444 1.49215 3.37444 4.23115V6.58615H0.627441V9.79515H3.38044V17.9972H6.69244Z" />
            </svg>
          </button>
          <button
            className="footer-link"
            onClick={() =>
              openInNewTab(
                "https://www.facebook.com/ukseinfurniture?mibextid=LQQJ4d"
              )
            }
          >
            <svg
              width="10"
              height="18"
              viewBox="0 0 10 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.69244 17.9972V9.80115H9.45744L9.86844 6.59215H6.69244V4.54815C6.69244 3.62215 6.95044 2.98815 8.27944 2.98815H9.96344V0.12715C9.14444 0.03915 8.32044 -0.00285004 7.49644 0.000149963C5.05244 0.000149963 3.37444 1.49215 3.37444 4.23115V6.58615H0.627441V9.79515H3.38044V17.9972H6.69244Z" />
            </svg>
          </button>
          <button
            className="footer-link"
            onClick={() =>
              openInNewTab(
                "https://www.instagram.com/uk_sein_local_crafts?igsh=MXVnbDBsdnc3eWQweA=="
              )
            }
          >
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.1274 0H5.12738C2.65261 0 0.62738 2.02432 0.62738 4.5V13.5C0.62738 15.9748 2.65261 18 5.12738 18H14.1274C16.6022 18 18.6274 15.9748 18.6274 13.5V4.5C18.6274 2.02432 16.6022 0 14.1274 0ZM9.62738 12.7499C7.55603 12.7499 5.87731 11.0704 5.87731 9C5.87731 6.92865 7.55603 5.24993 9.62738 5.24993C11.6978 5.24993 13.3775 6.92865 13.3775 9C13.3775 11.0704 11.6978 12.7499 9.62738 12.7499ZM13.3775 4.12492C13.3775 4.74615 13.8806 5.24992 14.5025 5.24992C15.1244 5.24992 15.6275 4.74615 15.6275 4.12492C15.6275 3.5037 15.1244 2.99992 14.5025 2.99992C13.8806 2.99992 13.3775 3.5037 13.3775 4.12492Z"
              />
            </svg>
          </button>
          <button
            className="footer-link"
            onClick={() =>
              openInNewTab(
                "https://www.tiktok.com/@uksein44?_t=8r6tQDDwveU&_r=1"
              )
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-[18px]">
        <p className="font-sora font-semibold text-lg">We Accept!</p>
        {payments.length > 0 ? (
          <div className="flex flex-row flex-wrap xl:gap-[20px] gap-3">
            {payments.map((data, index) => {
              return (
                <div className="xl:size-[50px] size-8 relative">
                  <img
                    src={MEDIA_URL + data.image}
                    className="size-full object-contain"
                    alt={data.payment_name}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
