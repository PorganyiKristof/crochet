import React from "react";

export default function layout({ children }) {
  return (
    <>
      <h1 className="head_text text-center w-full mb-5">
        Please send me the description of your`e idea
      </h1>
      <div className="w-full/2">{children}</div>
    </>
  );
}
