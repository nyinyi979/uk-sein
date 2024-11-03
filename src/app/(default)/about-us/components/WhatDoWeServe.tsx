import { useTranslations } from "next-intl";

export default function WhatDoWeServe() {
  const t = useTranslations();
  const whatdoWeServe = [
    {
      heading: t("highlights.quality-assure"),
      description: t("highlights.quality-assure-description"),
    },
    {
      heading: t("highlights.best-quality"),
      description: t("highlights.best-quality-description"),
    },
    {
      heading: t("highlights.secure-payment"),
      description: t("highlights.secure-payment-description"),
    },
  ];
  return (
    <div className="flex flex-col xl:gap-[65px] gap-8 pb-8">
      <p className="font-sora font-semibold xl:text-5xl text-2xl">
        {t("about-us.what-do-we-serve")}
      </p>
      <div className="flex md:flex-row flex-col xl:gap-[28px] md:gap-[18px] gap-[28px]">
        {whatdoWeServe.map((s) => (
          <div
            key={s.heading}
            className="flex flex-col gap-[30px] py-6 px-[28px] rounded-3xl bg-white shadow-rating"
          >
            <div className="xl:size-20 md:size-[60px] size-20 flex justify-center rounded-[18px] bg-khaki-500">
              <svg
                className="xl:my-6 md:my-3.5 my-6"
                width="29"
                height="28"
                viewBox="0 0 29 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.7857 9.78833C20.9308 9.93285 21.0458 10.1046 21.1243 10.2937C21.2028 10.4827 21.2433 10.6854 21.2433 10.8902C21.2433 11.0949 21.2028 11.2976 21.1243 11.4867C21.0458 11.6758 20.9308 11.8475 20.7857 11.992L13.5265 19.2513C13.382 19.3963 13.2102 19.5114 13.0212 19.5899C12.8321 19.6684 12.6294 19.7088 12.4246 19.7088C12.2199 19.7088 12.0172 19.6684 11.8281 19.5899C11.639 19.5114 11.4673 19.3963 11.3228 19.2513L8.21167 16.1402C8.06697 15.9955 7.95219 15.8237 7.87388 15.6346C7.79557 15.4456 7.75527 15.243 7.75527 15.0383C7.75527 14.8337 7.79558 14.6311 7.87388 14.442C7.95219 14.253 8.06697 14.0812 8.21167 13.9365C8.35637 13.7918 8.52815 13.677 8.71721 13.5987C8.90626 13.5204 9.10889 13.4801 9.31352 13.4801C9.51816 13.4801 9.72078 13.5204 9.90984 13.5987C10.0989 13.677 10.2707 13.7918 10.4154 13.9365L12.4259 15.9444L18.5846 9.78444C18.7294 9.64007 18.9011 9.52563 19.0901 9.44768C19.2791 9.36974 19.4816 9.3298 19.686 9.33016C19.8904 9.33052 20.0928 9.37117 20.2815 9.44979C20.4702 9.52841 20.6415 9.64345 20.7857 9.78833ZM28.5 14C28.5 16.7689 27.6789 19.4757 26.1406 21.778C24.6022 24.0803 22.4157 25.8747 19.8576 26.9343C17.2994 27.9939 14.4845 28.2712 11.7687 27.731C9.05301 27.1908 6.55845 25.8574 4.60051 23.8995C2.64258 21.9416 1.30921 19.447 0.769012 16.7313C0.228819 14.0155 0.506066 11.2006 1.56569 8.64243C2.62532 6.08426 4.41973 3.89776 6.72202 2.35942C9.02431 0.821086 11.7311 0 14.5 0C18.2118 0.00411733 21.7703 1.48044 24.3949 4.10505C27.0196 6.72967 28.4959 10.2882 28.5 14ZM25.3889 14C25.3889 11.8464 24.7503 9.74112 23.5538 7.95046C22.3573 6.15979 20.6567 4.76413 18.667 3.93998C16.6773 3.11582 14.4879 2.90019 12.3757 3.32034C10.2634 3.74049 8.32324 4.77755 6.8004 6.30039C5.27756 7.82323 4.24049 9.76344 3.82034 11.8757C3.40019 13.9879 3.61583 16.1773 4.43998 18.167C5.26414 20.1567 6.65979 21.8573 8.45046 23.0538C10.2411 24.2503 12.3464 24.8889 14.5 24.8889C17.387 24.8858 20.1548 23.7376 22.1962 21.6962C24.2376 19.6548 25.3858 16.887 25.3889 14Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-[14px]">
              <p className="font-sora font-semibold xl:text-2xl md:text-xl text-2xl">
                {s.heading}
              </p>
              <p className="font-normal text-[#202020] xl:text-base md:text-xs xl:leading-5 md:leading-[15px] leading-5">
                {s.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
