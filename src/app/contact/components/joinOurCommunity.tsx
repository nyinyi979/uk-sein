"use client";
import React from "react";
import NameInput from "./nameInput";
import EmailInput from "./emailInput";
import MessageInput from "./messageInput";

export default function JoinOurCommunity() {
  const [input, setInput] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const setName = (n: string) => {
    setInput({ ...input, name: n });
  };
  const setEmail = (m: string) => {
    setInput({ ...input, email: m });
  };
  const setMessage = (m: string) => {
    setInput({ ...input, message: m });
  };
  const disabled =
    input.name === "" || input.email === "" || input.message === "";
  return (
    <div className="flex flex-col xl:gap-[50px] gap-8">
      <div className="flex flex-col gap-[18px]">
        <p className="font-sora font-bold xl:text-5xl text-2xl">
          Join Our Community
        </p>
        <p className="xl:w-[931px] md:w-[600px] w-full font-normal xl:text-xl md:text-base text-sm text-grey-400 xl:leading-[25px] md:leading-5 leading-[17.5px]">
          <span className="xl:block hidden">
            Ready to transform your look? Book an appointment today and
            experience the difference at Jo Hair.
          </span>{" "}
          Follow us on social medias for the latest updates and style
          inspiration.
        </p>
      </div>
      <form onSubmit={() => {}} className="flex flex-col gap-8">
        <NameInput name={input.name} setName={setName} />
        <EmailInput email={input.email} setEmail={setEmail} />
        <MessageInput message={input.message} setMessage={setMessage} />
        <button
          disabled={disabled}
          className="w-fit h-[50px] block py-[12px] px-[28px] rounded-xl text-lg text-center ml-auto bg-khaki-500 font-semibold text-white hover:bg-khaki-700 disabled:bg-grey-50 duration-300"
        >
          Submit now
        </button>
      </form>
    </div>
  );
}
