import React from "react";
import bgimg from "../../assets/images/banner1.jpg";
import PrimaryButton from "../Shared/PrimaryButton";

const Contact = () => {
  return (
    <div
      style={{
        background: `url(${bgimg})`,
      }}
      className="bg-primary px-10 py-14 "
    >
      <div className="text-center pb-14 text-white">
        <h1 className="text-4xl">CONTACT ME</h1>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-5">
        <input
          type="text"
          placeholder="Your Name"
          className="input w-full max-w-md"
        />
        <input
          type="text"
          placeholder="Email Address"
          className="input w-full max-w-md"
        />
        <input
          type="text"
          placeholder="Problem"
          className="input w-full max-w-md"
        />
        <textarea
          className="textarea w-full max-w-md"
          placeholder="Details"
          rows={6}
        ></textarea>
        <PrimaryButton>Submit</PrimaryButton>
      </div>
    </div>
  );
};

export default Contact;
