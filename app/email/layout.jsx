import React from "react";

export default function layout({ children }) {
  return (
    <>
      <h1 className="head_text text-center w-full mb-5 pb-6 border-b-2 border-custom4 md:mt-20">
        Please send me the description of your idea
      </h1>
      <div className="w-4/5 md:w-96 m-auto">{children}</div>
    </>
  );
}
