export default function ContactUs() {
  return (
    <div className="flex flex-col gap-[26px]">
      <p className="font-sora font-semibold text-lg text-khaki-500">
        Contact Us
      </p>
      <div className="flex flex-col w-[255px] gap-3">
        <p>
          <span className="text-grey-200">Phone number : </span>
          <span className="pl-3">09-791797411</span>
        </p>
        <p>
          <span className="text-grey-200">Email : </span>
          <span className="pl-3">uksein@gmail.com</span>
        </p>
        <p>
          <span className="text-grey-200">Address :</span>
          <span className="pl-3">No.63, Bo Yar Nyunt Road, Dagon, Yangon</span>
        </p>
      </div>
    </div>
  );
}
