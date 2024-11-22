"use client";
import Facebook from "../images/fbicon.svg";
export default function AboutUsCard({
  year,
  children,
  title,
  description,
  link,
}: {
  year: string;
  children: React.ReactNode;
  title: string;
  description: string;
  link: Boolean;
}) {
  return (
    <div className="relative xl:pb-[100px] pb-[60px] xl:pl-[60px] sm:pl-8 border-l border-khaki-500">
      <div className="py-[20px] px-10 bg-white rounded-[15px] shadow-aboutus">
        <div className="xl:w-[1010px] w-full flex flex-col gap-[18px]">
          <p className="font-sora font-bold xl:text-4xl text-lg">{year}</p>
          {children}
          <p className="font-sora font-bold md:text-2xl">{title}</p>
          <p className="font-normal xl:text-lg text-sm text-justify md:leading-[22.5px] leading-[17.5px]">
            {description}
          </p>
        </div>
        {link && (
          <div className="xl:w-[1010px] mt-8 w-full flex flex-col gap-[18px]">
            <div
              onClick={() => {
                window.open(
                  "https://www.facebook.com/ukseinmmlocalcrafts?mibextid=ZbWKwL",
                  "_blank"
                );
              }}
              className="flex cursor-pointer items-center justify-start"
            >
              <div className="mr-4">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z"
                    fill="#000000"
                  />
                </svg>
              </div>
              <p className="font-sora font-bold md:text-xl">ယူကေစိန် ,UK SEIN, Myanmar Local Crafts</p>
            </div>
            <div
              onClick={() => {
                window.open(
                  "https://www.facebook.com/ukseinfurniture?mibextid=ZbWKwL",
                  "_blank"
                );
              }}
              className="flex cursor-pointer items-center justify-start"
            >
              <div className="mr-4">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z"
                    fill="#000000"
                  />
                </svg>
              </div>
              <p className="font-sora font-bold md:text-xl">UK SEIN Furniture</p>
            </div>
            <div
              onClick={() => {
                window.open(
                  "https://www.facebook.com/profile.php?id=61554102028691&mibextid=ZbWKwL ",
                  "_blank"
                );
              }}
              className="flex cursor-pointer items-center justify-start"
            >
              <div className="mr-4">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z"
                    fill="#000000"
                  />
                </svg>
              </div>
              <p className="font-sora font-bold md:text-xl">ယူကေစိန်-မြောက်ဒဂုံ , UKSEIN-NorthDagon</p>
            </div>
          </div>
        )}
      </div>
      <div className="xl:size-[25px] size-[18px] absolute xl:-left-[13px] -left-2.5 xl:top-5 md:top-10 top-8 rounded-[5px] bg-khaki-500" />
    </div>
  );
}
