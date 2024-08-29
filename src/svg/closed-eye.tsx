export default function ClosedEyes({
  fill = "#B5B5B5",
  className,
}: {
  fill?: string;
  className?: string;
}) {
  return (
    <svg
      width="30"
      height="25"
      viewBox="0 0 30 25"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.73999 0.336312C5.65217 0.23732 5.54558 0.156743 5.42639 0.0992498C5.3072 0.0417569 5.17778 0.00849186 5.04564 0.001383C4.91351 -0.00572585 4.78127 0.0134626 4.6566 0.0578365C4.53193 0.10221 4.41731 0.170887 4.31938 0.259886C4.22144 0.348885 4.14215 0.456436 4.08609 0.576305C4.03003 0.696175 3.99832 0.825979 3.9928 0.958195C3.98727 1.09041 4.00804 1.22241 4.05391 1.34654C4.09978 1.47066 4.16982 1.58445 4.25999 1.68131L6.66499 4.32756C2.12499 7.11381 0.172488 11.4088 0.086238 11.6038C0.0293795 11.7317 0 11.8701 0 12.0101C0 12.15 0.0293795 12.2884 0.086238 12.4163C0.129988 12.5151 1.18874 14.8626 3.54249 17.2163C6.67874 20.3513 10.64 22.0088 15 22.0088C17.2408 22.0216 19.4589 21.5602 21.5087 20.6551L24.2587 23.6813C24.3466 23.7803 24.4531 23.8609 24.5723 23.9184C24.6915 23.9759 24.8209 24.0091 24.9531 24.0162C25.0852 24.0233 25.2175 24.0042 25.3421 23.9598C25.4668 23.9154 25.5814 23.8467 25.6793 23.7577C25.7773 23.6687 25.8566 23.5612 25.9126 23.4413C25.9687 23.3214 26.0004 23.1916 26.0059 23.0594C26.0115 22.9272 25.9907 22.7952 25.9448 22.6711C25.899 22.547 25.8289 22.4332 25.7387 22.3363L5.73999 0.336312ZM11.6562 9.81631L16.865 15.5476C16.0806 15.9602 15.1814 16.1007 14.3085 15.9469C13.4357 15.7931 12.6386 15.3537 12.0425 14.6978C11.4464 14.0419 11.085 13.2066 11.0151 12.3231C10.9452 11.4395 11.1707 10.5578 11.6562 9.81631ZM15 20.0088C11.1525 20.0088 7.79124 18.6101 5.00874 15.8526C3.86663 14.7175 2.89526 13.4228 2.12499 12.0088C2.71124 10.9101 4.58249 7.83506 8.04374 5.83631L10.2937 8.30506C9.42266 9.42069 8.97403 10.8084 9.02715 12.2228C9.08027 13.6372 9.63173 14.9873 10.584 16.0344C11.5363 17.0816 12.8282 17.7584 14.2312 17.9451C15.6343 18.1319 17.0582 17.8166 18.2512 17.0551L20.0925 19.0801C18.4675 19.7035 16.7405 20.0185 15 20.0088ZM15.75 8.08006C15.4894 8.03033 15.2593 7.87913 15.1102 7.65971C14.9611 7.44029 14.9053 7.17064 14.955 6.91006C15.0047 6.64949 15.1559 6.41934 15.3753 6.27025C15.5948 6.12116 15.8644 6.06533 16.125 6.11506C17.3995 6.36215 18.56 7.01462 19.4333 7.97517C20.3067 8.93572 20.8462 10.1529 20.9712 11.4451C20.9959 11.7091 20.9147 11.9722 20.7455 12.1763C20.5762 12.3805 20.3328 12.5091 20.0687 12.5338C20.0375 12.5356 20.0062 12.5356 19.975 12.5338C19.725 12.5349 19.4838 12.4423 19.2987 12.2743C19.1136 12.1064 18.9981 11.8752 18.975 11.6263C18.8908 10.7668 18.5315 9.95741 17.9504 9.31849C17.3694 8.67957 16.5977 8.24523 15.75 8.08006ZM29.91 12.4163C29.8575 12.5338 28.5912 15.3376 25.74 17.8913C25.6426 17.9813 25.5282 18.0511 25.4036 18.0965C25.2789 18.1419 25.1465 18.1621 25.014 18.1558C24.8814 18.1495 24.7515 18.1169 24.6317 18.06C24.5119 18.003 24.4047 17.9227 24.3162 17.8239C24.2277 17.725 24.1598 17.6096 24.1163 17.4842C24.0729 17.3589 24.0549 17.2261 24.0633 17.0937C24.0716 16.9613 24.1063 16.8319 24.1652 16.7131C24.2241 16.5942 24.306 16.4882 24.4062 16.4013C25.8051 15.1446 26.9801 13.6593 27.8812 12.0088C27.1093 10.5935 26.1358 9.29792 24.9912 8.16256C22.2087 5.40756 18.8475 4.00881 15 4.00881C14.1893 4.00782 13.3799 4.07346 12.58 4.20506C12.4499 4.22807 12.3166 4.22507 12.1876 4.19624C12.0587 4.16742 11.9368 4.11333 11.8289 4.03712C11.721 3.9609 11.6293 3.86406 11.559 3.75219C11.4887 3.64032 11.4413 3.51564 11.4196 3.38535C11.3978 3.25506 11.402 3.12174 11.432 2.99309C11.462 2.86445 11.5172 2.74302 11.5945 2.63584C11.6717 2.52865 11.7694 2.43783 11.8819 2.36861C11.9944 2.29939 12.1195 2.25315 12.25 2.23256C13.1589 2.08248 14.0787 2.00764 15 2.00881C19.36 2.00881 23.3212 3.66631 26.4575 6.80256C28.8112 9.15631 29.87 11.5051 29.9137 11.6038C29.9706 11.7317 30 11.8701 30 12.0101C30 12.15 29.9706 12.2884 29.9137 12.4163H29.91Z"
        fill={fill}
      />
    </svg>
  );
}
