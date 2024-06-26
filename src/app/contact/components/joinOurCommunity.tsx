"use client";
import React from "react";

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
    <div className="flex flex-col gap-[50px]">
      <div className="flex flex-col gap-[18px]">
        <p className="font-sora font-bold text-5xl">Join Our Community</p>
        <p className="w-[931px] font-normal text-xl text-grey-400 leading-[25px]">
          Ready to transform your look? Book an appointment today and experience
          the difference at Jo Hair. Follow us on social medias for the latest
          updates and style inspiration.
        </p>
      </div>
      <form onSubmit={() => {}} className="flex flex-col gap-8">
        <div className="flex flex-col gap-[15px]">
          <label htmlFor="name" className="font-sora font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={input.name}
            onChange={(ev) => setName(ev.target.value)}
            className="h-[72px] px-6 rounded-[10px] bg-white-500 outline-none border border-transparent focus:border-grey-500 placeholder:text-grey-100 duration-300"
          />
        </div>
        <div className="flex flex-col gap-[15px]">
          <label htmlFor="email" className="font-sora font-semibold">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            value={input.email}
            onChange={(ev) => setEmail(ev.target.value)}
            className="h-[72px] px-6 rounded-[10px] bg-white-500 outline-none border border-transparent focus:border-grey-500 placeholder:text-grey-100 duration-300"
          />
        </div>
        <div className="flex flex-col gap-[15px]">
          <label htmlFor="message" className="font-sora font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Message..."
            value={input.message}
            onChange={(ev) => setMessage(ev.target.value)}
            className="h-[180px] p-6 rounded-[10px] bg-white-500 outline-none border border-transparent focus:border-grey-500 placeholder:text-grey-100 duration-300"
          />
        </div>
        <button
          disabled={disabled}
          className="button ml-auto bg-khaki-500 font-semibold text-white hover:bg-khaki-700 disabled:bg-grey-50 duration-300"
        >
          Submit now
        </button>
      </form>
    </div>
  );
}
